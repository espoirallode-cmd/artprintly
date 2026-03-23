import { useScrollAnimation } from "@/hooks/useAnimations";

const Services = () => {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation(0.1);
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.2);

  return (
    <section className="bg-black py-24 md:py-32" ref={sectionRef}>
      <div className="container mx-auto px-6 max-w-[900px] text-center">
        <h2 className={`font-outfit font-bold text-white text-3xl md:text-5xl mb-6 transition-all duration-1000 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          Vous avez un projet <span className="whitespace-nowrap lg:whitespace-normal">en tête ?</span>
        </h2>
        <p className={`font-montserrat text-brand-white/50 text-base md:text-lg mb-16 transition-all duration-1000 delay-300 ${sectionVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          Ce site a été entièrement conçu sur mesure.<br className="hidden md:block" />
          Nous proposons les mêmes services pour vos projets.
        </p>

        <div className="grid md:grid-cols-2 gap-8 text-left mb-20 relative" ref={cardsRef}>
          {/* Background decoration for glass effect visibility */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-64 bg-brand-green/5 blur-[120px] rounded-full pointer-events-none" />

          {/* Card 1 */}
          <div 
            className={`group relative bg-white/[0.05] backdrop-blur-xl border border-white/10 p-9 rounded-[2rem] transition-all duration-1000 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] ${cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#4f772d]/10 rounded-2xl flex items-center justify-center mb-8 border border-[#4f772d]/20 shadow-[0_0_30px_rgba(79,119,45,0.15)] group-hover:scale-110 transition-transform duration-500">
                <i className="fa-solid fa-laptop-code text-[#4f772d] text-3xl" aria-hidden="true" />
              </div>
              <h3 className="font-outfit font-bold text-white text-2xl mb-4 tracking-tight">Création de Site Web</h3>
              <p className="font-montserrat text-brand-white/50 text-[15px] leading-relaxed">
                Vous avez besoin d'un site vitrine, d'une boutique en ligne ou d'un portfolio professionnel ? 
                Nous créons des sites modernes, rapides et personnalisés selon vos besoins.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div 
            className={`group relative bg-white/[0.05] backdrop-blur-xl border border-white/10 p-9 rounded-[2rem] transition-all duration-1000 delay-200 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] ${cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative z-10">
              <div className="w-16 h-16 bg-[#4f772d]/10 rounded-2xl flex items-center justify-center mb-8 border border-[#4f772d]/20 shadow-[0_0_30px_rgba(79,119,45,0.15)] group-hover:scale-110 transition-transform duration-500">
                <i className="fa-solid fa-pen-nib text-[#4f772d] text-3xl" aria-hidden="true" />
              </div>
              <h3 className="font-outfit font-bold text-white text-2xl mb-4 tracking-tight">Design Graphique & Identité Visuelle</h3>
              <p className="font-montserrat text-brand-white/50 text-[15px] leading-relaxed">
                Logo, charte graphique, supports visuels — nous donnons une identité forte et mémorable à votre marque ou votre projet.
              </p>
            </div>
          </div>
        </div>

        <div className={`flex flex-col items-center gap-4 transition-all duration-1000 delay-500 ${cardsVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}>
          <a
            href="https://wa.me/22901000000"
            target="_blank"
            rel="noopener noreferrer"
            className="pulse-whatsapp flex items-center justify-center whitespace-nowrap gap-2 md:gap-3 bg-white/[0.05] backdrop-blur-xl hover:bg-white/[0.1] text-white font-montserrat font-semibold text-[12px] sm:text-sm md:text-base px-5 md:px-8 py-3 md:py-4 rounded-full transition-all active:scale-95 border border-white/20 shadow-2xl max-w-full"
          >
            <i className="fa-brands fa-whatsapp text-xl" />
            Discutons de votre projet sur WhatsApp
          </a>
          <p className="font-montserrat text-brand-white/30 text-xs flex items-center gap-2">
            <i className="fa-solid fa-clock text-[#4f772d]" aria-hidden="true" />
            Réponse garantie sous 24h
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
