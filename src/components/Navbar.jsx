import { Link, NavLink, useLocation } from 'react-router-dom';

const homeLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' }
];

function Navbar() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/95 backdrop-blur">
      <nav className="section-container flex items-center justify-between py-4" aria-label="Primary">
        <Link to="/" className="text-lg font-semibold tracking-tight text-white">
          Bhrigu Kansra
        </Link>
        <ul className="flex items-center gap-4 text-sm font-medium text-slate-300 sm:gap-6">
          {location.pathname === '/'
            ? homeLinks.map((item) => (
                <li key={item.name}>
                  <a href={item.href} className="hover:text-white focus-visible:text-white" aria-label={`Jump to ${item.name}`}>
                    {item.name}
                  </a>
                </li>
              ))
            : (
              <>
                <li><Link to="/" className="hover:text-white">Home</Link></li>
                <li><Link to="/#about" className="hover:text-white">About</Link></li>
                <li><NavLink to="/blog" className="text-white">Blog</NavLink></li>
                <li><Link to="/#contact" className="hover:text-white">Contact</Link></li>
              </>
            )}
          {location.pathname === '/' && (
            <li>
              <NavLink to="/blog" className="rounded-full border border-slate-700 px-3 py-1.5 hover:border-accent-500 hover:text-white">
                Blog
              </NavLink>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
