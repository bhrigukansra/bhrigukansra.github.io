import matter from 'gray-matter';

const posts = import.meta.glob('../content/blog/*.md', { eager: true, query: '?raw', import: 'default' });

export function getBlogPosts() {
  return Object.entries(posts)
    .map(([path, raw]) => {
      const slug = path.split('/').pop().replace('.md', '');
      const { data, content } = matter(raw);
      return {
        slug,
        title: data.title || slug,
        date: data.date || 'Undated',
        excerpt: data.excerpt || content.slice(0, 160),
        content
      };
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date));
}
