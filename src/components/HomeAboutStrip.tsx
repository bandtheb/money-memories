import { routeHref } from '../routing';

export default function HomeAboutStrip() {
  return (
    <section className="home-about" aria-labelledby="home-about-heading">
      <div className="home-about-inner">
        <h2 id="home-about-heading">A bit about Money Memories</h2>
        <p>
          Money is complicated. The conversations around it are often avoided, the language can feel
          exclusive, and the stakes are deeply personal.
        </p>
        <p>
          At Money Memories, we try to make it less taboo. Each week, we interview founders,
          investors, executives, and community leaders about their earliest money memories — and how
          culture, family, and identity shaped their relationship with finance.
        </p>
        <p>
          I&apos;m Ilona Limonta-Volkova. Born in Cuba, raised in Russia and the United States, I&apos;ve
          worked across venture capital, institutional investing, fintech, and financial journalism.
        </p>
        <a href={routeHref('about')} className="home-about-link">
          Learn more about the show →
        </a>
      </div>
    </section>
  );
}
