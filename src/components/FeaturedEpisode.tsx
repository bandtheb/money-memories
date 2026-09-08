import { siteContent, getEpisodeNumber } from '../config';
import { episodeHref } from '../routing';
import type { Episode } from '../types';

function formatDate(iso: string) {
  const date = new Date(`${iso}T12:00:00`);
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

function truncate(text: string, max = 220) {
  if (text.length <= max) return text;
  return `${text.slice(0, max).trim()}…`;
}

export default function FeaturedEpisode() {
  const episode: Episode = siteContent.featuredEpisode ?? siteContent.episodes[0];
  if (!episode) return null;

  const number = getEpisodeNumber(episode.id);

  return (
    <section className="featured-episode" aria-labelledby="featured-episode-heading">
      <div className="section-heading">
        <h2 id="featured-episode-heading">Latest Episode</h2>
      </div>
      <article className="featured-card">
        <div className="featured-card-body">
          <p className="featured-card-meta">
            Episode {number}
            {episode.duration ? ` · ${episode.duration}` : ''}
          </p>
          <h3 className="featured-card-title">
            <a href={episodeHref(episode.slug)}>{episode.title}</a>
          </h3>
          {episode.excerpt ? (
            <p className="featured-card-excerpt">{truncate(episode.excerpt, 280)}</p>
          ) : null}
          <p className="featured-card-date">{formatDate(episode.date)}</p>
          <a href={episodeHref(episode.slug)} className="featured-card-link">
            Listen now →
          </a>
        </div>
      </article>
    </section>
  );
}
