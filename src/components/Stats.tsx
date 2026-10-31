import { useScrollAnimation, useCountUp } from "@/hooks/useAnimations";

const stats = [
  { icon: "fa-images", end: 363, label: "Motifs Premium Haute Résolution", suffix: "" },
  { icon: "fa-layer-group", end: 13, label: "Packs Thématiques Organisés", suffix: "" },
  { icon: "fa-bolt", end: 100, label: "Téléchargement Instantané", suffix: "%" },
];

const Stats = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section className="bg-transparent py-20 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green/[0.05] blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-8 md:gap-8">
          {stats.map((s, i) => (
            <StatItem key={i} {...s} isVisible={isVisible} delay={i * 150} />
          ))}
        </div>
      </div>
    </section>
  );
};

const StatItem = ({ icon, end, label, suffix, isVisible, delay }: {
  icon: string; end: number; label: string; suffix: string; isVisible: boolean; delay: number;
}) => {
  const count = useCountUp(end, 2000, isVisible);
  return (
    <div
      className={`group relative p-12 rounded-[3.5rem] bg-white/70 border border-white/85 backdrop-blur-xl text-center animate-in ${isVisible ? "visible" : ""} hover:bg-white/90 hover:border-white shadow-[0_15px_35px_rgba(20,60,30,0.05)] transition-all duration-700`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Icon Container with Glow following the reference */}
      <div className="w-20 h-20 mx-auto mb-10 rounded-[2rem] bg-brand-green/10 border border-brand-green/20 flex items-center justify-center relative transition-all duration-700 group-hover:scale-110 shadow-[0_0_30px_rgba(32,201,117,0.15)] group-hover:shadow-[0_0_40px_rgba(32,201,117,0.3)]">
        <i className={`fa-solid ${icon} text-brand-green text-3xl z-10 transition-transform duration-700`} aria-hidden="true" />
      </div>

      {/* Number Display precisely as reference */}
      <p className="font-outfit font-bold text-[#143521] text-6xl md:text-7xl tabular-nums leading-none tracking-tight mb-6">
        {count}{suffix}{end > 100 ? "+" : ""}
      </p>

      {/* Label adapted to the site's content but in reference style */}
      <p className="font-montserrat text-[#143521]/60 text-lg md:text-xl font-medium max-w-[200px] mx-auto leading-relaxed group-hover:text-[#143521]/80 transition-colors duration-500">
        {label}
      </p>
    </div>
  );
};

export default Stats;
