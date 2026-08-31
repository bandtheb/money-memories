/**
 * Pulls real podcast episodes and blog posts from moneymemoriespodcast.com,
 * enriches episode audio from the LPM RSS feed, and writes src/data/content.json.
 */
import { writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, '../src/data/content.json');
const BASE = 'https://moneymemoriespodcast.com/wp-json/wp/v2';
const RSS_URL = 'https://feeds.lpm.org/moneymemoriespodcast';

function decode(html) {
  return html
    .replace(/&#8217;/g, "'")
    .replace(/&#8211;/g, '–')
    .replace(/&#038;/g, '&')
    .replace(/&amp;/g, '&')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function normalizeTitle(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '');
}

function cleanEnclosureUrl(url) {
  const decoded = url.replace(/&amp;/g, '&');
  const redirectMatch = decoded.match(/redirect\.mp3\/(.+)$/);
  if (redirectMatch) {
    return `https://${redirectMatch[1]}`;
  }
  return decoded;
}

function readXmlTag(block, tag) {
  const cdataMatch = block.match(new RegExp(`<${tag}><!\\[CDATA\\[([\\s\\S]*?)\\]\\]><\\/${tag}>`));
  if (cdataMatch) return cdataMatch[1].trim();

  const plainMatch = block.match(new RegExp(`<${tag}>([\\s\\S]*?)<\\/${tag}>`));
  return plainMatch ? plainMatch[1].trim() : '';
}

async function fetchRssEpisodesByTitle() {
  const res = await fetch(RSS_URL);
  if (!res.ok) {
    console.warn(`RSS fetch failed (${res.status}); continuing without RSS enrichment.`);
    return new Map();
  }

  const xml = await res.text();
  const map = new Map();

  for (const block of xml.match(/<item>[\s\S]*?<\/item>/g) ?? []) {
    const title = decode(readXmlTag(block, 'title'));
    const enclosure = block.match(/<enclosure url="([^"]+)"/)?.[1];
    const duration = readXmlTag(block, 'itunes:duration');

    if (!title || !enclosure) continue;

    map.set(normalizeTitle(title), {
      audioFile: cleanEnclosureUrl(enclosure),
      duration,
    });
  }

  return map;
}

async function fetchAll(type, perPage = 100) {
  const items = [];
  let page = 1;
  let totalPages = 1;

  while (page <= totalPages) {
    const res = await fetch(`${BASE}/${type}?per_page=${perPage}&page=${page}&orderby=date&order=desc`);
    if (!res.ok) break;
    totalPages = Number(res.headers.get('x-wp-totalpages') ?? 1);
    items.push(...(await res.json()));
    page += 1;
  }

  return items;
}

function mapEpisode(ep, rssByTitle) {
  const title = decode(ep.title.rendered);
  const rss = rssByTitle.get(normalizeTitle(title));

  return {
    id: ep.id,
    title,
    slug: ep.slug,
    link: ep.link,
    date: ep.date.slice(0, 10),
    excerpt: decode(ep.excerpt?.rendered ?? ''),
    duration: ep.meta?.duration || rss?.duration || '',
    audioFile: ep.meta?.audio_file || rss?.audioFile || '',
    image: ep.episode_player_image || 'https://moneymemoriespodcast.com/wp-content/uploads/2020/07/Mony_Memories_Logo-scaled.jpg',
  };
}

function mapPost(post) {
  return {
    id: post.id,
    title: decode(post.title.rendered),
    slug: post.slug,
    link: post.link,
    date: post.date.slice(0, 10),
    excerpt: decode(post.excerpt?.rendered ?? ''),
  };
}

const rssByTitle = await fetchRssEpisodesByTitle();
const [episodes, posts] = await Promise.all([fetchAll('podcast'), fetchAll('posts')]);
const mappedEpisodes = episodes.map((ep) => mapEpisode(ep, rssByTitle));

const content = {
  syncedAt: new Date().toISOString(),
  site: {
    name: 'Money Memories',
    tagline: 'The podcast designed to make money conversations less taboo.',
    nprUrl: 'https://www.lpm.org/podcast/money-memories',
    rssUrl: 'https://www.lpm.org/podcast/money-memories/rss.xml',
    podcastArchiveUrl: 'https://moneymemoriespodcast.com/podcast/',
    blogUrl: 'https://moneymemoriespodcast.com/blog/',
    downloads: '40,000',
  },
  featuredEpisode: mappedEpisodes[0],
  recentEpisodes: mappedEpisodes.slice(1, 5),
  episodes: mappedEpisodes,
  blogPosts: posts.map(mapPost),
};

mkdirSync(dirname(OUT), { recursive: true });
writeFileSync(OUT, JSON.stringify(content, null, 2));

const missingAudio = mappedEpisodes.filter((ep) => !ep.audioFile).length;
console.log(
  `Synced ${mappedEpisodes.length} episodes (${missingAudio} missing audio) and ${posts.length} blog posts → ${OUT}`,
);
