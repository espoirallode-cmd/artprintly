import { useRef, useEffect } from "react";
import { useScrollAnimation } from "@/hooks/useAnimations";

const allImages = [
  { image: "/cat_9.jpg",  alt: "Collage Street Art Abstrait" },
  { image: "/cat_8.jpg",  alt: "Illustration Bleue Graphique" },
  { image: "/cat_7.jpg",  alt: "Pop Art Vintage Jaune" },
  { image: "/cat_1.jpg",  alt: "Art Décoratif Contemporain" },
  { image: "/cat_14.jpg", alt: "Graphisme & Portrait Rétro" },
  { image: "/cat_11.jpg", alt: "Affiche Rétro 66 Pop" },
  { image: "/cat_2.jpg",  alt: "Typographie & Design Vert" },
];

const CARD_WIDTH  = 210;
const GAP         = 22;
const STEP        = CARD_WIDTH + GAP;
const LOOP_WIDTH  = STEP * allImages.length;   // one set width

/* Triple the set so we always have cards to the left and right */
const cards = [...allImages, ...allImages, ...allImages];

const Hero = () => {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const trackRef     = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef      = useRef<number>(0);
  const posRef       = useRef(0);           // offset from 0 → LOOP_WIDTH

  useEffect(() => {
    const track     = trackRef.current;
    const container = containerRef.current;
    if (!track || !container) return;

    const SPEED = 1.0; // px per frame  →  left-to-right scroll

    const tick = () => {
      /* Increase posRef → track shifts right → cards flow left→right */
      posRef.current += SPEED;
      if (posRef.current >= LOOP_WIDTH) posRef.current -= LOOP_WIDTH;

      /*
       * Start showing copy-2 (middle copy) so there's always content on both sides.
       *   translateX = posRef - LOOP_WIDTH
       *   posRef=0  → translateX=-LOOP_WIDTH → copy-2 starts at left of viewport
       *   posRef=LOOP_WIDTH → translateX=0  → copy-1 starts (seamless, looks identical)
       */
      track.style.transform = `translateX(${posRef.current - LOOP_WIDTH}px)`;

      /* ── 3-D perspective rotation ── */
      const cRect  = container.getBoundingClientRect();
      const cCx    = cRect.left + cRect.width / 2;

      track.querySelectorAll<HTMLElement>(".hc3d").forEach((el) => {
        const r   = el.getBoundingClientRect();
        const cx  = r.left + r.width / 2;
        const d   = cx - cCx;                                 // signed distance from center
        const max = cRect.width * 0.56;                       // max reach before full rotation
        const t   = Math.max(-1, Math.min(1, d / max));       // clamped -1..1
        const ry  = t * -52;                                  // rotateY: left cards tilt right, right cards tilt left
        const sc  = 1 - Math.abs(t) * 0.18;                  // slight scale down at edges
        const op  = Math.max(0.18, 1 - Math.abs(t) * 0.65);  // fade at edges
        el.style.transform = `rotateY(${ry}deg) scale(${sc})`;
        el.style.opacity   = String(op);
      });

      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, []);

  return (
    <section
      className="relative overflow-hidden flex flex-col items-center justify-center bg-transparent pt-32 sm:pt-36 md:pt-40 pb-20 md:pb-28"
      ref={ref}
    >
      <div className="container mx-auto px-4 sm:px-6 relative z-20 flex flex-col items-center">

        {/* ── Main Title ── */}
        <div className={`text-center max-w-4xl mx-auto animate-in ${isVisible ? "visible" : ""}`}>
          <h1 className="font-outfit font-extrabold text-[#112a1b] text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] tracking-tight leading-[1.08] text-balance">
            A place to display your masterpiece.
          </h1>
        </div>

        {/* ── 3-D Perspective Scrolling Cards ── */}
        <div
          className={`w-full my-12 sm:my-16 md:my-20 animate-in ${isVisible ? "visible" : ""}`}
          style={{ transitionDelay: "200ms" }}
        >
          {/* Outer clip + perspective container */}
          <div
            ref={containerRef}
            className="relative w-full overflow-hidden"
            style={{
              perspective:       "1100px",
              perspectiveOrigin: "50% 50%",
              /* Soft fade on left & right edges to blend with background */
              maskImage:
                "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, transparent 0%, black 12%, black 88%, transparent 100%)",
            }}
          >
            {/* Scrolling track */}
            <div
              ref={trackRef}
              className="flex py-10"
              style={{
                gap:         `${GAP}px`,
                width:       "max-content",
                willChange:  "transform",
              }}
            >
              {cards.map((card, i) => (
                <div
                  key={i}
                  className="hc3d shrink-0"
                  style={{
                    width:          `${CARD_WIDTH}px`,
                    height:         "270px",
                    transformStyle: "preserve-3d",
                    willChange:     "transform, opacity",
                  }}
                >
                  {/* Card face */}
                  <div
                    className="w-full h-full rounded-[2rem] overflow-hidden"
                    style={{
                      border:     "3px solid rgba(255,255,255,0.9)",
                      boxShadow:  "0 28px 65px -12px rgba(0,0,0,0.24), 0 10px 28px -8px rgba(0,0,0,0.14)",
                      background: "#fff",
                    }}
                  >
                    <img
                      src={card.image}
                      alt={card.alt}
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── Subtitle & Buttons ── */}
        <div
          className={`text-center max-w-2xl mx-auto animate-in ${isVisible ? "visible" : ""}`}
          style={{ transitionDelay: "400ms" }}
        >
          <p className="font-montserrat text-[#143521]/75 text-sm sm:text-base md:text-lg leading-relaxed text-balance">
            Artists can display their masterpieces, and buyers can discover and purchase works that resonate with them.
          </p>

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
