import { useScrollAnimation } from "@/hooks/useAnimations";

const FinalCTA = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="relative bg-transparent py-20 md:py-28 overflow-hidden border-t border-brand-green/15" ref={ref}>
      {/* Subtle pattern */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(#143521 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className={`font-outfit font-bold text-[#143521] text-3xl md:text-5xl text-balance animate-in ${isVisible ? "visible" : ""}`}>
          Prêt à Transformer Votre Intérieur ?
        </h2>
        <p className={`font-montserrat text-[#143521]/70 mt-4 max-w-lg mx-auto animate-in ${isVisible ? "visible" : ""}`} style={{ transitionDelay: "150ms" }}>
          Rejoignez des centaines de clients satisfaits. 363 motifs premium pour seulement 50€.
        </p>
        <a
          href="https://marcshopbusiness.mychariow.shop"
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-8 inline-flex items-center gap-2 bg-brand-green text-white font-montserrat font-semibold px-10 py-4 rounded-xl
            hover:brightness-110 shadow-xl shadow-brand-green/25 transition-all duration-300 active:scale-[0.97]
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
