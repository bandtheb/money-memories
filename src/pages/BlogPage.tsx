import { siteContent } from '../config';

export default function BlogPage() {
  return (
    <main className="subpage">
      <div className="page-header">
        <h1>Blog</h1>
        <p className="page-subtitle">
          Personal finance guides from{' '}
          <a
            href="https://bearandthebull.beehiiv.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-link"
          >
            Bear and the Bull
          </a>
        </p>
      </div>
      <div className="container page-content">
        <ul className="blog-list">
          {siteContent.blogPosts.map((post) => (
            <li key={post.id}>
              <a href={post.link} target="_blank" rel="noopener noreferrer">
                <p className="blog-card-date">{post.date}</p>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
