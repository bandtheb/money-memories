function isVideoSource(src: string) {
  return /\.mp4(\?|$)/i.test(src);
}

interface EpisodePlayerProps {
  src: string;
  title: string;
}

export default function EpisodePlayer({ src, title }: EpisodePlayerProps) {
  if (isVideoSource(src)) {
    return (
      <video className="episode-player" controls preload="metadata" playsInline src={src}>
        <track kind="captions" />
      </video>
    );
  }

  return <audio className="episode-player" controls preload="metadata" src={src} title={title} />;
}
