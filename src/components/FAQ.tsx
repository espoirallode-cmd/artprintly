import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useAnimations";

const items = [
  { icon: "fa-file-image", q: "Quels formats de fichiers sont inclus ?", a: "Tous les motifs sont fournis en haute résolution (300 DPI minimum), compatibles avec les formats d'impression standards : A3, A4, A5 et 50x70cm." },
  { icon: "fa-download", q: "Comment vais-je recevoir mon fichier ?", a: "Après validation de votre paiement, un lien de téléchargement vous est immédiatement accessible. Votre fichier ZIP contient l'ensemble des 363 motifs organisés par thématique." },
  { icon: "fa-shield-halved", q: "Le paiement est-il sécurisé ?", a: "Oui, le paiement est entièrement sécurisé via notre plateforme partenaire de confiance. Vos données bancaires sont protégées." },
  { icon: "fa-scale-balanced", q: "Puis-je utiliser ces motifs commercialement ?", a: "Oui, nos motifs sont libres de droits et utilisables à des fins personnelles ET commerciales. Imprimez, revendez, décorez sans restriction." },
];

const FAQ = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-brand-black py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className={`font-outfit font-semibold text-brand-white text-2xl md:text-4xl text-center mb-10 md:mb-14 text-balance animate-in ${isVisible ? "visible" : ""}`}>
          Questions Fréquentes
        </h2>

        <div className="space-y-4">
          {items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border border-brand-white/5 transition-all duration-300 animate-in relative overflow-hidden group ${isVisible ? "visible" : ""}
                  ${isOpen ? "bg-brand-dark scale-[1.01]" : "bg-brand-dark/40"}`}
                style={{ transitionDelay: `${i * 100 + 200}ms` }}
              >
                {/* Glow Source (Top-Right Internal) */}
                <div className="absolute -top-10 -right-10 w-24 h-24 bg-brand-green/15 blur-[35px] rounded-full pointer-events-none group-hover:bg-brand-green/25 transition-all duration-500" />
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-3 md:gap-4 p-3 md:p-4 text-left"
                  aria-expanded={isOpen}
                >
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-white/5 rounded-xl flex items-center justify-center shrink-0 border border-brand-white/5">
                    <i className={`fa-solid ${item.icon} text-brand-green text-base md:text-lg`} aria-hidden="true" />
                  </div>
                  <span className="font-montserrat font-bold text-brand-white text-xs md:text-base flex-1 pr-2 md:pr-4">{item.q}</span>
                  <div className={`w-6 h-6 md:w-8 md:h-8 shrink-0 rounded-full bg-brand-white/5 flex items-center justify-center transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                    <i className="fa-solid fa-chevron-down text-brand-white/40 text-[8px] md:text-[10px]" aria-hidden="true" />
                  </div>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: isOpen ? "250px" : "0", opacity: isOpen ? 1 : 0 }}
                >
                  <div className="px-4 md:px-5 pb-5 md:pb-6 pt-2 ml-14 md:ml-16">
                    <p className="font-montserrat text-brand-white/60 text-[11px] md:text-sm leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
