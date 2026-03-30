import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function useCountUp(target, duration = 2000, startOnVisible = true) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!startOnVisible) {
      setStarted(true);
      return;
    }
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [startOnVisible]);

  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [started, target, duration]);

  return { count, ref };
}

function StatCard({ index, number, suffix, label, gradient, decorIcon }) {
  const numVal = parseInt(number.replace(/\D/g, ""), 10);
  const { count, ref } = useCountUp(numVal, 2200);

  return (
    <div
      ref={ref}
      className={`stat-card relative overflow-hidden rounded-2xl p-7 flex flex-col justify-between h-[400px] group transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl ${gradient}`}
      style={{ border: "1px solid rgba(255,255,255,0.06)" }}
    >
      {/* Index */}
      <span
        className="text-xs font-semibold tracking-widest uppercase"
        style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'DM Mono', monospace" }}
      >
        {String(index).padStart(2, "0")}/
      </span>

      {/* Decorative icon */}
      {decorIcon && (
        <div className="absolute top-4 right-4 opacity-80 pointer-events-none select-none text-5xl decor-icon">
          {decorIcon}
        </div>
      )}

      {/* Number */}
      <div className="mt-auto">
        <p
          className="font-black leading-none"
          style={{
            fontFamily: "'Bebas Neue', 'Anton', sans-serif",
            fontSize: "clamp(3rem, 6vw, 5rem)",
            color: "#ffffff",
            letterSpacing: "-0.02em",
          }}
        >
          {count.toLocaleString()}
          <span className="align-super text-2xl ml-0.5">{suffix}</span>
        </p>
        <p
          className="mt-2 text-sm font-medium tracking-wide"
          style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'DM Sans', sans-serif" }}
        >
          {label}
        </p>
      </div>
    </div>
  );
}

const stats = [
  {
    index: 1,
    number: "24",
    suffix: "+",
    label: "years in business",
    gradient: "bg-[#1e1e1e]",
  },
  {
    index: 2,
    number: "450",
    suffix: "+",
    label: "videos created",
    gradient: "bg-[#1e1e1e]",
    decorIcon: "🎬",
  },
  {
    index: 3,
    number: "100",
    suffix: "M+",
    label: "views archived for clients",
    gradient: "",
    isAccent: true,
  },
  {
    index: 4,
    number: "98",
    suffix: "%",
    label: "satisfied customers",
    gradient: "",
    isDark: true,
  },
  {
    index: 5,
    number: "32",
    suffix: "+",
    label: "industry awards",
    gradient: "bg-[#1e1e1e]",
    decorIcon: "🏆",
  },
];

export default function StatsGrid() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Get all stat cards
      const cards = gsap.utils.toArray(".stat-card");
      
      // Animate cards from left and right sides - FASTER
      cards.forEach((card, index) => {
        const direction = index % 2 === 0 ? -1 : 1; // Alternate left and right
        
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            end: "top 20%",
            toggleActions: "play none none reverse",
          },
          x: direction * 250, // Come from left (-250) or right (250)
          opacity: 0,
          scale: 0.9,
          duration: 0.6, // Faster duration
          ease: "elastic.out(1, 0.7)",
          delay: index * 0.08, // Faster stagger
        });
      });

      // Animate decorative icons with bounce - FASTER
      gsap.from(".decor-icon", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
        scale: 0,
        rotation: 360,
        duration: 0.8, // Faster duration
        ease: "back.out(2)",
        stagger: 0.1, // Faster stagger
        delay: 0.3,
      });

      // Add floating animation to cards after they appear
      gsap.to(".stat-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 60%",
          toggleActions: "play none none reverse",
        },
        y: "-=10",
        duration: 2,
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: {
          amount: 0.5,
          from: "random",
        },
      });

      // Animate the grid container itself - FASTER
      gsap.from(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        duration: 0.5, // Faster duration
        ease: "power2.out",
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@500&display=swap');
        
        .stat-card {
          transform-style: preserve-3d;
          perspective: 1000px;
        }
        
        .stat-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(
            135deg,
            rgba(255, 255, 255, 0.1) 0%,
            transparent 50%,
            rgba(255, 255, 255, 0.05) 100%
          );
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          border-radius: inherit;
        }
        
        .stat-card:hover::before {
          opacity: 1;
        }
        
        .stat-card::after {
          content: '';
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(
            circle,
            rgba(255, 255, 255, 0.1) 0%,
            transparent 70%
          );
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          transform: rotate(45deg);
        }
        
        .stat-card:hover::after {
          opacity: 0.3;
          animation: shimmer 2s infinite;
        }
        
        @keyframes shimmer {
          0% { transform: rotate(45deg) translateY(0); }
          100% { transform: rotate(45deg) translateY(-100%); }
        }
        
        .decor-icon {
          filter: drop-shadow(0 0 10px rgba(255, 255, 255, 0.3));
        }
      `}</style>

      <div
        ref={containerRef}
        className="min-h-screen flex items-center justify-center p-6"
        style={{ backgroundColor: "#1a1a1a" }}
      >
        <div className="w-full" style={{ maxWidth: "1500px" }}>
          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">

            {/* Card 01 */}
            <div className="lg:col-span-2">
              <StatCard {...stats[0]} />
            </div>

            {/* Card 02 */}
            <div
              className="stat-card relative overflow-hidden rounded-2xl p-7 flex flex-col justify-between h-[400px] group transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl bg-[#1e1e1e] lg:col-span-2"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'DM Mono', monospace" }}
              >
                02/
              </span>
              <div className="absolute top-3 right-3 text-6xl opacity-85 pointer-events-none select-none decor-icon">
                🎬
              </div>
              <div className="mt-auto">
                <CountDisplay target={450} suffix="+" />
                <p className="mt-2 text-sm font-medium tracking-wide" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'DM Sans', sans-serif" }}>
                  videos created
                </p>
              </div>
            </div>

            {/* Card 03 — accent gradient, spans visually larger on lg */}
            <div
              className="stat-card relative overflow-hidden rounded-2xl p-7 flex flex-col justify-between h-[400px] sm:col-span-2 lg:col-span-2 group transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{
                background: "linear-gradient(135deg, #f97316 0%, #ef4444 60%, #ec4899 100%)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "rgba(255,255,255,0.7)", fontFamily: "'DM Mono', monospace" }}
              >
                03/
              </span>
              <div className="mt-auto">
                <CountDisplay target={100} suffix="M+" />
                <p className="mt-2 text-sm font-medium tracking-wide" style={{ color: "rgba(255,255,255,0.85)", fontFamily: "'DM Sans', sans-serif" }}>
                  views archived for clients
                </p>
              </div>
            </div>

            {/* Card 04 — dark red, spans 2 cols on sm+ */}
            <div
              className="stat-card relative overflow-hidden rounded-2xl p-7 flex flex-col justify-between h-[400px] sm:col-span-2 lg:col-span-3 group transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
              style={{
                background: "radial-gradient(ellipse at top left, #4a1a1a 0%, #1e1e1e 60%)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'DM Mono', monospace" }}
              >
                04/
              </span>
              <div className="mt-auto">
                <CountDisplay target={98} suffix="%" />
                <p className="mt-2 text-sm font-medium tracking-wide" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'DM Sans', sans-serif" }}>
                  satisfied customers
                </p>
              </div>
            </div>

            {/* Card 05 */}
            <div
              className="stat-card relative overflow-hidden rounded-2xl p-7 flex flex-col justify-between h-[400px] sm:col-span-2 lg:col-span-3 group transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl bg-[#1e1e1e]"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'DM Mono', monospace" }}
              >
                05/
              </span>
              <div className="mt-auto flex items-end justify-between gap-4">
                <div>
                  <CountDisplay target={32} suffix="+" />
                  <p className="mt-2 text-sm font-medium tracking-wide" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'DM Sans', sans-serif" }}>
                    industry awards
                  </p>
                </div>
                <div className="opacity-80 pointer-events-none select-none flex-shrink-0 decor-icon">
                  <img
                    src="https://demo2.pavothemes.com/motiox/wp-content/uploads/2024/12/h1-who04.png"
                    alt="Award"
                    className="w-40 h-60 object-contain"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
}

// Reusable count display used inside inline cards
function CountDisplay({ target, suffix }) {
  const { count, ref } = useCountUp(target, 2200);
  return (
    <p
      ref={ref}
      className="font-black leading-none"
      style={{
        fontFamily: "'Bebas Neue', 'Anton', sans-serif",
        fontSize: "clamp(3rem, 6vw, 5rem)",
        color: "#ffffff",
        letterSpacing: "-0.02em",
      }}
    >
      {count.toLocaleString()}
      <span className="align-super text-2xl ml-0.5">{suffix}</span>
    </p>
  );
}
