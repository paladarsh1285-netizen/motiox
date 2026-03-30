import { useEffect, useRef, useState } from "react";

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
      className={`relative overflow-hidden rounded-2xl p-7 flex flex-col justify-between h-[400px] group transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl ${gradient}`}
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
        <div className="absolute top-4 right-4 opacity-80 pointer-events-none select-none text-5xl">
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
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600&family=DM+Mono:wght@500&display=swap');
      `}</style>

      <div
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
              className="relative overflow-hidden rounded-2xl p-7 flex flex-col justify-between h-[400px] group transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl bg-[#1e1e1e] lg:col-span-2"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'DM Mono', monospace" }}
              >
                02/
              </span>
              <div className="absolute top-3 right-3 text-6xl opacity-85 pointer-events-none select-none">
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
              className="relative overflow-hidden rounded-2xl p-7 flex flex-col justify-between h-[400px] sm:col-span-2 lg:col-span-2 group transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
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
              className="relative overflow-hidden rounded-2xl p-7 flex flex-col justify-between h-[400px] sm:col-span-2 lg:col-span-3 group transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl"
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
              className="relative overflow-hidden rounded-2xl p-7 flex flex-col justify-between h-[400px] sm:col-span-2 lg:col-span-3 group transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl bg-[#1e1e1e]"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <span
                className="text-xs font-semibold tracking-widest uppercase"
                style={{ color: "rgba(255,255,255,0.45)", fontFamily: "'DM Mono', monospace" }}
              >
                05/
              </span>
              <div className="absolute bottom-0 right-4 text-8xl opacity-80 pointer-events-none select-none pb-2">
                🏆
              </div>
              <div className="mt-auto">
                <CountDisplay target={32} suffix="+" />
                <p className="mt-2 text-sm font-medium tracking-wide" style={{ color: "rgba(255,255,255,0.65)", fontFamily: "'DM Sans', sans-serif" }}>
                  industry awards
                </p>
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