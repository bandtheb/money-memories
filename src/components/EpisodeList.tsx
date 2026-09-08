import { useMemo, useState } from 'react';
import { siteContent, getEpisodeNumber } from '../config';
import { episodeHref } from '../routing';
import type { Episode } from '../types';

type SortOrder = 'newest' | 'oldest';

function formatDate(iso: string) {
  const date = new Date(`${iso}T12:00:00`);
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

function truncate(text: string, max = 120) {
  if (!text || text.length <= max) return text;
  return `${text.slice(0, max).trim()}…`;
}

function EpisodeCard({ episode, number }: { episode: Episode; number: number }) {
  return (
    <li className="episode-card">
      <a href={episodeHref(episode.slug)} className="episode-card-link">
        <p className="episode-card-meta">
          Episode {number}
          {episode.duration ? ` · ${episode.duration}` : ''}
        </p>
        <h3 className="episode-card-title">{episode.title}</h3>
        {episode.excerpt ? (
          <p className="episode-card-excerpt">{truncate(episode.excerpt)}</p>
        ) : null}
        <p className="episode-card-date">{formatDate(episode.date)}</p>
      </a>
    </li>
  );
}

export default function EpisodeList() {
  const [sortOrder, setSortOrder] = useState<SortOrder>('newest');

  const episodeNumbers = useMemo(() => {
    const numbers = new Map<number, number>();
    siteContent.episodes.forEach((episode) => {
      numbers.set(episode.id, getEpisodeNumber(episode.id));
    });
    return numbers;
  }, []);

  const episodes = useMemo(() => {
    const list = siteContent.episodes.slice(1);
    if (sortOrder === 'oldest') {
      list.reverse();
    }
    return list;
  }, [sortOrder]);

  return (
    <section id="episodes" className="episode-grid-section">
      <div className="section-heading section-heading-row">
        <h2>All Episodes</h2>
        <div className="episode-sort" role="group" aria-label="Sort episodes">
          <button
            type="button"
            className={sortOrder === 'newest' ? 'active' : undefined}
            onClick={() => setSortOrder('newest')}
          >
            Newest
          </button>
          <button
            type="button"
            className={sortOrder === 'oldest' ? 'active' : undefined}
            onClick={() => setSortOrder('oldest')}
          >
            Oldest
          </button>
        </div>
      </div>
      <ul className="episode-grid">
        {episodes.map((episode) => (
          <EpisodeCard
            key={episode.id}
            episode={episode}
            number={episodeNumbers.get(episode.id) ?? 0}
          />
        ))}
      </ul>
    </section>
  );
}
