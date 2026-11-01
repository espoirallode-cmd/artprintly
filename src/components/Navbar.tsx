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
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
      <div
        className={`w-full max-w-6xl transition-all duration-500 rounded-full ${
          scrolled
            ? "bg-[#0d0d0d]/95 backdrop-blur-2xl shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-[#0d0d0d]/85 backdrop-blur-xl shadow-[0_4px_24px_rgba(0,0,0,0.3)]"
        }`}
      >
        <nav className="flex items-center justify-between px-6 py-3" aria-label="Navigation principale">
          {/* Logo */}
          <a href="#" className="font-outfit text-xl font-bold text-white tracking-tight flex items-center shrink-0">
            ArtPrintly<span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-green ml-0.5 mt-1.5 shadow-[0_0_10px_rgba(32,201,117,0.5)]" />
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-7">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="font-montserrat text-sm text-white/75 hover:text-white font-medium transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button */}
          <a
            href="https://marcshopbusiness.mychariow.shop"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-brand-green text-white font-montserrat font-semibold text-sm px-5 py-2.5 rounded-full hover:brightness-110 shadow-md shadow-brand-green/20 transition-all active:scale-95 shrink-0"
            aria-label="Obtenir le pack"
          >
            Obtenir le pack <i className="fa-solid fa-arrow-right text-xs" aria-hidden="true" />
          </a>

          {/* Mobile toggle */}
          <button
            className="md:hidden text-white text-xl"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            <i className={`fa-solid ${mobileOpen ? "fa-xmark" : "fa-bars"}`} aria-hidden="true" />
          </button>
        </nav>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-4 right-4 mt-2 bg-[#0d0d0d]/95 backdrop-blur-2xl rounded-2xl border border-white/10 px-6 pb-6 pt-4 shadow-xl">
          <ul className="flex flex-col gap-4">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="font-montserrat text-white/80 hover:text-white font-medium transition-colors"
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
