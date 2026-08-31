import type { Episode } from '../types';

export default function EpisodeCard({ episode }: { episode: Episode }) {
  return (
    <a href={episode.link} className="episode-card" target="_blank" rel="noopener noreferrer">
      <div className="episode-card-image">
        <img src={episode.image} alt="" loading="lazy" />
        <span className="episode-card-icon" aria-hidden="true">
          🎧
        </span>
      </div>
      <div className="episode-card-body">
        <p className="episode-card-label">Episode · {episode.date}</p>
        <h3>{episode.title}</h3>
        <p>{episode.excerpt}</p>
      </div>
    </a>
  );
}
