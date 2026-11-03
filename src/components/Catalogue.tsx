import { useScrollAnimation } from "@/hooks/useAnimations";

/**
 * 12 landscape-only images (cat_10, cat_11, cat_12 — portrait — removed).
 * Uniform 3-column card grid matching the reference card style.
 */
const landscapeImages = [
  { src: "/cat_1.jpg",  alt: "Botanique" },
  { src: "/cat_2.jpg",  alt: "Floral" },
  { src: "/cat_3.jpg",  alt: "Géométrique" },
  { src: "/cat_4.jpg",  alt: "Aquarelle" },
  { src: "/cat_5.jpg",  alt: "Minimaliste" },
  { src: "/cat_6.jpg",  alt: "Nature" },
  { src: "/cat_7.jpg",  alt: "Animaux" },
  { src: "/cat_8.jpg",  alt: "Paysage" },
  { src: "/cat_9.jpg",  alt: "Abstrait" },
  { src: "/cat_13.jpg", alt: "Vintage" },
  { src: "/cat_14.jpg", alt: "Art Déco" },
  { src: "/cat_15.jpg", alt: "Contemporain" },
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
            12 univers artistiques — 363 créations haute résolution prêtes à imprimer.
          </p>
        </div>

        {/* Card Grid — 1 col mobile / 2 col tablet / 3 col desktop */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 animate-in ${isVisible ? "visible" : ""}`}
          style={{ transitionDelay: "150ms" }}
        >
          {landscapeImages.map((item, i) => (
            <div
              key={item.src}
              className="group relative overflow-hidden rounded-2xl sm:rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-500"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              {/* Fixed 4:3 aspect ratio matching reference card proportions */}
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              {/* Subtle vignette on hover */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/8 transition-colors duration-500 rounded-2xl sm:rounded-3xl pointer-events-none" />
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
