import { useScrollAnimation } from "@/hooks/useAnimations";

const cardsList = [
  {
    id: 1,
    title: "Design",
    author: "Chengtao Yi",
    image: "/ref_card_1.png",
    alt: "Design - Chengtao Yi",
  },
  {
    id: 2,
    title: "Places",
    author: "Brooke Holm",
    image: "/ref_card_2.png",
    alt: "Places - Brooke Holm",
  },
  {
    id: 3,
    title: "Apogee",
    author: "John Westrock",
    image: "/ref_card_3.png",
    alt: "Apogee - John Westrock",
  },
];

// Duplicate list for seamless infinite loop from right to left
const infiniteCards = [
  ...cardsList,
  ...cardsList,
  ...cardsList,
  ...cardsList,
];

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section 
      ref={ref}
      className="relative w-full min-h-[92vh] sm:min-h-screen flex flex-col justify-between overflow-hidden bg-[#e8e8ea] pt-28 pb-10"
      style={{
        background: "radial-gradient(ellipse 90% 70% at 50% 25%, #f5f5f7 0%, #ebebef 55%, #dedee2 100%)",
      }}
    >
      {/* Background Studio Lighting & Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Soft top-down studio ambient glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[500px] bg-white/40 blur-[120px] rounded-full" />
        {/* Soft floor shadow line */}
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black/[0.04] to-transparent" />
      </div>

      {/* Main Content Area: Floating Infinite Scrolling Cards */}
      <div className={`relative z-10 w-full my-auto py-4 sm:py-8 transition-opacity duration-1000 ${isVisible ? "opacity-100" : "opacity-0"}`}>
        {/* Continuous Horizontal Marquee (scrolling from right side to left) */}
        <div className="w-full overflow-hidden no-scrollbar">
          <div className="animate-cards-scroll flex items-center gap-10 sm:gap-14 md:gap-16 pl-6 sm:pl-12">
            {infiniteCards.map((card, idx) => (
              <div
                key={`${card.id}-${idx}`}
                className="group relative shrink-0 w-[205px] h-[285px] sm:w-[250px] sm:h-[350px] md:w-[285px] md:h-[400px] rounded-[1.75rem] sm:rounded-[2rem] overflow-hidden bg-white shadow-[0_22px_45px_-10px_rgba(0,0,0,0.18),0_10px_20px_-6px_rgba(0,0,0,0.10)] transition-all duration-500 hover:-translate-y-3 hover:scale-[1.03] hover:shadow-[0_32px_65px_-12px_rgba(0,0,0,0.28)] cursor-pointer"
              >
                <img
                  src={card.image}
                  alt={card.alt}
                  className="w-full h-full object-cover select-none pointer-events-none"
                  loading="eager"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Foreground Minimalist Modern Desk, Chair & Plant Scene */}
      <div className="relative z-20 w-full flex justify-center items-end pointer-events-none -mt-16 sm:-mt-24 md:-mt-32">
        <div className="w-[92%] max-w-[560px] sm:max-w-[700px] md:max-w-[820px] lg:max-w-[900px] mx-auto relative">
          <img 
            src="/ref_desk.png" 
            alt="Bureau scandinave minimaliste avec chaise et plante"
            className="w-full h-auto object-contain mx-auto select-none pointer-events-none filter drop-shadow-[0_20px_25px_rgba(0,0,0,0.06)]"
          />
        </div>
      </div>

      {/* Bottom Floating Bar Elements */}
      <div className="relative z-30 container mx-auto px-6 sm:px-10 flex items-end justify-between mt-auto">
        {/* Bottom Left Badge: Stories / Design, Living, Voyage */}
        <div className="flex items-center gap-3 select-none backdrop-blur-md bg-white/40 px-4 py-2.5 rounded-2xl border border-white/60 shadow-sm">
          <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-gradient-to-tr from-[#6366f1] via-[#8b5cf6] to-[#ec4899] shadow-md shadow-indigo-500/20 flex items-center justify-center shrink-0">
            <div className="w-3.5 h-3.5 rounded-sm bg-white/40" />
          </div>
          <div>
            <h3 className="font-outfit font-semibold text-base sm:text-lg text-[#1e1e24] leading-none tracking-tight">
              Stories
            </h3>
            <p className="font-montserrat text-[11px] sm:text-xs text-[#6b7280] font-medium tracking-wide mt-1">
              Design, Living, Voyage
            </p>
          </div>
        </div>

        {/* Bottom Right Call To Action: Link to Collection */}
        <div className="flex items-center gap-3">
          <a
            href="#catalogue"
            className="inline-flex items-center gap-2.5 bg-[#143521] hover:bg-[#1b4332] text-white text-xs sm:text-sm font-montserrat font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-300 pointer-events-auto"
          >
            <span>Explorer la collection</span>
            <i className="fa-solid fa-arrow-right text-xs" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
