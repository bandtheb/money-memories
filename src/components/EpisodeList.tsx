import { useMemo, useState } from 'react';
import { siteContent, getEpisodeNumber } from '../config';
import { episodeHref } from '../routing';
import type { Episode } from '../types';

type SortOrder = 'newest' | 'oldest';

function formatDate(iso: string) {
  const date = new Date(`${iso}T12:00:00`);
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

function EpisodeRow({ episode, number }: { episode: Episode; number: number }) {
  return (
    <li className="episode-row">
      <a href={episodeHref(episode.slug)}>
        <span className="episode-row-number">{number}</span>
        <span className="episode-row-main">
          <span className="episode-row-title">{episode.title}</span>
          <span className="episode-row-date">{formatDate(episode.date)}</span>
        </span>
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
    const list = [...siteContent.episodes];
    if (sortOrder === 'oldest') {
      list.reverse();
    }
    return list;
  }, [sortOrder]);

  return (
    <section id="episodes" className="episode-list-section">
      <div className="episode-sort" role="group" aria-label="Sort episodes">
        <button
          type="button"
          className={sortOrder === 'newest' ? 'active' : undefined}
          onClick={() => setSortOrder('newest')}
        >
          Newest first
        </button>
        <button
          type="button"
          className={sortOrder === 'oldest' ? 'active' : undefined}
          onClick={() => setSortOrder('oldest')}
        >
          Oldest first
        </button>
      </div>
      <ol className="episode-list">
        {episodes.map((episode) => (
          <EpisodeRow
            key={episode.id}
            episode={episode}
            number={episodeNumbers.get(episode.id) ?? 0}
          />
        ))}
      </ol>
    </section>
  );
}
