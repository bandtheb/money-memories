import { FAQ_ITEMS } from '../seo';
import { routeHref } from '../routing';

const LISTEN_LINKS = [
  { label: 'NPR', href: 'https://www.lpm.org/podcast/money-memories' },
  {
    label: 'Apple Podcasts',
    href: 'https://podcasts.apple.com/us/podcast/money-memories/id1522819765',
  },
  { label: 'Spotify', href: 'https://open.spotify.com/show/7FX0Ck4qvvaAwpxd0YJTTO' },
];

function FaqAnswer({ question, answer }: { question: string; answer: string }) {
  if (question === 'Where can I listen to Money Memories?') {
    return (
      <p>
        Money Memories is available through{' '}
        {LISTEN_LINKS.map((link, index) => (
          <span key={link.label}>
            {index > 0 ? (index === LISTEN_LINKS.length - 1 ? ', and ' : ', ') : null}
            <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-link">
              {link.label}
            </a>
          </span>
        ))}{' '}
        and other major podcast platforms.
      </p>
    );
  }

  if (question === 'How can I appear on Money Memories?') {
    return (
      <p>
        We consider founders, investors, executives, creators and community leaders whose experiences
        align with the themes of Money Memories. Guests are evaluated on a case-by-case basis, with
        priority given to distinctive personal stories about how culture, identity and lived
        experience shape our relationship with money. To be considered, email{' '}
        <a href="mailto:contact@bearandthebull.com" className="text-link">
          contact@bearandthebull.com
        </a>{' '}
        with a brief introduction, your proposed story and why it would resonate with our audience.
        If you discovered the show through this page, include the word mango in your message.
      </p>
    );
  }

  if (question === 'How can I collaborate with Money Memories?') {
    return (
      <p>
        Money Memories works with select organizations on podcast episodes, live events, editorial
        partnerships and sponsorships that align with its audience and mission.{' '}
        <a href={routeHref('work-with-me')} className="text-link">
          Learn more about working with us
        </a>
        .
      </p>
    );
  }

  return <p>{answer}</p>;
}

export default function FAQPage() {
  return (
    <main className="subpage">
      <div className="page-header">
        <h1>FAQ</h1>
        <p className="page-subtitle">Frequently asked questions about Money Memories</p>
      </div>
      <div className="container page-content faq-content">
        {FAQ_ITEMS.map((item, index) => {
          const id = `faq-${index + 1}`;
          return (
            <section key={item.question} className="faq-item" aria-labelledby={id}>
              <h2 id={id} className="faq-question">
                {item.question}
              </h2>
              <div className="faq-answer">
                <FaqAnswer question={item.question} answer={item.answer} />
              </div>
            </section>
          );
        })}
      </div>
    </main>
  );
}
