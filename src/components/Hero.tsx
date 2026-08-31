import { siteContent } from '../config';

export default function Hero() {
  return (
    <section id="home" className="home-tagline">
      <p className="home-tagline-text">{siteContent.site.tagline}</p>
    </section>
  );
}
