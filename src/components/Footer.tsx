const Footer = () => (
  <footer className="bg-brand-black border-t border-brand-green/20 py-10">
    <div className="container mx-auto px-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="font-outfit font-bold text-brand-white text-lg flex items-center">
          ArtPrintly<span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-green ml-0.5 mt-1.5" />
        </p>
        <div className="flex flex-col items-center gap-2">
          <div className="flex gap-4 font-montserrat text-brand-white/40 text-xs">
            <a href="#" className="hover:text-brand-white transition-colors">Mentions légales</a>
            <a href="#" className="hover:text-brand-white transition-colors">CGV</a>
            <a href="#" className="hover:text-brand-white transition-colors">Contact</a>
          </div>
          <p className="font-montserrat text-brand-white/30 text-xs">
            © 2025 ArtPrintly — Tous droits réservés
          </p>
        </div>
        <div className="flex gap-4 text-brand-white text-lg">
          <a href="https://wa.me/+2290190107869" target="_blank" rel="noopener noreferrer" className="hover:text-brand-green transition-colors" aria-label="WhatsApp"><i className="fa-brands fa-whatsapp" aria-hidden="true" /></a>
          <a href="#" className="hover:text-brand-green transition-colors" aria-label="Pinterest"><i className="fa-brands fa-pinterest" aria-hidden="true" /></a>
          <a href="#" className="hover:text-brand-green transition-colors" aria-label="Facebook"><i className="fa-brands fa-facebook" aria-hidden="true" /></a>
          <a href="#" className="hover:text-brand-green transition-colors" aria-label="Instagram"><i className="fa-brands fa-instagram" aria-hidden="true" /></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
