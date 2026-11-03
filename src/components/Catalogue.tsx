import { useScrollAnimation } from "@/hooks/useAnimations";

/**
 * Bento-grid layout — landscape images in wide cells, portrait in tall cells.
 * LANDSCAPE: cat_1–9, cat_13–15  (1024×682 or 1024×768)
 * PORTRAIT : cat_10, cat_11, cat_12 (682×1024)
 *
 * 4-column grid, auto-rows for base height.
 * Each cell specifies col-span + row-span to keep natural proportions.
 */
const bentoItems = [
  // Row 1
  { src: "/cat_1.jpg",  alt: "Botanique",    col: "col-span-2", row: "row-span-1" },
  { src: "/cat_2.jpg",  alt: "Floral",       col: "col-span-1", row: "row-span-1" },
  { src: "/cat_10.jpg", alt: "Architecture", col: "col-span-1", row: "row-span-2" }, // portrait → spans rows 1-2
  // Row 2
  { src: "/cat_3.jpg",  alt: "Géométrique",  col: "col-span-1", row: "row-span-1" },
  { src: "/cat_4.jpg",  alt: "Aquarelle",    col: "col-span-2", row: "row-span-1" },
  // Row 3
  { src: "/cat_5.jpg",  alt: "Minimaliste",  col: "col-span-1", row: "row-span-1" },
  { src: "/cat_6.jpg",  alt: "Nature",       col: "col-span-1", row: "row-span-1" },
  { src: "/cat_11.jpg", alt: "Bohème",       col: "col-span-1", row: "row-span-2" }, // portrait → spans rows 3-4
  { src: "/cat_7.jpg",  alt: "Animaux",      col: "col-span-1", row: "row-span-1" },
  // Row 4
  { src: "/cat_8.jpg",  alt: "Paysage",      col: "col-span-2", row: "row-span-1" },
  { src: "/cat_12.jpg", alt: "Urbain",       col: "col-span-1", row: "row-span-2" }, // portrait → spans rows 4-5  (goes to col 4)
  // Row 5
  { src: "/cat_9.jpg",  alt: "Abstrait",     col: "col-span-1", row: "row-span-1" },
  { src: "/cat_13.jpg", alt: "Vintage",      col: "col-span-2", row: "row-span-1" },
  // Row 6
  { src: "/cat_14.jpg", alt: "Art Déco",     col: "col-span-2", row: "row-span-1" },
  { src: "/cat_15.jpg", alt: "Contemporain", col: "col-span-2", row: "row-span-1" },
];

const Catalogue = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id="catalogue" className="bg-transparent py-20 md:py-28" ref={ref}>
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

        {/* Bento Grid */}
        <div
          className={`grid grid-cols-4 auto-rows-[160px] sm:auto-rows-[190px] md:auto-rows-[220px] gap-2 sm:gap-3 animate-in ${isVisible ? "visible" : ""}`}
          style={{ transitionDelay: "150ms" }}
        >
          {bentoItems.map((item) => (
            <div
              key={item.src}
              className={`relative overflow-hidden rounded-2xl sm:rounded-3xl group ${item.col} ${item.row}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
              {/* Subtle vignette on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>
          ))}
        </div>

        {/* CTA — unchanged */}
        <div className="mt-10 flex justify-center">
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
    </section>
  );
};

export default Catalogue;

