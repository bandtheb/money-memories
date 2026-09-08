import { siteContent } from '../config';

const LISTEN_LINKS = [
  { label: 'NPR', href: siteContent.site.nprUrl },
  {
    label: 'Apple Podcasts',
    href: 'https://podcasts.apple.com/us/podcast/money-memories/id1522819765',
  },
  { label: 'Spotify', href: 'https://open.spotify.com/show/7FX0Ck4qvvaAwpxd0YJTTO' },
];

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-inner">
        <p className="hero-eyebrow">NPR-Distributed Podcast</p>
        <h1 className="hero-title">{siteContent.site.tagline}</h1>
        <p className="hero-subtitle">
          Independent conversations on money, culture, and identity — one memory at a time with
          host Ilona Limonta-Volkova.
        </p>
        <div className="hero-actions">
          {LISTEN_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-btn"
            >
              Listen on {link.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
