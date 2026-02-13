import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';

const homeLinks = [
  { name: 'Home', href: '#home', sectionId: 'home' },
  { name: 'About', href: '#about', sectionId: 'about' },
  { name: 'Projects', href: '#projects', sectionId: 'projects' },
  { name: 'Contact', href: '#contact', sectionId: 'contact' }
];

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();

  function jumpToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  function handleSectionNavigation(event, sectionId) {
    event.preventDefault();

    if (location.pathname === '/') {
      jumpToSection(sectionId);
      return;
    }

    navigate('/', { state: { scrollTo: sectionId } });
  }

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur">
      <nav className="section-container flex items-center justify-between py-4" aria-label="Primary">
        <Link to="/" className="text-lg font-semibold tracking-tight text-white">
          Bhrigu Kansra
        </Link>
        <ul className="flex items-center gap-4 text-sm font-medium text-slate-300 sm:gap-6">
          {homeLinks.map((item) => (
            <li key={item.name}>
              <a
                href={item.href}
                className="hover:text-white focus-visible:text-white"
                aria-label={`Jump to ${item.name}`}
                onClick={(event) => handleSectionNavigation(event, item.sectionId)}
              >
                {item.name}
              </a>
            </li>
          ))}
          <li>
            <NavLink to="/blog" className="rounded-full border border-slate-700 px-3 py-1.5 hover:border-accent-500 hover:text-white">
              Blog
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
