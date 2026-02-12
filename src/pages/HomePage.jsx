import { useState } from 'react';
import { Code2, Database, Globe, Mail, Github, Linkedin } from 'lucide-react';
import SectionHeading from '../components/SectionHeading';

const skills = [
  { name: 'Frontend Engineering', icon: Globe },
  { name: 'React & UI Systems', icon: Code2 },
  { name: 'APIs & Integrations', icon: Database }
];

const projects = [
  {
    title: 'Insight Dashboard',
    description: 'Analytics dashboard with interactive charts and role-based access.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    live: 'https://example.com/demo/dashboard',
    code: 'https://github.com/example/insight-dashboard'
  },
  {
    title: 'TaskFlow App',
    description: 'Productivity app with drag-and-drop task management and reminders.',
    image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?auto=format&fit=crop&w=1200&q=80',
    live: 'https://example.com/demo/taskflow',
    code: 'https://github.com/example/taskflow-app'
  },
  {
    title: 'Portfolio CMS',
    description: 'Minimal CMS for creators with markdown publishing and media management.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80',
    live: 'https://example.com/demo/cms',
    code: 'https://github.com/example/portfolio-cms'
  }
];

function HomePage() {
  const [status, setStatus] = useState('idle');

  async function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    setStatus('sending');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.get('name'),
          email: form.get('email'),
          message: form.get('message')
        })
      });

      if (!response.ok) throw new Error('Request failed');
      setStatus('sent');
      event.currentTarget.reset();
    } catch {
      setStatus('error');
    }
  }

  return (
    <>
      <section id="home" className="section-container grid gap-12 py-20 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-4 inline-flex rounded-full border border-accent-500/50 px-3 py-1 text-sm text-accent-500">
            Welcome to my portfolio
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">Bhrigu Kansra</h1>
          <p className="mt-4 text-xl font-medium text-slate-200">Frontend Engineer & Product Builder</p>
          <p className="mt-4 max-w-xl text-slate-300">
            I build fast, user-friendly digital experiences with modern web technologies and a focus on clean design.
          </p>
        </div>
        <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80" alt="Portrait of Bhrigu Kansra" className="mx-auto aspect-square w-72 rounded-3xl object-cover shadow-xl shadow-black/30" />
      </section>

      <section id="about" className="section-container">
        <SectionHeading title="About Me" subtitle="I enjoy transforming ideas into polished products with thoughtful UX and scalable architecture." />
        <div className="card grid gap-6 md:grid-cols-3">
          <p className="md:col-span-2 text-slate-300">
            I'm a software engineer passionate about crafting performant web apps and delightful interfaces. My work spans design systems, dashboards,
            automation tools, and content-driven platforms. Outside coding, I write technical notes and experiment with product ideas.
          </p>
          <div className="rounded-xl border border-slate-800 bg-slate-950/70 p-4">
            <h3 className="mb-3 font-semibold text-white">Quick Facts</h3>
            <ul className="space-y-2 text-sm text-slate-300">
              <li>📍 Based in India</li>
              <li>💼 Open to collaborations</li>
              <li>✍️ Writing about web engineering</li>
            </ul>
          </div>
        </div>
      </section>

      <section id="skills" className="section-container pt-0">
        <SectionHeading title="Skills" subtitle="Core capabilities I use to build reliable products." />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <article key={skill.name} className="card flex items-center gap-4">
                <Icon aria-hidden="true" className="h-6 w-6 text-accent-500" />
                <h3 className="font-medium text-white">{skill.name}</h3>
              </article>
            );
          })}
        </div>
      </section>

      <section id="projects" className="section-container pt-0">
        <SectionHeading title="Projects" subtitle="Selected work that demonstrates product thinking and technical execution." />
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="card overflow-hidden p-0">
              <img src={project.image} alt={`${project.title} preview`} className="h-48 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="mt-3 text-slate-300">{project.description}</p>
                <div className="mt-4 flex gap-4 text-sm font-medium">
                  <a href={project.live} className="text-accent-500 hover:text-accent-600">Live Demo</a>
                  <a href={project.code} className="text-accent-500 hover:text-accent-600">GitHub</a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="section-container pt-0">
        <SectionHeading title="Contact" subtitle="Let's talk about your next project or role." />
        <div className="grid gap-8 lg:grid-cols-2">
          <form className="card space-y-4" onSubmit={handleSubmit} aria-label="Contact form">
            <label className="block text-sm font-medium text-slate-200">
              Name
              <input name="name" type="text" required className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100" />
            </label>
            <label className="block text-sm font-medium text-slate-200">
              Email
              <input name="email" type="email" required className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100" />
            </label>
            <label className="block text-sm font-medium text-slate-200">
              Message
              <textarea name="message" rows="4" required className="mt-1 w-full rounded-lg border border-slate-700 bg-slate-950 px-3 py-2 text-slate-100" />
            </label>
            <button type="submit" className="rounded-lg bg-accent-500 px-4 py-2 font-medium text-white hover:bg-accent-600">
              Send Message
            </button>
            <p className="text-sm text-slate-400" role="status">
              {status === 'sending' && 'Sending your message...'}
              {status === 'sent' && 'Thanks! Your message has been submitted.'}
              {status === 'error' && 'Something went wrong. Please email me directly.'}
            </p>
          </form>

          <aside className="card space-y-4">
            <h3 className="text-lg font-semibold text-white">Reach me directly</h3>
            <a className="flex items-center gap-2 text-slate-300 hover:text-white" href="mailto:hello@example.com">
              <Mail className="h-4 w-4" /> hello@example.com
            </a>
            <a className="flex items-center gap-2 text-slate-300 hover:text-white" href="https://github.com" target="_blank" rel="noreferrer">
              <Github className="h-4 w-4" /> GitHub
            </a>
            <a className="flex items-center gap-2 text-slate-300 hover:text-white" href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin className="h-4 w-4" /> LinkedIn
            </a>
          </aside>
        </div>
      </section>
    </>
  );
}

export default HomePage;
