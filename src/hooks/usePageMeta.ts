import { useEffect } from 'react';
import { getEpisodeBySlug } from '../config';
import { DEFAULT_DESCRIPTION, PAGE_META, faqPageJsonLd, podcastJsonLd } from '../seo';
import type { ParsedRoute, Route } from '../routing';

type StaticRoute = Exclude<Route, 'episode'>;

const JSON_LD_ID = 'page-json-ld';

function setMeta(name: string, content: string, property = false) {
  const attr = property ? 'property' : 'name';
  let element = document.querySelector(`meta[${attr}="${name}"]`);

  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, name);
    document.head.appendChild(element);
  }

  element.setAttribute('content', content);
}

function setJsonLd(data: object | null) {
  let script = document.getElementById(JSON_LD_ID) as HTMLScriptElement | null;

  if (!data) {
    script?.remove();
    return;
  }

  if (!script) {
    script = document.createElement('script');
    script.id = JSON_LD_ID;
    script.type = 'application/ld+json';
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
}

export function usePageMeta({ route, episodeSlug }: ParsedRoute) {
  useEffect(() => {
    if (route === 'episode' && episodeSlug) {
      const episode = getEpisodeBySlug(episodeSlug);
      const title = episode
        ? `${episode.title} | Money Memories`
        : 'Episode | Money Memories';
      const description = episode?.excerpt || DEFAULT_DESCRIPTION;

      document.title = title;
      setMeta('description', description);
      setMeta('og:title', title, true);
      setMeta('og:description', description, true);
      setMeta('twitter:title', title);
      setMeta('twitter:description', description);
      setJsonLd(null);
      return;
    }

    const meta = PAGE_META[route as StaticRoute];
    document.title = meta.title;
    setMeta('description', meta.description);
    setMeta('og:title', meta.title, true);
    setMeta('og:description', meta.description, true);
    setMeta('twitter:title', meta.title);
    setMeta('twitter:description', meta.description);

    if (route === 'faq') {
      setJsonLd(faqPageJsonLd());
      return;
    }

    if (route === 'home') {
      setJsonLd(podcastJsonLd());
      return;
    }

    setJsonLd(null);
  }, [route, episodeSlug]);
}
