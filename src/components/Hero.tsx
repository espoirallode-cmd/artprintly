import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useAnimations";

const cardsData = [
  {
    id: 1,
    image: "/cat_9.jpg",
    alt: "Collage Street Art Abstrait",
    rotate: 0,
    translateY: 0,
    zIndex: 20,
  },
  {
    id: 2,
    image: "/cat_8.jpg",
    alt: "Illustration Bleue Graphique",
    rotate: 0,
    translateY: 0,
    zIndex: 20,
    bubble: {
      text: "@coplin",
      bg: "bg-[#2563eb]",
      tailColor: "border-t-[#2563eb]",
    },
  },
  {
    id: 3,
    image: "/cat_7.jpg",
    alt: "Pop Art Vintage Jaune",
    rotate: 0,
    translateY: 0,
    zIndex: 20,
  },
  {
    id: 4,
    image: "/cat_1.jpg",
    alt: "Art Décoratif Contemporain",
    rotate: 0,
    translateY: 0,
    zIndex: 20,
  },
  {
    id: 5,
    image: "/cat_14.jpg",
    alt: "Graphisme & Portrait Rétro",
    rotate: 0,
    translateY: 0,
    zIndex: 20,
  },
  {
    id: 6,
    image: "/cat_11.jpg",
    alt: "Affiche Rétro 66 Pop",
    rotate: 0,
    translateY: 0,
    zIndex: 20,
  },
  {
    id: 7,
    image: "/cat_2.jpg",
    alt: "Typographie & Design Vert",
    rotate: 0,
    translateY: 0,
    zIndex: 20,
    bubble: {
      text: "@andrea",
      bg: "bg-[#4e9471]",
      tailColor: "border-t-[#4e9471]",
    },
  },
];

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section 
      className="relative overflow-hidden flex flex-col items-center justify-center bg-transparent pt-32 sm:pt-36 md:pt-40 pb-20 md:pb-28" 
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-20 flex flex-col items-center">
        {/* Main Title - Centered exactly like reference image */}
        <div className={`text-center max-w-4xl mx-auto animate-in ${isVisible ? "visible" : ""}`}>
          <h1 className="font-outfit font-extrabold text-[#112a1b] text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] tracking-tight leading-[1.08] text-balance">
            A place to display your masterpiece.
          </h1>
        </div>

        {/* All Cards in Foreground (Premier plan) */}
        <div 
          className={`w-full max-w-7xl mx-auto my-12 sm:my-16 md:my-20 px-2 sm:px-4 flex justify-center items-center animate-in ${isVisible ? "visible" : ""}`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="relative flex items-center justify-center py-6 sm:py-10 overflow-x-auto lg:overflow-visible no-scrollbar w-full">
            <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-5 min-w-max lg:min-w-0">
              {cardsData.map((card) => {
                const isHovered = hoveredId === card.id;
                return (
                  <div
                    key={card.id}
                    onMouseEnter={() => setHoveredId(card.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className="relative shrink-0 cursor-pointer transition-all duration-300 ease-out group"
                    style={{
                      transform: isHovered
                        ? "translateY(-16px) scale(1.08)"
                        : "translateY(0) scale(1)",
                      zIndex: isHovered ? 50 : 20,
                    }}
                  >
                    {/* Speech Bubble Tag (@coplin / @andrea) */}
                    {card.bubble && (
                      <div 
                        className="absolute -top-11 left-1/2 -translate-x-1/2 z-50 pointer-events-none transition-transform duration-300 group-hover:scale-110"
                      >
                        <div className={`relative ${card.bubble.bg} text-white font-montserrat text-xs sm:text-sm font-semibold px-3.5 py-1.5 rounded-full shadow-lg whitespace-nowrap`}>
                          {card.bubble.text}
                          {/* Triangle indicator */}
                          <div 
                            className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[7px] ${card.bubble.tailColor}`} 
                          />
                        </div>
                      </div>
                    )}

                    {/* Card Body - In foreground */}
                    <div className="w-28 h-40 sm:w-36 sm:h-52 md:w-44 md:h-60 lg:w-48 lg:h-64 rounded-[1.5rem] sm:rounded-[2rem] overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                      <img
                        src={card.image}
                        alt={card.alt}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Subtitle Text - Centered below cards */}
        <div 
          className={`text-center max-w-2xl mx-auto animate-in ${isVisible ? "visible" : ""}`}
          style={{ transitionDelay: "400ms" }}
        >
          <p className="font-montserrat text-[#143521]/75 text-sm sm:text-base md:text-lg leading-relaxed text-balance">
            Artists can display their masterpieces, and buyers can discover and purchase works that resonate with them.
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://marcshopbusiness.mychariow.shop"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#112a1b] hover:bg-[#1b4332] text-white font-montserrat font-semibold px-8 py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base cursor-pointer"
            >
              Join for $9.99/m
            </a>
            <a
              href="#catalogue"
              className="inline-flex items-center justify-center bg-white/80 hover:bg-white text-[#143521] font-montserrat font-semibold px-7 py-3.5 rounded-full border border-white/90 shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 text-sm sm:text-base backdrop-blur-md cursor-pointer"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
