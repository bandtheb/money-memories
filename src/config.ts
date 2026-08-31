import content from './data/content.json';
import type { SiteContent } from './types';
import { routeHref } from './routing';

export const siteContent = content as SiteContent;

export function getEpisodeBySlug(slug: string) {
  return siteContent.episodes.find((episode) => episode.slug === slug);
}

export function getEpisodeNumber(episodeId: number) {
  const index = siteContent.episodes.findIndex((episode) => episode.id === episodeId);
  return index === -1 ? 0 : siteContent.episodes.length - index;
}

export const navLinks = [
  { label: 'Home', href: routeHref('home') },
  { label: 'About', href: routeHref('about') },
  { label: 'Blog', href: routeHref('blog') },
  { label: 'Work With Me', href: routeHref('work-with-me') },
];

export const platformLinks = [
  {
    name: 'NPR',
    href: siteContent.site.nprUrl,
    image: 'https://moneymemoriespodcast.com/wp-content/uploads/2025/05/npr-logo-.png',
  },
  {
    name: 'Spotify',
    href: 'https://open.spotify.com/show/money-memories',
    image: 'https://moneymemoriespodcast.com/wp-content/uploads/2020/12/h4-clients-img2.png',
  },
  {
    name: 'Apple Podcasts',
    href: 'https://podcasts.apple.com/us/podcast/money-memories/id1522819765',
    image: 'https://moneymemoriespodcast.com/wp-content/uploads/revslider/landing-top/landing-rev1-img-71.png',
  },
  {
    name: 'SoundCloud',
    href: 'https://soundcloud.com/moneymemories',
    image: 'https://moneymemoriespodcast.com/wp-content/uploads/2020/12/h4-clients-img5.png',
  },
  {
    name: 'RSS Feed',
    href: 'https://feeds.lpm.org/moneymemoriespodcast',
    image: 'https://moneymemoriespodcast.com/wp-content/uploads/2020/12/h4-clients-img6.png',
  },
];
