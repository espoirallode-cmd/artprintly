import { useScrollAnimation, useParallax } from "@/hooks/useAnimations";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const parallaxRef = useParallax(0.15);

  return (
    <section className="relative lg:min-h-[90vh] overflow-hidden flex items-start lg:items-center bg-transparent pt-24 lg:pt-20 pb-20 lg:pb-0">
      {/* Decorative Sparkle Star (Matching reference image) */}
      <div className="absolute top-16 right-[18%] hidden lg:block pointer-events-none animate-pulse z-10">
        <svg className="w-6 h-6 text-emerald-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.7)]" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C12 6.627 17.373 12 24 12C17.373 12 12 17.373 12 24C12 17.373 6.627 12 0 12C6.627 12 12 6.627 12 0Z"/>
        </svg>
      </div>

      {/* Soft Blurred Bokeh Orb (Matching reference image bottom-left) */}
      <div className="absolute bottom-10 left-6 w-24 h-24 bg-emerald-400/25 blur-2xl rounded-full pointer-events-none" />

      {/* Mobile Background Image Layer (Positioned on the right, like desktop) */}
      <div className="absolute top-0 right-0 w-[75%] md:w-[60%] h-full lg:hidden z-0">
        <img 
          src="/MTP_25.jpg" 
          alt="Chambre décoration ArtPrintly" 
          className="w-full h-full object-cover object-right opacity-35 md:opacity-45"
        />
        {/* Gradient overlay to ensure text readability on mobile: Fade from background color on left to transparent on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#ebf7ee] via-[#ebf7ee]/85 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#ebf7ee] via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-brand-green/10 to-transparent pointer-events-none hidden lg:block" />

      <div className="container mx-auto px-6 relative z-20" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className={`relative z-30 animate-in ${isVisible ? "visible" : ""} text-left`}>
            <p 
              className="mb-2 tracking-[0.03em] text-brand-green whitespace-normal lg:whitespace-nowrap text-[clamp(1.5rem,4vw,2.5rem)] md:text-[clamp(3rem,5vw,5.5rem)]"
              style={{ 
                fontFamily: "'Cookie', cursive", 
                fontWeight: 400,
                transitionDelay: "0ms"
              }}
            >
              L'art qui sublime chaque mur.
            </p>
            <h1
              className="font-outfit font-bold text-[#143521] leading-[1.05] tracking-tight text-[clamp(1.8rem,5vw+0.5rem,4.5rem)] md:text-[clamp(2.5rem,6vw+1rem,5.5rem)]"
            >
              <span className="whitespace-nowrap">363 Motifs Premium</span>
              <br />
              <span className="text-brand-green">Prêts à Imprimer</span> <span className="whitespace-nowrap lg:whitespace-normal">chez Vous</span>
            </h1>
            <p className="mt-4 md:mt-8 font-montserrat text-[#143521]/75 text-sm md:text-xl max-w-lg leading-relaxed">
              Transformez vos murs en œuvres d'art avec notre collection exclusive de motifs haute résolution. Téléchargement instantané.
            </p>
            <div className="mt-8 md:mt-12 flex flex-wrap gap-4 md:gap-6">
              <a
                href="#catalogue"
                className="inline-flex items-center gap-2 md:gap-3 bg-white/80 text-[#143521] font-montserrat font-semibold px-6 md:px-10 py-3 md:py-5 rounded-xl md:rounded-2xl border border-white/90 backdrop-blur-xl hover:bg-white hover:border-white transition-all active:scale-[0.97] shadow-lg group text-sm md:text-base"
              >
                <i className="fa-solid fa-eye text-brand-green group-hover:scale-110 transition-transform" aria-hidden="true" /> Voir le Catalogue
              </a>
              <a
                href="https://marcshopbusiness.mychariow.shop"
                target="_blank"
                rel="noopener noreferrer"
                className="pulse-cta inline-flex items-center gap-2 bg-brand-green text-white font-montserrat font-semibold px-6 md:px-8 py-3 md:py-4 rounded-xl hover:brightness-110 transition-all active:scale-[0.97] shadow-xl shadow-brand-green/25 text-sm md:text-base"
              >
                <i className="fa-solid fa-bag-shopping" aria-hidden="true" /> Obtenir le Pack
              </a>
            </div>
          </div>

          {/* Right Column: Hero Image Replacement (Desktop) */}
          <div className={`hidden lg:block relative animate-in h-full ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "200ms" }}>
            <div className="relative w-full lg:h-full flex items-center justify-start">
              <img 
                src="/MTP_25.jpg" 
                alt="Chambre décoration ArtPrintly Premium" 
                className="w-full md:w-[125%] lg:w-[150%] h-auto lg:h-full object-cover object-center shadow-2xl lg:shadow-none max-w-none opacity-45"
              />
              
              {/* Mandatory Soft Gradient Overlay on the left */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#ebf7ee] via-transparent to-transparent pointer-events-none lg:block hidden" />
              
              {/* Bottom Shadow Overlay extended to cover the overflowing image width */}
              <div className="absolute left-0 bottom-0 w-[200%] h-32 bg-gradient-to-t from-[#ebf7ee] to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
