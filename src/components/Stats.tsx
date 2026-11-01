import { useScrollAnimation, useCountUp } from "@/hooks/useAnimations";

const stats = [
  { icon: "fa-images", end: 363, label: "Motifs Premium Haute Résolution", suffix: "" },
  { icon: "fa-layer-group", end: 13, label: "Packs Thématiques Organisés", suffix: "" },
  { icon: "fa-bolt", end: 100, label: "Téléchargement Instantané", suffix: "%" },
];

const Stats = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section className="bg-transparent py-10 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green/[0.05] blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Layout: 1 big card left + 2 stacked cards right */}
        <div className="grid grid-cols-2 gap-2.5 md:gap-5 max-w-3xl mx-auto" style={{ gridTemplateRows: "1fr 1fr" }}>

          {/* Big card - spans 2 rows on the left */}
          <StatItem
            {...stats[0]}
            isVisible={isVisible}
            delay={0}
            className="row-span-2 flex flex-col justify-between min-h-[240px] md:min-h-[420px]"
          />

          {/* Top right card */}
          <StatItem
            {...stats[1]}
            isVisible={isVisible}
            delay={150}
            className=""
          />

          {/* Bottom right card */}
          <StatItem
            {...stats[2]}
            isVisible={isVisible}
            delay={300}
            className=""
          />
        </div>
      </div>
    </section>
  );
};

const StatItem = ({
  icon, end, label, suffix, isVisible, delay, className = "",
}: {
  icon: string; end: number; label: string; suffix: string;
  isVisible: boolean; delay: number; className?: string;
}) => {
  const count = useCountUp(end, 2000, isVisible);
  return (
    <div
      className={`group relative p-4 md:p-10 rounded-[1.5rem] md:rounded-[2.5rem] bg-white/80 border border-white/85 backdrop-blur-xl animate-in ${isVisible ? "visible" : ""} hover:bg-white/95 shadow-[0_10px_30px_rgba(20,60,30,0.07)] transition-all duration-700 flex flex-col justify-between ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Icon top-left */}
      <div className="w-8 h-8 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center transition-all duration-700 group-hover:scale-110 shadow-[0_0_20px_rgba(32,201,117,0.12)] group-hover:shadow-[0_0_35px_rgba(32,201,117,0.28)] self-start">
        <i className={`fa-solid ${icon} text-brand-green text-sm md:text-2xl`} aria-hidden="true" />
      </div>

      {/* Bottom: big number + label */}
      <div>
        <p className="font-outfit font-bold text-[#143521] text-3xl md:text-8xl tabular-nums leading-none tracking-tight mb-1.5 md:mb-3">
          {count}{suffix}{end > 100 ? "+" : ""}
        </p>
        <p className="font-montserrat text-[#143521]/55 text-xs md:text-base font-medium leading-snug group-hover:text-[#143521]/75 transition-colors duration-500">
          {label}
        </p>
      </div>
    </div>
  );
};

export default Stats;
