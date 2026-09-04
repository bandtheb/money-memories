import { navLinks } from '../config';
import { routeHref, type Route } from '../routing';

interface HeaderProps {
  route: Route;
}

export default function Header({ route }: HeaderProps) {
  const linkRoute: Record<string, Route> = {
    Home: 'home',
    About: 'about',
    FAQ: 'faq',
    Blog: 'blog',
    'Work With Me': 'work-with-me',
  };

  return (
    <header className="site-header">
      <div className="site-header-inner">
        <a href={routeHref('home')} className="logo" aria-label="Money Memories home">
          <img src="./images/money-memories-logo.png" alt="Money Memories" />
        </a>
        <nav aria-label="Main">
          <ul className="nav-links">
            {navLinks.map((link) => {
              const itemRoute = linkRoute[link.label];
              const isActive = itemRoute === route;
              return (
                <li key={link.label}>
                  <a href={link.href} className={isActive ? 'active' : undefined}>
                    {link.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
