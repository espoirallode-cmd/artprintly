import { useScrollAnimation } from "@/hooks/useAnimations";

const steps = [
  { icon: "fa-computer-mouse", title: "1. Tu cliques", desc: "Clique sur le bouton et accède à notre page de paiement sécurisée" },
  { icon: "fa-credit-card", title: "2. Tu règles", desc: "Paiement 100% sécurisé. Carte bancaire ou autres moyens disponibles" },
  { icon: "fa-file-zipper", title: "3. Tu télécharges", desc: "Ton fichier ZIP est disponible immédiatement après paiement" },
];

const HowItWorks = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section id="comment" className="bg-brand-black py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-6">
        <h2 className={`font-outfit font-semibold text-brand-white text-3xl md:text-4xl text-center mb-16 text-balance animate-in ${isVisible ? "visible" : ""}`}>
          Comment ça marche ?
        </h2>

        <div className="relative grid md:grid-cols-3 gap-12 md:gap-8 max-w-4xl mx-auto">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-12 left-[20%] right-[20%] h-[2px] border-t-2 border-dashed border-brand-green/30" />

          {steps.map((s, i) => (
            <div
              key={i}
              className={`text-center relative animate-in ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 200 + 200}ms` }}
            >
              <div className="w-24 h-24 mx-auto rounded-2xl bg-brand-green/10 flex items-center justify-center mb-5 relative z-10">
                <i className={`fa-solid ${s.icon} text-brand-green text-3xl`} aria-hidden="true" />
              </div>
              <h3 className="font-outfit font-semibold text-brand-white text-xl mb-2">{s.title}</h3>
              <p className="font-montserrat text-brand-white/55 text-sm leading-relaxed max-w-xs mx-auto">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
