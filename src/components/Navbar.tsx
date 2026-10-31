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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
        scrolled
          ? "py-3 backdrop-blur-2xl bg-white/80 border-white/80 shadow-sm"
          : "py-5 backdrop-blur-md bg-white/40 border-white/50"
      }`}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between" aria-label="Navigation principale">
        <a href="#" className="font-outfit text-xl font-bold text-[#143521] tracking-tight flex items-center">
          ArtPrintly<span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-green ml-0.5 mt-1.5 shadow-[0_0_10px_rgba(32,201,117,0.5)]" />
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="nav-link font-montserrat text-sm text-[#143521]/80 hover:text-[#143521] font-medium transition-colors pb-1">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="https://marcshopbusiness.mychariow.shop"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-brand-green text-white font-montserrat font-semibold text-sm px-5 py-2.5 rounded-full hover:brightness-110 shadow-md shadow-brand-green/20 transition-all active:scale-95"
          aria-label="Obtenir le pack"
        >
          Obtenir le pack <i className="fa-solid fa-arrow-right text-xs" aria-hidden="true" />
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-[#143521] text-xl"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          <i className={`fa-solid ${mobileOpen ? "fa-xmark" : "fa-bars"}`} aria-hidden="true" />
        </button>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-2xl border-t border-white/80 px-6 pb-6 pt-4 animate-in visible shadow-xl">
          <ul className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-montserrat text-[#143521]/85 hover:text-[#143521] font-medium transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="https://marcshopbusiness.mychariow.shop"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="mt-4 inline-flex items-center gap-2 bg-brand-green text-white font-montserrat font-semibold text-sm px-5 py-2.5 rounded-full shadow-md shadow-brand-green/20"
          >
            Obtenir le pack <i className="fa-solid fa-arrow-right text-xs" aria-hidden="true" />
          </a>
        </div>
      )}
    </header>
  );
};

export default Navbar;
