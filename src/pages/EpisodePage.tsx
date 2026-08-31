import EpisodePlayer from '../components/EpisodePlayer';
import { getEpisodeBySlug, getEpisodeNumber } from '../config';
import { routeHref } from '../routing';

function formatDate(iso: string) {
  const date = new Date(`${iso}T12:00:00`);
  return date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
}

interface EpisodePageProps {
  slug: string;
}

export default function EpisodePage({ slug }: EpisodePageProps) {
  const episode = getEpisodeBySlug(slug);

  if (!episode) {
    return (
      <main className="subpage">
        <div className="page-header">
          <h1>Episode not found</h1>
        </div>
        <div className="container page-content">
          <p className="page-lead">We couldn&apos;t find that episode.</p>
          <p>
            <a href={routeHref('home')} className="text-link">
              ← Back to all episodes
            </a>
          </p>
        </div>
      </main>
    );
  }

  const episodeNumber = getEpisodeNumber(episode.id);

  return (
    <main className="subpage episode-page">
      <div className="episode-page-back">
        <a href={routeHref('home')} className="text-link">
          ← All episodes
        </a>
      </div>
      <div className="container episode-page-content">
        <p className="episode-page-meta">
          Episode {episodeNumber}
          {episode.duration ? ` · ${episode.duration}` : ''}
        </p>
        <h1 className="episode-page-title">{episode.title}</h1>
        <p className="episode-page-date">{formatDate(episode.date)}</p>
        {episode.audioFile ? (
          <EpisodePlayer src={episode.audioFile} title={episode.title} />
        ) : (
          <p className="episode-page-unavailable">Audio unavailable for this episode.</p>
        )}
        {episode.excerpt ? <p className="episode-page-description">{episode.excerpt}</p> : null}
      </div>
    </main>
  );
}
