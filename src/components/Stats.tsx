import { useScrollAnimation, useCountUp } from "@/hooks/useAnimations";

const stats = [
  { icon: "fa-images", end: 363, label: "Motifs Premium Haute Résolution", suffix: "" },
  { icon: "fa-layer-group", end: 13, label: "Packs Thématiques Organisés", suffix: "" },
  { icon: "fa-bolt", end: 100, label: "Téléchargement Instantané", suffix: "%" },
];

const Stats = () => {
  const { ref, isVisible } = useScrollAnimation(0.3);

  return (
    <section className="bg-brand-black py-20 md:py-32 relative overflow-hidden" ref={ref}>
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-green/[0.03] blur-[120px] rounded-full pointer-events-none" />

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
      className={`group relative p-12 rounded-[3.5rem] bg-brand-white/[0.02] border border-brand-white/[0.05] backdrop-blur-sm text-center animate-in ${isVisible ? "visible" : ""} hover:bg-brand-white/[0.04] hover:border-brand-white/[0.1] transition-all duration-700`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Icon Container with Glow following the reference */}
      <div className="w-20 h-20 mx-auto mb-10 rounded-[2rem] bg-brand-green/[0.05] border border-brand-green/20 flex items-center justify-center relative transition-all duration-700 group-hover:scale-110 shadow-[0_0_30px_rgba(32,201,117,0.1)] group-hover:shadow-[0_0_40px_rgba(32,201,117,0.3)]">
        <i className={`fa-solid ${icon} text-brand-green text-3xl z-10 transition-transform duration-700`} aria-hidden="true" />
      </div>

      {/* Number Display precisely as reference */}
      <p className="font-outfit font-bold text-brand-white text-6xl md:text-7xl tabular-nums leading-none tracking-tight mb-6">
        {count}{suffix}{end > 100 ? "+" : ""}
      </p>

      {/* Label adapted to the site's content but in reference style */}
      <p className="font-montserrat text-brand-white/40 text-lg md:text-xl font-medium max-w-[200px] mx-auto leading-relaxed group-hover:text-brand-white/60 transition-colors duration-500">
        {label}
      </p>
    </div>
  );
};

export default Stats;
