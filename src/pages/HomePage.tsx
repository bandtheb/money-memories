import Hero from '../components/Hero';
import FeaturedEpisode from '../components/FeaturedEpisode';
import EpisodeList from '../components/EpisodeList';
import HomeAboutStrip from '../components/HomeAboutStrip';

export default function HomePage() {
  return (
    <div className="home-shell">
      <Hero />
      <FeaturedEpisode />
      <EpisodeList />
      <HomeAboutStrip />
    </div>
  );
}
