import { useEffect, useState } from 'react';
import { navLinks, siteContent } from '../config';
import { routeHref, type Route } from '../routing';

interface HeaderProps {
  route: Route;
}

export default function Header({ route }: HeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkRoute: Record<string, Route> = {
    Home: 'home',
    About: 'about',
    FAQ: 'faq',
    Blog: 'blog',
    'Work With Me': 'work-with-me',
  };

  useEffect(() => {
    setMenuOpen(false);
  }, [route]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a href={routeHref('home')} className="logo" aria-label="Money Memories home">
          <img src="./images/money-memories-logo.png" alt="Money Memories" />
        </a>
        <nav className="site-nav" aria-label="Main">
          <ul id="mobile-nav" className={`nav-links${menuOpen ? ' nav-links--open' : ''}`}>
            {navLinks.map((link) => {
              const itemRoute = linkRoute[link.label];
              const isActive = itemRoute === route;
              return (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className={isActive ? 'active' : undefined}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li className="nav-links-mobile-cta">
              <a
                href={siteContent.site.nprUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="nav-cta nav-cta--menu"
                onClick={() => setMenuOpen(false)}
              >
                Listen on NPR
              </a>
            </li>
          </ul>
          <a
            href={siteContent.site.nprUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-cta nav-cta--desktop"
          >
            Listen
          </a>
          <button
            type="button"
            className={`nav-toggle${menuOpen ? ' nav-toggle--open' : ''}`}
            aria-expanded={menuOpen}
            aria-controls="mobile-nav"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
            <span />
          </button>
        </nav>
      </div>
    </header>
  );
}
