import { useScrollAnimation } from "@/hooks/useAnimations";

const FinalCTA = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="relative bg-brand-black py-20 md:py-28 overflow-hidden border-t border-brand-white/5" ref={ref}>
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(hsl(var(--brand-white)) 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className={`font-outfit font-bold text-brand-white text-3xl md:text-5xl text-balance animate-in ${isVisible ? "visible" : ""}`}>
          Prêt à Transformer Votre Intérieur ?
        </h2>
        <p className={`font-montserrat text-brand-white/60 mt-4 max-w-lg mx-auto animate-in ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "150ms" }}>
          Rejoignez des centaines de clients satisfaits. 363 motifs premium pour seulement 50€.
        </p>
        <a
          href="#offre"
          className={`mt-8 inline-flex items-center gap-2 bg-brand-green text-brand-white font-montserrat font-semibold px-10 py-4 rounded-xl
            hover:brightness-110 shadow-lg shadow-brand-green/20 transition-all duration-300 active:scale-[0.97]
            animate-in ${isVisible ? "visible" : ""}`}
          style={{ transitionDelay: "300ms" }}
        >
          Je Veux Mon Pack — 50€ <i className="fa-solid fa-arrow-right text-sm" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
};

export default FinalCTA;
