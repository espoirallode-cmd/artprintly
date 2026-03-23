import { useScrollAnimation } from "@/hooks/useAnimations";

const testimonials = [
  { name: "Sophie M.", city: "Paris", text: "Qualité exceptionnelle ! Les motifs sont magnifiques et la résolution parfaite pour l'impression. Je recommande vivement !", initials: "SM" },
  { name: "Julie R.", city: "Lyon", text: "J'ai redécoré tout mon salon grâce à ces motifs. Le pack est une vraie mine d'or, largement rentabilisé !", initials: "JR" },
  { name: "Marie T.", city: "Bordeaux", text: "Super collection et téléchargement instantané. Les mockups bonus sont un vrai plus pour visualiser le rendu !", initials: "MT" },
];

const Testimonials = () => {
  const { ref, isVisible } = useScrollAnimation(0.15);
  // Duplicate testimonials for a smoother sliding loop
  const displayItems = [...testimonials, ...testimonials, ...testimonials, ...testimonials];
  const quantity = displayItems.length;

  return (
    <section className="bg-brand-black py-20 md:py-32 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6 mb-16">
        <h2 className={`font-outfit font-semibold text-brand-white text-3xl md:text-5xl text-center text-balance animate-in ${isVisible ? "visible" : ""}`}>
          Ce Qu'ils En Disent
        </h2>
      </div>

      <div 
        className="testimonial-slider"
        style={{ 
          "--width": "330px", 
          "--height": "340px", 
          "--quantity": quantity 
        } as React.CSSProperties}
      >
        <div className="testimonial-list">
          {displayItems.map((t, i) => (
            <div
              key={i}
              className="testimonial-item px-1"
              style={{ "--position": i + 1 } as React.CSSProperties}
            >
              <div className="bg-brand-dark rounded-[2.5rem] p-8 border border-brand-white/5 h-full flex flex-col shadow-2xl backdrop-blur-sm group">
                <i className="fa-solid fa-quote-left text-brand-green/20 text-3xl mb-6 block group-hover:text-brand-green/40 transition-colors" aria-hidden="true" />
                <p className="font-montserrat text-brand-white/80 text-[15px] leading-relaxed italic mb-8 flex-grow">
                  "{t.text}"
                </p>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-2xl bg-brand-green/10 border border-brand-green/20 flex items-center justify-center font-outfit font-bold text-brand-green text-sm shadow-inner group-hover:bg-brand-green/20 transition-colors">
                    {t.initials}
                  </div>
                  <div>
                    <p className="font-montserrat font-bold text-brand-white text-sm tracking-tight">{t.name}</p>
                    <p className="font-montserrat text-brand-white/30 text-xs uppercase tracking-widest">{t.city}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5 text-brand-green text-[10px]">
                    {[...Array(5)].map((_, j) => (
                      <i key={j} className="fa-solid fa-star" aria-hidden="true" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
