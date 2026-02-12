import { useMemo, useState } from 'react';
import SectionHeading from '../components/SectionHeading';
import { getBlogPosts } from '../utils/blog';

function renderMarkdown(content) {
  return content.split('\n').map((line, index) => {
    if (line.startsWith('## ')) {
      return <h2 key={index} className="mt-6 text-2xl font-semibold text-white">{line.replace('## ', '')}</h2>;
    }
    if (line.startsWith('# ')) {
      return <h1 key={index} className="mt-6 text-3xl font-bold text-white">{line.replace('# ', '')}</h1>;
    }
    if (line.match(/^\d+\.\s/)) {
      return <p key={index} className="ml-4 text-slate-300">{line}</p>;
    }
    if (line.startsWith('- ')) {
      return <p key={index} className="ml-4 text-slate-300">• {line.replace('- ', '')}</p>;
    }
    if (!line.trim()) {
      return <div key={index} className="h-2" />;
    }
    return <p key={index} className="text-slate-300">{line}</p>;
  });
}

function BlogPage() {
  const posts = useMemo(() => getBlogPosts(), []);
  const [activeSlug, setActiveSlug] = useState(posts[0]?.slug);
  const activePost = posts.find((post) => post.slug === activeSlug);

  return (
    <section className="section-container">
      <SectionHeading title="Blog" subtitle="Markdown-powered notes on frontend engineering, product, and workflows." />
      <div className="grid gap-8 lg:grid-cols-[280px_1fr]">
        <aside className="card h-fit">
          <h3 className="mb-4 text-lg font-semibold text-white">Posts</h3>
          <ul className="space-y-3" aria-label="Blog post list">
            {posts.map((post) => (
              <li key={post.slug}>
                <button
                  type="button"
                  className={`w-full rounded-lg px-3 py-2 text-left text-sm ${activeSlug === post.slug ? 'bg-slate-800 text-white' : 'text-slate-300 hover:bg-slate-800/50'}`}
                  onClick={() => setActiveSlug(post.slug)}
                >
                  <span className="block font-medium">{post.title}</span>
                  <span className="text-xs text-slate-400">{post.date}</span>
                </button>
              </li>
            ))}
          </ul>
        </aside>

        {activePost && (
          <article className="card">
            <h1 className="text-3xl font-bold text-white">{activePost.title}</h1>
            <p className="mb-4 mt-1 text-sm text-slate-400">{activePost.date}</p>
            <div>{renderMarkdown(activePost.content)}</div>
          </article>
        )}
      </div>
    </section>
  );
}

export default BlogPage;
