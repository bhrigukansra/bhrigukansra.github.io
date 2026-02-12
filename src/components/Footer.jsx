function Footer() {
  return (
    <footer className="border-t border-slate-800">
      <div className="section-container py-8 text-center text-sm text-slate-400">
        <p>© {new Date().getFullYear()} Bhrigu Kansra. Built with React + Tailwind CSS.</p>
      </div>
    </footer>
  );
}

export default Footer;
