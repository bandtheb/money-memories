export interface Episode {
  id: number;
  title: string;
  slug: string;
  link: string;
  date: string;
  excerpt: string;
  duration: string;
  audioFile: string;
  image: string;
}

export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  link: string;
  date: string;
  excerpt: string;
}

export interface SiteContent {
  syncedAt: string;
  site: {
    name: string;
    tagline: string;
    nprUrl: string;
    rssUrl?: string;
    podcastArchiveUrl: string;
    blogUrl: string;
    downloads: string;
  };
  featuredEpisode: Episode;
  recentEpisodes: Episode[];
  episodes: Episode[];
  blogPosts: BlogPost[];
}
