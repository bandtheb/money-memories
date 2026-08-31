import { siteContent } from '../config';
import EpisodeCard from './EpisodeCard';
import { routeHref } from '../routing';

export default function EpisodesSection() {
  const { featuredEpisode, recentEpisodes } = siteContent;

  return (
    <section id="latest-episodes" className="section">
      <div className="container">
        <div className="featured-episode">
          <div>
            <div className="episode-meta">
              <span className="play-dot" aria-hidden="true" />
              <span>
                Latest episode
                {featuredEpisode.duration ? ` · ${featuredEpisode.duration}` : ''}
              </span>
            </div>
            <h2>{featuredEpisode.title}</h2>
            <p>{featuredEpisode.excerpt}</p>
            <a href={featuredEpisode.link} className="text-link" target="_blank" rel="noopener noreferrer">
              Episode page →
            </a>
          </div>
          <div className="featured-image-wrap">
            <span className="featured-badge">New episode</span>
            <img src={featuredEpisode.image} alt="" loading="lazy" />
          </div>
        </div>

        <div style={{ marginTop: '72px' }}>
          <h2 className="section-title">Recent episodes</h2>
          <div className="episode-grid">
            {recentEpisodes.map((episode) => (
              <EpisodeCard key={episode.id} episode={episode} />
            ))}
          </div>
          <p style={{ marginTop: '32px' }}>
            <a href={routeHref('home')} className="text-link">
              View all {siteContent.episodes.length} episodes →
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
