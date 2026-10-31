const Footer = () => (
  <footer className="bg-white/40 backdrop-blur-md border-t border-brand-green/20 py-10">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-outfit font-bold text-[#143521] text-lg flex items-center">
          ArtPrintly<span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-green ml-0.5 mt-1.5" />
        </p>
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-4 font-montserrat text-[#143521]/60 text-xs">
            <a href="#" className="hover:text-[#143521] transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-[#143521] transition-colors">CGV</a>
            <a href="#" className="hover:text-[#143521] transition-colors">Contact</a>
          </div>
          <p className="font-montserrat text-[#143521]/45 text-xs">
            © 2026 ArtPrintly — Tous droits réservés
          </p>
        </div>
        <div className="flex gap-4 text-[#143521]/80 text-lg">
          <a href="https://wa.me/+2290190107869" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp" aria-hidden="true" /></a>
          <a href="https://www.facebook.com/ArtPrintly" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors" aria-label="Facebook"><i className="fa-brands fa-facebook" aria-hidden="true" /></a>
          <a href="mailto:supportartprintly@gmail.com" className="hover:text-brand-green transition-colors" aria-label="Email"><i className="fa-solid fa-envelope" aria-hidden="true" /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
