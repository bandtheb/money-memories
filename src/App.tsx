import Header from './components/Header';
import Footer from './components/Footer';
import { useHashRoute } from './hooks/useHashRoute';
import { usePageMeta } from './hooks/usePageMeta';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import FAQPage from './pages/FAQPage';
import BlogPage from './pages/BlogPage';
import WorkWithMePage from './pages/WorkWithMePage';
import EpisodePage from './pages/EpisodePage';

export default function App() {
  const parsedRoute = useHashRoute();
  const { route, episodeSlug } = parsedRoute;
  usePageMeta(parsedRoute);

  return (
    <div className="app-shell">
      <Header route={route} />
      <main className="site-main">
        {route === 'home' && <HomePage />}
        {route === 'about' && <AboutPage />}
        {route === 'faq' && <FAQPage />}
        {route === 'episode' && episodeSlug ? <EpisodePage slug={episodeSlug} /> : null}
        {route === 'blog' && <BlogPage />}
        {route === 'work-with-me' && <WorkWithMePage />}
      </main>
      <Footer />
    </div>
  );
}
