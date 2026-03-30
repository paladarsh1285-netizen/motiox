import { useEffect, useRef } from "react";
import MarqueePill from "./MarqueePill";

const avatars = [
  "https://i.pravatar.cc/150?img=1",
  "https://i.pravatar.cc/150?img=2",
  "https://i.pravatar.cc/150?img=5",
];

export default function AwardWinnings() {
  const circleRef = useRef(null);

  useEffect(() => {
    let angle = 0;
    const interval = setInterval(() => {
      angle += 0.4;
      if (circleRef.current) {
        circleRef.current.style.transform = `rotate(${angle}deg)`;
      }
    }, 16);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="min-h-screen w-full flex flex-col"
      style={{ backgroundColor: "#1a1a1a", fontFamily: "'Syne', sans-serif" }}
    >
      {/* Google Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&display=swap');

        .badge-ring {
          position: relative;
          width: 110px;
          height: 110px;
          flex-shrink: 0;
        }

        .badge-ring-text {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .badge-icon {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
        }

        .avatar-group img {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 2px solid #1a1a1a;
          margin-left: -8px;
          object-fit: cover;
        }

        .avatar-group img:first-child {
          margin-left: 0;
        }

        .plus-bubble {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg, #f97316, #ec4899);
          border: 2px solid #1a1a1a;
          margin-left: -8px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 16px;
          font-weight: bold;
          flex-shrink: 0;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-up-1 { animation: fadeUp 0.6s ease forwards; opacity: 0; }
        .fade-up-2 { animation: fadeUp 0.6s 0.15s ease forwards; opacity: 0; }
        .fade-up-3 { animation: fadeUp 0.6s 0.3s ease forwards; opacity: 0; }
        .fade-up-4 { animation: fadeUp 0.6s 0.45s ease forwards; opacity: 0; }
      `}</style>

      {/* ── TOP BAR: MarqueePill flush left ── */}
      <div className="w-full px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-0 flex flex-col items-start">
        <MarqueePill />
      </div>
      {/* Thin divider line below the pill - full width */}
      <div
        className="w-full max-w-[1500px] mx-auto mt-4"
        style={{ height: "1px", backgroundColor: "#2a2a2a" }}
      />

      {/* ── MAIN CONTENT ── */}
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex-1 flex flex-col justify-center">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {/* Headline */}
          <div className="fade-up-1">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight m-0"
              style={{ color: "#ffffff", fontWeight: 700 }}
            >
              Award-winning
            </h1>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight m-0 -mt-5"
              style={{
                background: "linear-gradient(90deg, #f97316 30%, #ec4899 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontWeight: 700,
              }}
            >
              video agency
            </h1>
          </div>

          {/* Trusted by */}
          {/* Updated CSS in your <style> tag */}
          <style>{`
  .avatar-group img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    border: 2px solid #1a1a1a;
    margin-left: -16px;
    object-fit: cover;
  }
  .avatar-group img:first-child {
    margin-left: 0;
  }
  .plus-bubble {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background: linear-gradient(135deg, #f97316, #ec4899);
    border: 2px solid #1a1a1a;
    margin-left: -16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-size: 24px;
    font-weight: bold;
    flex-shrink: 0;
  }
`}</style>

          {/* Updated JSX */}
          <div className="fade-up-2 flex flex-col items-start lg:items-end gap-2 sm:gap-3 lg:pt-3 py-8">
            <p className="text-gray-400 text-base sm:text-xl lg:text-2xl text-right leading-snug">
              Trusted by{" "}
              <span
                style={{
                  background: "linear-gradient(90deg, #f97316, #ec4899)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  fontWeight: "700",
                }}
              >
                over 4,000
              </span>
              <br />
              clients worldwide
            </p>
            <div className="avatar-group flex items-center">
              {avatars.map((src, i) => (
                <img key={i} src={src} alt={`client-${i}`} />
              ))}
              <div className="plus-bubble">+</div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 sm:gap-10 lg:gap-12">
          {/* Rotating Badge (left) */}
          <div className="fade-up-3 shrink-0 self-start lg:self-auto">
            <div className="badge-ring">
              <div ref={circleRef} className="badge-ring-text">
                <svg viewBox="0 0 110 110" width="110" height="110">
                  <defs>
                    <path
                      id="circle-path"
                      d="M 55,55 m -40,0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                    />
                  </defs>
                  <text
                    fill="white"
                    fontSize="9.5"
                    fontFamily="'Syne', sans-serif"
                    fontWeight="600"
                    letterSpacing="3.2"
                  >
                    <textPath href="#circle-path">
                      AGENCY · VIDEO PRODUCTION · VIDEO PRODUCTION ·
                    </textPath>
                  </text>
                </svg>
              </div>
              <div className="badge-icon">
                <div
                  className="w-14 h-14 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #f97316, #ec4899)",
                    boxShadow: "0 0 24px rgba(249,115,22,0.4)",
                  }}
                >
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M15 10l4.553-2.276A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"
                      stroke="white"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div className="fade-up-4 flex-1 max-w-2xl">
            <h2
              className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3 sm:mb-4 leading-snug"
              style={{ color: "#ffffff" }}
            >
              We're the crafters of fascinating videos that associate with your
              viewers personally.
            </h2>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: "#9ca3af" }}
            >
              From startups to well-known brands worldwide, we've completed
              plenty of corporate video production projects for both. We ensure
              each design not only captivates but also drives growth and
              engagement. From concept to execution, our goal is to create
              impactful brand experiences that leave a lasting impression.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}