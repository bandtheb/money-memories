import Header from './components/Header';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import { useHashRoute } from './hooks/useHashRoute';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import BlogPage from './pages/BlogPage';
import WorkWithMePage from './pages/WorkWithMePage';
import EpisodePage from './pages/EpisodePage';

export default function App() {
  const { route, episodeSlug } = useHashRoute();
  const showScrollProgress = route === 'home';

  return (
    <div className="app-shell">
      {showScrollProgress ? <ScrollProgress /> : null}
      <Header route={route} />
      {route === 'home' && <HomePage />}
      {route === 'about' && <AboutPage />}
      {route === 'episode' && episodeSlug ? <EpisodePage slug={episodeSlug} /> : null}
      {route === 'blog' && <BlogPage />}
      {route === 'work-with-me' && <WorkWithMePage />}
      <Footer />
    </div>
  );
}
