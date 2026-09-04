import type { Route } from './routing';

export const SITE_NAME = 'Money Memories';

export const DEFAULT_DESCRIPTION =
  'Money Memories is an NPR-distributed podcast exploring how culture, family and lived experience shape the way people understand, earn, spend and invest money.';

export interface FaqItem {
  question: string;
  answer: string;
}

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: 'What is Money Memories?',
    answer:
      'Money Memories is an NPR-distributed podcast exploring how culture, family and lived experience shape the way people understand, earn, spend and invest money.',
  },
  {
    question: 'Who hosts Money Memories?',
    answer:
      'Money Memories is hosted by investor, writer and media creator Ilona Limonta-Volkova. Ilona was born in Cuba, raised in Russia and the United States, and has worked across venture capital, institutional investing, fintech and financial journalism.',
  },
  {
    question: 'What topics does Money Memories cover?',
    answer:
      'The podcast covers personal finance, entrepreneurship, investing, immigration, identity, financial inclusion and the emotional experiences that influence people’s relationships with money.',
  },
  {
    question: 'Who appears on Money Memories?',
    answer:
      'Guests include founders, investors, executives, creators and community leaders who share personal stories about money, ambition, risk and building financial security.',
  },
  {
    question: 'Where can I listen to Money Memories?',
    answer:
      'Money Memories is available through NPR, Apple Podcasts, Spotify and other major podcast platforms.',
  },
  {
    question: 'Does Money Memories record live episodes?',
    answer:
      'Yes. Money Memories produces live conversations and events that bring together founders, investors, financial leaders and local communities.',
  },
  {
    question: 'How can I appear on Money Memories?',
    answer:
      'We consider founders, investors, executives, creators and community leaders whose experiences align with the themes of Money Memories. Guests are evaluated on a case-by-case basis, with priority given to distinctive personal stories about how culture, identity and lived experience shape our relationship with money. To be considered, send a brief introduction, your proposed story and why it would resonate with our audience. If you discovered the show through this page, include the word mango in your message.',
  },
  {
    question: 'How can I collaborate with Money Memories?',
    answer:
      'Money Memories works with select organizations on podcast episodes, live events, editorial partnerships and sponsorships that align with its audience and mission.',
  },
];

type StaticRoute = Exclude<Route, 'episode'>;

export const PAGE_META: Record<StaticRoute, { title: string; description: string }> = {
  home: {
    title: 'Money Memories | NPR Podcast About Money, Culture & Identity',
    description: DEFAULT_DESCRIPTION,
  },
  about: {
    title: 'About Ilona Limonta-Volkova | Money Memories Host',
    description:
      'Meet Ilona Limonta-Volkova, host of Money Memories — an NPR-distributed podcast making money conversations less taboo through stories of culture, identity and finance.',
  },
  faq: {
    title: 'FAQ | Money Memories Podcast',
    description:
      'Answers about Money Memories: what the NPR podcast covers, who hosts it, where to listen, live events, guest applications and collaboration opportunities.',
  },
  blog: {
    title: 'Blog | Money Memories & Bear and the Bull',
    description:
      'Personal finance guides and insights from Money Memories and Bear and the Bull.',
  },
  'work-with-me': {
    title: 'Work With Money Memories | Collaborate & Sponsor',
    description:
      'Partner with Money Memories on podcast episodes, live events, editorial collaborations and sponsorships.',
  },
};

export function faqPageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };
}

export function podcastJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'PodcastSeries',
    name: SITE_NAME,
    description: DEFAULT_DESCRIPTION,
    url: 'https://moneymemoriespodcast.com/',
    author: {
      '@type': 'Person',
      name: 'Ilona Limonta-Volkova',
    },
    genre: ['Personal Finance', 'Business', 'Society & Culture'],
    inLanguage: 'en-US',
    webFeed: 'https://feeds.lpm.org/moneymemoriespodcast',
  };
}
