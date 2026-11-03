import { useState, useEffect, useCallback } from "react";
import { useScrollAnimation } from "@/hooks/useAnimations";

const themes = [
  { name: "Botanique", image: "/cat_1.jpg", tag: "363 motifs" },
  { name: "Floral", image: "/cat_2.jpg", tag: "363 motifs" },
  { name: "Géométrique", image: "/cat_3.jpg", tag: "363 motifs" },
  { name: "Aquarelle", image: "/cat_4.jpg", tag: "363 motifs" },
  { name: "Minimaliste", image: "/cat_5.jpg", tag: "363 motifs" },
  { name: "Nature", image: "/cat_6.jpg", tag: "363 motifs" },
  { name: "Animaux", image: "/cat_7.jpg", tag: "363 motifs" },
  { name: "Paysage", image: "/cat_8.jpg", tag: "363 motifs" },
  { name: "Abstrait", image: "/cat_9.jpg", tag: "363 motifs" },
  { name: "Architecture", image: "/cat_10.jpg", tag: "363 motifs" },
  { name: "Bohème", image: "/cat_11.jpg", tag: "363 motifs" },
  { name: "Urbain", image: "/cat_12.jpg", tag: "363 motifs" },
  { name: "Vintage", image: "/cat_13.jpg", tag: "363 motifs" },
  { name: "Art Déco", image: "/cat_14.jpg", tag: "363 motifs" },
  { name: "Contemporain", image: "/cat_15.jpg", tag: "363 motifs" },
];

const Catalogue = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const [currentIndex, setCurrentIndex] = useState(2);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  const total = themes.length;

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
  }, [total]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev === total - 1 ? 0 : prev + 1));
  }, [total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handlePrev, handleNext]);

  // Touch swipe support
  const onTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStart === null) return;
    const touchEnd = e.changedTouches[0].clientX;
    const distance = touchStart - touchEnd;
    if (distance > 45) {
      handleNext();
    } else if (distance < -45) {
      handlePrev();
    }
    setTouchStart(null);
  };

  return (
    <section id="catalogue" className="bg-transparent py-20 md:py-28 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className={`text-center mb-10 sm:mb-14 animate-in ${isVisible ? "visible" : ""}`}>
          <h2 className="font-outfit font-bold text-[#143521] text-3xl md:text-5xl text-balance">
            Aperçu de la Collection
          </h2>
          <p className="font-montserrat text-[#143521]/65 mt-3 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            15 univers artistiques — 363 créations haute résolution prêtes à imprimer.
          </p>
        </div>

        {/* 3D Coverflow Carousel Container */}
        <div
          className={`relative w-full max-w-6xl mx-auto h-[340px] sm:h-[450px] md:h-[520px] flex items-center justify-center select-none overflow-hidden animate-in ${isVisible ? "visible" : ""}`}
          style={{ transitionDelay: "200ms" }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {themes.map((theme, i) => {
            let diff = (i - currentIndex) % total;
            if (diff > total / 2) diff -= total;
            if (diff < -total / 2) diff += total;

            const absDiff = Math.abs(diff);

            // Hide cards beyond visible 3D coverflow range
            if (absDiff > 3) {
              return null;
            }

            let scale = 1;
            let opacity = 1;
            let brightness = 1;
            const zIndex = 50 - absDiff * 10;

            if (diff === 0) {
              scale = 1;
              opacity = 1;
              brightness = 1;
            } else if (absDiff === 1) {
              scale = 0.88;
              opacity = 0.85;
              brightness = 0.82;
            } else if (absDiff === 2) {
              scale = 0.74;
              opacity = 0.6;
              brightness = 0.68;
            } else if (absDiff === 3) {
              scale = 0.6;
              opacity = 0.25;
              brightness = 0.5;
            }

            const isCenter = diff === 0;

            return (
              <div
                key={theme.name}
                onClick={() => !isCenter && setCurrentIndex(i)}
                className="coverflow-card w-[210px] sm:w-[280px] md:w-[330px] lg:w-[350px] h-[280px] sm:h-[380px] md:h-[450px] lg:h-[480px] rounded-3xl sm:rounded-[2.25rem] overflow-hidden shadow-[0_20px_50px_rgba(20,50,30,0.22)] cursor-pointer group"
                style={{
                  "--diff": diff,
                  "--scale": scale,
                  "--opacity": opacity,
                  "--brightness": brightness,
                  zIndex,
                } as React.CSSProperties}
              >
                {/* Image only — no overlay text or buttons */}
                <img
                  src={theme.image}
                  alt={theme.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>

        {/* Carousel Navigation Buttons Below (matching reference exactly) */}
        <div className="flex items-center justify-center gap-4 mt-8 sm:mt-10">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full border border-[#143521]/30 hover:border-[#143521] hover:bg-[#143521] hover:text-white text-[#143521] flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95 cursor-pointer bg-white/70 backdrop-blur-md"
            aria-label="Motif précédent"
          >
            <i className="fa-solid fa-arrow-left text-sm" aria-hidden="true" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full border border-[#143521]/30 hover:border-[#143521] hover:bg-[#143521] hover:text-white text-[#143521] flex items-center justify-center transition-all duration-300 shadow-sm active:scale-95 cursor-pointer bg-white/70 backdrop-blur-md"
            aria-label="Motif suivant"
          >
            <i className="fa-solid fa-arrow-right text-sm" aria-hidden="true" />
          </button>
        </div>

        {/* Active Theme Indicator & Link to pack */}
        <div className="text-center mt-4">
          <p className="font-montserrat text-[#143521]/60 text-xs sm:text-sm tracking-widest font-semibold uppercase">
            {String(currentIndex + 1).padStart(2, "0")} / {String(themes.length).padStart(2, "0")} — {themes[currentIndex].name}
          </p>

          <div className="mt-6 flex justify-center">
            <a
              href="https://marcshopbusiness.mychariow.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="pulse-cta inline-flex items-center gap-2.5 bg-brand-green hover:brightness-110 text-white font-montserrat font-semibold px-7 py-3 rounded-full text-xs sm:text-sm shadow-lg shadow-brand-green/20 transition-all active:scale-95"
            >
              <i className="fa-solid fa-bag-shopping text-sm" aria-hidden="true" />
              Obtenir les 363 motifs — 50€
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Catalogue;
