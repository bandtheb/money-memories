export type Route = 'home' | 'about' | 'faq' | 'blog' | 'work-with-me' | 'episode';

export interface ParsedRoute {
  route: Route;
  episodeSlug?: string;
}

export function parseRoute(hash: string): ParsedRoute {
  const path = hash.replace(/^#/, '').replace(/^\//, '').split('?')[0] || 'home';

  if (path.startsWith('episode/')) {
    const slug = decodeURIComponent(path.slice('episode/'.length));
    if (slug) {
      return { route: 'episode', episodeSlug: slug };
    }
  }

  switch (path) {
    case 'about':
      return { route: 'about' };
    case 'faq':
      return { route: 'faq' };
    case 'episodes':
      return { route: 'home' };
    case 'blog':
      return { route: 'blog' };
    case 'work-with-me':
      return { route: 'work-with-me' };
    default:
      return { route: 'home' };
  }
}

export function routeHref(route: Exclude<Route, 'episode'>): string {
  return route === 'home' ? '#home' : `#${route}`;
}

export function episodeHref(slug: string): string {
  return `#episode/${encodeURIComponent(slug)}`;
}
