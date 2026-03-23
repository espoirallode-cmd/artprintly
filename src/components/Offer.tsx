import { useScrollAnimation } from "@/hooks/useAnimations";

const features = [
  "363 motifs haute résolution",
  "13 packs thématiques distincts et organisés",
  "Fichiers optimisés pour l'impression",
  "Compatible tous formats (A3, A4, A5, 50x70)",
  "Livraison instantanée par téléchargement ZIP",
];

const Offer = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <section id="offre" className="bg-brand-black py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className={`font-outfit font-semibold text-brand-white text-3xl md:text-4xl text-center mb-14 text-balance animate-in ${isVisible ? "visible" : ""}`}>
          Une Offre Complète, Un Prix Unique
        </h2>

        <div
          className={`max-w-3xl mx-auto offer-outer animate-in ${isVisible ? "visible" : ""}`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="offer-dot" />
          <div className="offer-card">
            <div className="offer-ray" />
            <div className="offer-line offer-topl" />
            <div className="offer-line offer-bottoml" />
            <div className="offer-line offer-leftl" />
            <div className="offer-line offer-rightl" />
            
            <div className="grid md:grid-cols-5 relative z-20">
              {/* Left: features */}
              <div className="md:col-span-3 p-8 md:p-10 md:pt-20 border-b md:border-b-0 md:border-r border-white/5">
                <ul className="space-y-4 ml-8">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 font-montserrat text-brand-white/85 text-sm">
                      <i className="fa-solid fa-circle-check text-brand-green mt-0.5 shrink-0" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
              {/* Right: bonus */}
                <div className="md:col-span-2 bg-brand-green/10 p-8 md:p-10 flex flex-col items-center justify-center text-center relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand-green/30 to-transparent" />
                  <i className="fa-solid fa-gift text-brand-green text-4xl mb-4" aria-hidden="true" />
                  <p className="font-outfit font-bold text-brand-white text-lg tracking-tight">BONUS OFFERT</p>
                  <p className="font-montserrat text-brand-white/85 text-sm mt-3 leading-relaxed">
                    Mockups de présentation professionnels
                  </p>
                  <p className="font-montserrat text-brand-white/50 text-xs mt-2 italic">
                    Visualisez vos motifs dans de vrais intérieurs
                  </p>
                </div>
            </div>

            {/* Bottom: pricing */}
            <div className="border-t border-white/5 p-8 md:p-12 text-center relative z-20 bg-white/[0.02]">
              <div className="relative -top-6">
                <p className="font-montserrat text-brand-white/40 line-through text-base">Valeur totale : 99€</p>
                <p className="font-outfit font-extrabold text-brand-white text-6xl mt-4 bg-gradient-to-br from-white via-white to-brand-green/50 bg-clip-text text-transparent">50€</p>
                <p className="font-montserrat text-brand-white/60 text-sm mt-3 tracking-wide">Paiement unique — Accès à vie</p>
              </div>
              <a
                href="#"
                className="pulse-cta mt-8 relative -top-6 inline-flex items-center justify-center gap-2 bg-brand-green border border-white/20 text-brand-white font-montserrat font-bold px-7 py-3 rounded-xl w-full max-w-[280px] hover:brightness-110 hover:-translate-y-1 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.6)] transition-all active:scale-[0.98] overflow-hidden group shadow-[0_10px_30px_-10px_rgba(0,0,0,0.5)] text-sm whitespace-nowrap"
                aria-label="Obtenir le pack maintenant"
              >
                <div className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                <i className="fa-solid fa-bag-shopping text-base" aria-hidden="true" />
                <span className="relative z-10">Obtenir Mon Pack Maintenant</span>
                <i className="fa-solid fa-arrow-right text-sm" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
