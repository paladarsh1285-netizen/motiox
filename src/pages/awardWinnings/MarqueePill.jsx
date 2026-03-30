export default function MarqueePill() {
  const text = "WHO WE ARE   •   WHO WE ARE   •   WHO WE ARE   •   WHO WE ARE   •   WHO WE ARE   •   ";

  return (
    <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-8 flex items-start" style={{ backgroundColor: "#1a1a1a" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@600;700&display=swap');

        .gradient-border-pill {
          position: relative;
          border-radius: 999px;
          padding: 2px;
          background: linear-gradient(90deg, #f97316, #ec4899, #f97316);
          background-size: 200% 200%;
          animation: gradientShift 3s linear infinite;
        }

        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .pill-inner {
          background: #1a1a1a;
          border-radius: 999px;
          overflow: hidden;
          padding: 8px 0;
          width: 100%;
          max-width: 260px;
        }

        .marquee-track {
          display: flex;
          white-space: nowrap;
          animation: marqueeRTL 6s linear infinite;
        }

        .marquee-track span {
          font-family: 'Syne', sans-serif;
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.08em;
          color: #ffffff;
          padding-right: 0;
        }

        @keyframes marqueeRTL {
          from { transform: translateX(0%); }
          to { transform: translateX(-50%); }
        }
      `}</style>

      <div className="gradient-border-pill">
        <div className="pill-inner">
          <div className="marquee-track">
            <span>{text}{text}</span>
          </div>
        </div>
      </div>
    </div>
  );
}