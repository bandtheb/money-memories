import { siteContent } from '../config';
import { routeHref } from '../routing';

interface BlogSectionProps {
  preview?: boolean;
}

export default function BlogSection({ preview = false }: BlogSectionProps) {
  const posts = preview ? siteContent.blogPosts.slice(0, 6) : siteContent.blogPosts;

  return (
    <section id={preview ? 'blog-preview' : 'blog'} className="section section-alt">
      <div className="container">
        <h2 className="section-title">
          {preview ? 'From the Bear and the Bull blog' : 'Blog'}
        </h2>
        {preview && (
          <p style={{ color: 'var(--gray)', maxWidth: '640px', margin: '0 0 32px' }}>
            Personal finance articles — bilingual English and Spanish guides.
          </p>
        )}
        <div className="blog-grid">
          {posts.map((post) => (
            <a
              key={post.id}
              href={post.link}
              className="blog-card"
              target="_blank"
              rel="noopener noreferrer"
            >
              <p className="blog-card-date">{post.date}</p>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
            </a>
          ))}
        </div>
        {preview && (
          <p style={{ marginTop: '32px' }}>
            <a href={routeHref('blog')} className="text-link">
              View all {siteContent.blogPosts.length} articles →
            </a>
          </p>
        )}
      </div>
    </section>
  );
}
