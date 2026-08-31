import { siteContent } from '../config';

function InstagramIcon() {
  return (
    <svg
      className="footer-social-icon"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function SpotifyIcon() {
  return (
    <svg className="footer-social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.402.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  );
}

function ApplePodcastsIcon() {
  return (
    <svg className="footer-social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 1.5a8.5 8.5 0 110 17 8.5 8.5 0 010-17zm0 3.25a5.25 5.25 0 100 10.5 5.25 5.25 0 000-10.5zm0 1.75a3.5 3.5 0 110 7 3.5 3.5 0 010-7zm0 7.5v3.5h1.5v-3.5H12z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg className="footer-social-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124zM3.555 20.452h3.559V9H3.555v11.452z" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-bar">
        <div className="footer-social">
          <a
            href={siteContent.site.nprUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-social-npr"
            aria-label="NPR"
          >
            NPR
          </a>
          <a
            href="https://open.spotify.com/show/7FX0Ck4qvvaAwpxd0YJTTO"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Spotify"
          >
            <SpotifyIcon />
          </a>
          <a
            href="https://podcasts.apple.com/us/podcast/money-memories/id1522819765"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Apple Podcasts"
          >
            <ApplePodcastsIcon />
          </a>
          <a
            href="https://www.instagram.com/ilonaonthemoney"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <InstagramIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/ilona-limonta-volkova-a83009b1/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <LinkedInIcon />
          </a>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} Bear and the Bull · Money Memories
        </p>
      </div>
    </footer>
  );
}
