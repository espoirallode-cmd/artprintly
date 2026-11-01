import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useAnimations";

const cardsData = [
  {
    id: 1,
    image: "/hero_card_1.jpg",
    alt: "Étudiante avec casque qui écrit à son bureau",
    rotate: -9,
    translateY: 12,
    zIndex: 10,
  },
  {
    id: 2,
    image: "/hero_card_2.jpg",
    alt: "Carnet de notes, tasse de café et plante",
    rotate: -3,
    translateY: 0,
    zIndex: 20,
  },
  {
    id: 3,
    image: "/hero_card_3.jpg",
    alt: "Personne assise contemplant un lac de montagne",
    rotate: 3,
    translateY: 4,
    zIndex: 30,
  },
  {
    id: 4,
    image: "/hero_card_4.jpg",
    alt: "Cycliste sur route de montagne au coucher du soleil",
    rotate: 9,
    translateY: 16,
    zIndex: 20,
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
        {/* Main Title */}
        <div className={`text-center max-w-4xl mx-auto animate-in ${isVisible ? "visible" : ""}`}>
          <h1 className="font-outfit font-extrabold text-[#112a1b] text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] tracking-tight leading-[1.08] text-balance">
            A place to display your masterpiece.
          </h1>
        </div>

        {/* 4 Cards Deck Layout Matching Exactly The Reference Design */}
        <div 
          className={`w-full max-w-5xl mx-auto my-12 sm:my-16 md:my-20 px-2 sm:px-6 flex justify-center items-center animate-in ${isVisible ? "visible" : ""}`}
          style={{ transitionDelay: "200ms" }}
        >
          <div className="relative flex items-center justify-center py-8 sm:py-12 overflow-visible w-full">
            <div className="flex items-center justify-center min-w-0 sm:min-w-[760px] md:min-w-[880px] lg:min-w-0">
              {cardsData.map((card, index) => {
                const isHovered = hoveredId === card.id;
                const isHiddenOnMobile = card.id === 4;
                return (
                  <div
                    key={card.id}
                    onMouseEnter={() => setHoveredId(card.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    className={`relative shrink-0 cursor-pointer transition-all duration-300 ease-out group ${
                      isHiddenOnMobile ? "hidden sm:block" : "block"
                    } ${
                      index === 0 ? "ml-0" : "-ml-6 sm:-ml-12 md:-ml-16 lg:-ml-20"
                    }`}
                    style={{
                      transform: isHovered
                        ? "translateY(-20px) scale(1.08) rotate(0deg)"
                        : `translateY(${card.translateY}px) rotate(${card.rotate}deg)`,
                      zIndex: isHovered ? 60 : card.zIndex,
                    }}
                  >

                    {/* Card Body - Rounded with thick white border and soft shadow */}
                    <div className="w-32 h-36 sm:w-48 sm:h-52 md:w-56 md:h-60 lg:w-64 lg:h-68 rounded-[1.75rem] sm:rounded-[2.5rem] overflow-hidden border-[3px] sm:border-[4.5px] border-white bg-white shadow-[0_22px_50px_-10px_rgba(20,50,30,0.22),0_10px_24px_-8px_rgba(0,0,0,0.1)] transition-shadow duration-300 group-hover:shadow-[0_32px_65px_-12px_rgba(0,0,0,0.32)]">
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

        {/* Subtitle Text */}
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
