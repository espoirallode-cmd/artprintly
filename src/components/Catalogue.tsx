import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useAnimations";

const themes = [
  { name: "Botanique", color: "from-green-900/60 to-green-800/40", icon: "fa-leaf", image: "/cat_1.jpg" },
  { name: "Floral", color: "from-rose-900/40 to-green-900/30", icon: "fa-seedling", image: "/cat_2.jpg" },
  { name: "Géométrique", color: "from-slate-800/60 to-green-900/30", icon: "fa-shapes", image: "/cat_3.jpg" },
  { name: "Aquarelle", color: "from-sky-900/40 to-green-800/30", icon: "fa-palette", image: "/cat_4.jpg" },
  { name: "Minimaliste", color: "from-neutral-800/60 to-neutral-700/40", icon: "fa-minus", image: "/cat_5.jpg" },
  { name: "Nature", color: "from-emerald-900/50 to-green-900/40", icon: "fa-tree", image: "/cat_6.jpg" },
  { name: "Animaux", color: "from-orange-900/40 to-amber-900/30", icon: "fa-paw", image: "/cat_7.jpg" },
  { name: "Paysage", color: "from-blue-900/50 to-indigo-900/30", icon: "fa-mountain", image: "/cat_8.jpg" },
  { name: "Abstrait", color: "from-purple-900/40 to-pink-900/30", icon: "fa-brush", image: "/cat_9.jpg" },
  { name: "Architecture", color: "from-zinc-900/60 to-slate-900/40", icon: "fa-building-columns", image: "/cat_10.jpg" },
  { name: "Bohème", color: "from-yellow-900/40 to-orange-900/30", icon: "fa-sun", image: "/cat_11.jpg" },
  { name: "Urbain", color: "from-gray-900/60 to-slate-900/50", icon: "fa-city", image: "/cat_12.jpg" },
  { name: "Vintage", color: "from-amber-900/50 to-stone-900/40", icon: "fa-clock-rotate-left", image: "/cat_13.jpg" },
  { name: "Art Déco", color: "from-yellow-900/60 to-amber-900/40", icon: "fa-gem", image: "/cat_14.jpg" },
  { name: "Contemporain", color: "from-zinc-800 to-slate-900", icon: "fa-palette", image: "/cat_15.jpg" },
];

const Catalogue = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);
  const [isExpanded, setIsExpanded] = useState(false);

  const displayedThemes = isExpanded ? themes : themes.slice(0, 6);

  return (
    <section id="catalogue" className="bg-brand-black py-20 md:py-28" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-14 animate-in ${isVisible ? "visible" : ""}`}>
          <h2 className="font-outfit font-semibold text-brand-white text-3xl md:text-4xl text-balance">
            Aperçu de la Collection
          </h2>
          <p className="font-montserrat text-brand-white/50 mt-3 max-w-2xl mx-auto">
            Quelques motifs de notre collection premium — 363 créations vous attendent.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedThemes.map((t, i) => {
            const verticalThemes = ["Architecture", "Bohème", "Urbain"];
            const isVertical = verticalThemes.includes(t.name);
            return (
              <div
                key={t.name}
                className={`group relative ${isVertical ? "aspect-[3/4]" : "aspect-[4/3]"} rounded-2xl overflow-hidden shadow-lg shadow-black/10 cursor-pointer
                  border border-transparent hover:border-brand-green transition-all duration-500
                  animate-in ${isVisible ? "visible" : ""}`}
                style={{ transitionDelay: `${(i % 6) * 100 + 200}ms` }}
              >
              <div className={`absolute inset-0 bg-gradient-to-br ${t.color} transition-transform duration-700 ease-out`}>
                {t.image ? (
                  <img 
                    src={t.image} 
                    alt={t.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <i className={`fa-solid ${t.icon} text-brand-green/20 text-6xl`} aria-hidden="true" />
                  </div>
                )}
                <div className={`absolute inset-0 bg-brand-black/20 group-hover:bg-brand-black/0 transition-colors duration-500`} />
              </div>
            </div>
          );
        })}
      </div>

        {isExpanded && (
          <div className="flex justify-center mt-16 animate-in visible">
            <p className="font-montserrat text-brand-green/80 italic text-lg text-center border-t border-brand-white/10 pt-10 px-6 max-w-2xl">
              Voir le reste des motifs dans le pack
            </p>
          </div>
        )}

        {!isExpanded && (
          <div className="flex justify-center">
            <button 
              onClick={() => setIsExpanded(true)}
              className={`mt-10 inline-flex items-center gap-2 bg-brand-white/[0.05] border border-brand-white/10 backdrop-blur-md px-8 py-3.5 rounded-2xl font-montserrat text-brand-green font-semibold cursor-pointer hover:bg-brand-white/10 hover:border-brand-white/20 transition-all shadow-xl animate-in ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: "400ms" }}
            >
              Voir plus
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Catalogue;
