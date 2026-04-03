import { useEffect, useRef } from "react";

const marqueeItems = [
  "AWARD WINNING PROJECTS",
  "BEST QUALITY PRODUCTS",
  "READY FOR YOUR SERVICES",
  "EXPERT TEAM MEMBER",
  "BEST QUALITY PROJECTS",
  "READY FOR YOUR SERVICES",
];

const Separator = () => (
  <span className="mx-6 inline-flex items-center justify-center">
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 0L10.5 6.5L17 5L12.5 9.5L17 14L10.5 11.5L9 18L7.5 11.5L1 14L5.5 9.5L1 5L7.5 6.5L9 0Z"
        fill="white"
        opacity="0.85"
      />
    </svg>
  </span>
);

const MarqueeTrack = ({ direction = "left", speed = 28, top, rotate }) => {
  const items = [...marqueeItems, ...marqueeItems, ...marqueeItems];

  return (
    <div
      style={{
        position: "absolute",
        top,
        left: "-10%",
        right: "-10%",
        transform: `rotate(${rotate}deg)`,
        overflow: "hidden",
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          background: "linear-gradient(90deg, #111 0%, #1a1a1a 50%, #111 100%)",
          boxShadow: "0 4px 40px 0 rgba(0,0,0,0.7), 0 2px 0 rgba(255,255,255,0.04)",
          padding: "8px 0",
          width: "max-content",
          animation: `marquee-${direction} ${speed}s linear infinite`,
        }}
      >
        {items.map((text, i) => (
          <span
            key={i}
            style={{
              display: "inline-flex",
              alignItems: "center",
              whiteSpace: "nowrap",
            }}
          >
            <span
              style={{
                fontFamily: "'Bebas Neue', 'Impact', 'Arial Black', sans-serif",
                fontWeight: 700,
                fontSize: "clamp(13px, 2vw, 22px)",
                letterSpacing: "0.12em",
                color: "white",
                textTransform: "uppercase",
                opacity: 0.92,
                padding: "0 4px",
              }}
            >
              {text}
            </span>
            <Separator />
          </span>
        ))}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');

        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }
        @keyframes marquee-right {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default function MarqueeBanner() {
  return (
    <div
      style={{
        minHeight: "30vh",
        backgroundColor: "#1a1a1a",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        fontFamily: "sans-serif",
      }}
    >
      {/* Subtle grid overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Top diagonal marquee */}
      <MarqueeTrack direction="left" speed={30} top="25%" rotate={-6} />

      {/* Bottom diagonal marquee (opposite direction) */}
      <MarqueeTrack direction="right" speed={26} top="55%" rotate={-6} />

      {/* Center hero text */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          textAlign: "center",
          padding: "0 24px",
        }}
      >
        <h1
          style={{
            fontFamily: "'Bebas Neue', 'Impact', sans-serif",
            fontSize: "clamp(30px, 10vw, 100px)",
            letterSpacing: "0.08em",
            color: "white",
            margin: 0,
            lineHeight: 1,
            textShadow: "0 4px 60px rgba(255,255,255,0.1)",
          }}
        >
          WE CREATE
        </h1>
        <p
          style={{
            color: "rgba(255,255,255,0.4)",
            fontSize: "clamp(12px, 1.5vw, 16px)",
            letterSpacing: "0.3em",
            marginTop: "12px",
            textTransform: "uppercase",
          }}
        >
          Excellence in every project
        </p>
      </div>
    </div>
  );
}