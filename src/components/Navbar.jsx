function GithubIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
      <path d="M12 0C5.37 0 0 5.5 0 12.3c0 5.44 3.44 10.05 8.21 11.68.6.12.82-.27.82-.6 0-.3-.01-1.08-.02-2.12-3.34.75-4.04-1.65-4.04-1.65-.55-1.44-1.34-1.82-1.34-1.82-1.09-.77.08-.76.08-.76 1.21.09 1.85 1.29 1.85 1.29 1.07 1.87 2.81 1.33 3.49 1.02.11-.79.42-1.33.76-1.64-2.67-.31-5.47-1.38-5.47-6.13 0-1.35.46-2.46 1.22-3.33-.12-.31-.53-1.56.12-3.25 0 0 1-.33 3.3 1.27a11.1 11.1 0 0 1 6.02 0c2.29-1.6 3.29-1.27 3.29-1.27.65 1.69.24 2.94.12 3.25.76.87 1.22 1.98 1.22 3.33 0 4.76-2.81 5.82-5.48 6.13.43.38.81 1.13.81 2.28 0 1.65-.02 2.98-.02 3.38 0 .33.22.72.83.6C20.56 22.34 24 17.74 24 12.3 24 5.5 18.63 0 12 0Z" />
    </svg>
  );
}

function LinkedinIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" {...props}>
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.59 0 4.25 2.36 4.25 5.44v6.3ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45Z" />
    </svg>
  );
}

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-bordersubtle bg-bgprimary/90 backdrop-blur">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2 font-mono text-sm">
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span className="tracking-wider text-textsecondary">
            ALTIZOU · <span className="text-accent">DEV</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest text-textsecondary">
          <a href="#projets" className="hover:text-accent transition">PROJETS</a>
          <a href="#apropos" className="hover:text-accent transition">A PROPOS</a>
          <a href="#competences" className="hover:text-accent transition">COMPETENCES</a>
          <a href="#contact" className="hover:text-accent transition">CONTACT</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/Altizou" target="_blank" rel="noopener noreferrer" className="text-textsecondary hover:text-accent transition">
            <GithubIcon />
          </a>
          <a href="https://www.linkedin.com/in/ramanantsirahonanaaltizou" target="_blank" rel="noopener noreferrer" className="text-textsecondary hover:text-accent transition">
            <LinkedinIcon />
          </a>
        </div>
      </div>
    </nav>
  );
}