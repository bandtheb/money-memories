import { useEffect, useState } from 'react';
import { parseRoute, type ParsedRoute } from '../routing';

export function useHashRoute() {
  const [parsed, setParsed] = useState<ParsedRoute>(() => parseRoute(window.location.hash));

  useEffect(() => {
    const onHashChange = () => setParsed(parseRoute(window.location.hash));
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [parsed.route, parsed.episodeSlug]);

  return parsed;
}
