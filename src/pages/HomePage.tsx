import Hero from '../components/Hero';
import EpisodeList from '../components/EpisodeList';

export default function HomePage() {
  return (
    <div className="home-shell">
      <Hero />
      <EpisodeList />
    </div>
  );
}
