import { useScrollAnimation, useParallax } from "@/hooks/useAnimations";

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const parallaxRef = useParallax(0.15);

  return (
    <section className="relative min-h-[90vh] overflow-hidden flex items-center bg-brand-black pt-20">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-gradient-to-l from-brand-green/20 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-20" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Column: Text Content */}
          <div className={`relative z-30 animate-in ${isVisible ? "visible" : ""} text-left`}>
            <p 
              className="mb-2 tracking-[0.03em] text-brand-green whitespace-nowrap"
              style={{ 
                fontFamily: "'Cookie', cursive", 
                fontSize: "clamp(3rem, 5vw, 5.5rem)", 
                fontWeight: 400,
                transitionDelay: "0ms"
              }}
            >
              L'art qui sublime chaque mur.
            </p>
            <h1
              className="font-outfit font-bold text-brand-white leading-[1.05] tracking-tight"
              style={{ fontSize: "clamp(2.5rem, 6vw + 1rem, 5.5rem)" }}
            >
              <span className="whitespace-nowrap">363 Motifs Premium</span>
              <br />
              <span className="text-brand-green">Prêts à Imprimer</span> chez Vous
            </h1>
            <p className="mt-8 font-montserrat text-brand-white/70 text-lg md:text-xl max-w-lg leading-relaxed">
              Transformez vos murs en œuvres d'art avec notre collection exclusive de motifs haute résolution. Téléchargement instantané.
            </p>
            <div className="mt-12 flex flex-wrap gap-6">
              <a
                href="#catalogue"
                className="inline-flex items-center gap-3 bg-brand-white/[0.08] text-brand-white font-montserrat font-semibold px-10 py-5 rounded-2xl border border-brand-white/10 backdrop-blur-xl hover:bg-brand-white/[0.15] hover:border-brand-white/20 transition-all active:scale-[0.97] shadow-2xl group"
              >
                <i className="fa-solid fa-eye text-brand-green group-hover:scale-110 transition-transform" aria-hidden="true" /> Voir le Catalogue
              </a>
              <a
                href="#offre"
                className="pulse-cta inline-flex items-center gap-2 bg-brand-green text-brand-white font-montserrat font-semibold px-8 py-4 rounded-xl hover:brightness-110 transition-all active:scale-[0.97] shadow-xl shadow-brand-green/20"
              >
                <i className="fa-solid fa-bag-shopping" aria-hidden="true" /> Obtenir le Pack
              </a>
            </div>
          </div>

          {/* Right Column: Hero Image Replacement */}
          <div className={`relative animate-in h-full ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "200ms" }}>
            <div className="relative w-full lg:h-full flex items-center justify-start">
              <img 
                src="/MTP_25.jpg" 
                alt="Chambre décoration ArtPrintly Premium" 
                className="w-[125%] lg:w-[150%] h-auto lg:h-full object-cover object-center shadow-2xl lg:shadow-none max-w-none opacity-50"
              />
              
              {/* Mandatory Black Gradient Overlay on the left */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-black via-transparent to-transparent pointer-events-none lg:block hidden" />
              
              {/* Bottom Shadow Overlay extended to cover the overflowing image width */}
              <div className="absolute left-0 bottom-0 w-[200%] h-32 bg-gradient-to-t from-brand-black to-transparent pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
