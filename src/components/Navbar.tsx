import { useState, useEffect } from "react";

const navLinks = [
  { label: "Catalogue", href: "#catalogue" },
  { label: "Offre", href: "#offre" },
  { label: "Comment ça marche", href: "#comment" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-brand-white/10 ${
        scrolled ? "py-3 backdrop-blur-2xl bg-brand-black/40" : "py-5 backdrop-blur-xl bg-brand-black/20"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between" aria-label="Navigation principale">
        <a href="#" className="font-outfit text-xl font-bold text-brand-white tracking-tight flex items-center">
          ArtPrintly<span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-green ml-0.5 mt-1.5 shadow-[0_0_10px_rgba(40,82,31,0.5)]" />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link font-montserrat text-sm text-brand-white/80 hover:text-brand-white transition-colors pb-1">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#offre"
          className="hidden md:inline-flex items-center gap-2 bg-brand-green text-brand-white font-montserrat font-semibold text-sm px-5 py-2.5 rounded-full hover:brightness-110 transition-all active:scale-95"
          aria-label="Obtenir le pack"
        >
          Obtenir le pack <i className="fa-solid fa-arrow-right text-xs" aria-hidden="true" />
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-brand-white text-xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <i className={`fa-solid ${mobileOpen ? "fa-xmark" : "fa-bars"}`} aria-hidden="true" />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-brand-black/60 backdrop-blur-2xl border-t border-brand-white/10 px-6 pb-6 pt-4 animate-in visible">
          <ul className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-montserrat text-brand-white/80 hover:text-brand-white transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#offre"
            onClick={() => setMobileOpen(false)}
            className="mt-4 inline-flex items-center gap-2 bg-brand-green text-brand-white font-montserrat font-semibold text-sm px-5 py-2.5 rounded-full"
          >
            Obtenir le pack <i className="fa-solid fa-arrow-right text-xs" aria-hidden="true" />
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
