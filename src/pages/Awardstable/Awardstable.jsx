import { useState } from "react";


const awards = [
  {
    id: 1,
    source: "DESIGNRUSH.COM",
    title: "Best Video Agencies",
    date: "2024",
    image: "https://images.pexels.com/photos/6565255/pexels-photo-6565255.jpeg",
    description: "Recognized as one of the best video production agencies globally",
  },
  {
    id: 2,
    source: "CLUTCH.CO",
    title: "Most Reviewed – Video Production Companies",
    date: "2023",
    image: "https://images.pexels.com/photos/9189210/pexels-photo-9189210.jpeg",
    description: "Top-rated and most reviewed video production company on Clutch",
  },
  {
    id: 3,
    source: "FWA US AWARD",
    title: "Top Creative Agencies",
    date: "2020",
    image: "https://images.pexels.com/photos/13059832/pexels-photo-13059832.jpeg",
    description: "Awarded for outstanding creative excellence and innovation",
  },
  {
    id: 4,
    source: "CSS AWARDS",
    title: "Top Video Production Company",
    date: "2021",
    image: "https://images.pexels.com/photos/6412253/pexels-photo-6412253.jpeg",
    description: "Honored for exceptional web design and video production",
  },
  {
    id: 5,
    source: "UI/UX GLOBAL AWARD",
    title: "Top 5 Best Of Media Websites",
    date: "2019",
    image: "https://images.pexels.com/photos/34412340/pexels-photo-34412340.jpeg",
    description: "Celebrated for superior UI/UX design across media platforms",
  },
  {
    id: 6,
    source: "DESIGNRUSH.COM",
    title: "Top 10 Best Of Mobile App Design",
    date: "2018",
    image: "https://images.pexels.com/photos/7005687/pexels-photo-7005687.jpeg",
    description: "Recognized for outstanding mobile app design and user experience",
  },
];

export default function AwardsTable() {
  const [hoveredId, setHoveredId] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  const hoveredAward = awards.find((a) => a.id === hoveredId);

  return (
    <div
      className="min-h-screen bg-[#0a0a0a] text-white font-sans relative overflow-hidden"
      onMouseMove={handleMouseMove}
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
       
      {/* Google Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600&family=Bebas+Neue&display=swap');

        .award-row {
          transition: background 0.3s ease;
        }
        .award-row:hover {
          background: rgba(255,255,255,0.04);
        }
        .award-row:hover .award-title {
          letter-spacing: 0.02em;
        }
        .award-title {
          transition: letter-spacing 0.4s ease, color 0.3s ease;
        }
        .award-row:hover .award-title {
          color: #f0f0f0;
        }
        .award-row:hover .award-date {
          color: #ffffff;
        }
        .award-date {
          transition: color 0.3s ease;
        }
        .cursor-image {
          pointer-events: none;
          transition: opacity 0.25s ease, transform 0.15s ease;
        }
        .cursor-image.visible {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
        .cursor-image.hidden {
          opacity: 0;
          transform: translate(-50%, -50%) scale(0.92);
        }
        .source-tag {
          font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.12em;
          font-size: 0.65rem;
          font-weight: 500;
        }
        .header-text {
          font-family: 'DM Sans', sans-serif;
          letter-spacing: 0.18em;
          font-size: 0.6rem;
          font-weight: 500;
          color: #555;
          text-transform: uppercase;
        }
        .divider {
          border-color: #1e1e1e;
        }
        .award-row:hover .row-number {
          color: #fff;
        }
        .row-number {
          transition: color 0.3s ease;
          color: #333;
          font-size: 0.65rem;
          font-family: 'Bebas Neue', sans-serif;
        }
        .title-font {
          font-family: 'Bebas Neue', sans-serif;
          letter-spacing: 0.03em;
        }
      `}</style>

       

      {/* Floating cursor image */}
      <div
        className={`cursor-image fixed z-50 rounded-sm overflow-hidden shadow-2xl max-sm:hidden ${hoveredId ? "visible" : "hidden"}`}
        style={{
          left: mousePos.x + 28,
          top: mousePos.y - 20,
          width: "260px",
          height: "160px",
          border: "1px solid #2a2a2a",
        }}
      >
        {hoveredAward && (
          <>
            <img
              src={hoveredAward.image}
              alt={hoveredAward.title}
              className="w-full h-full object-cover"
            />
            <div
              className="absolute bottom-0 left-0 right-0 px-3 py-2"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.85), transparent)" }}
            >
              <p className="text-white text-xs font-light tracking-widest uppercase opacity-80">
                {hoveredAward.source}
              </p>
            </div>
          </>
        )}
      </div>

      {/* Main container */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 py-12 md:py-20">

        {/* Top label */}
        <div className="flex items-center gap-3 mb-8 md:mb-12">
          <div className="w-1 h-1 rounded-full bg-white opacity-40" />
          <span className="text-xs tracking-[0.3em] uppercase text-gray-500">Recognition</span>
        </div>

        {/* Table header */}
        <div className="grid grid-cols-[180px_1fr_80px] gap-4 pb-4 max-sm:hidden">
          <div />
          <span className="header-text">Award Title</span>
          <span className="header-text text-right">Date</span>
        </div>

        <hr className="divider border-t mb-0" />

        {/* Award rows */}
        {awards.map((award, index) => (
          <div key={award.id}>
            <div
              className="award-row grid max-sm:flex max-sm:flex-col max-sm:gap-3 grid-cols-[180px_1fr_80px] gap-4 items-center px-2 py-5 md:py-7 cursor-default"
              onMouseEnter={() => setHoveredId(award.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Source */}
              <div className="flex items-center gap-3 max-sm:order-1">
                <span className="row-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="source-tag text-gray-500 uppercase">{award.source}</span>
              </div>

              {/* Title */}
              <h2 className="award-title title-font text-2xl md:text-3xl text-white/80 tracking-wide leading-none max-sm:order-3 max-sm:text-xl">
                {award.title}
              </h2>

              {/* Date */}
              <span className="award-date text-right text-gray-600 text-sm font-light tabular-nums max-sm:order-2 max-sm:text-left">
                {award.date}
              </span>
            </div>
            <hr className="divider border-t" />
          </div>
        ))}

        {/* Bottom note */}
        <div className="mt-10 md:mt-16 flex flex-col sm:flex-row justify-between items-end gap-4 sm:gap-0">
          <p className="text-gray-700 text-xs tracking-widest uppercase">
            {awards.length} Awards &amp; Recognitions
          </p>
          <p className="text-gray-700 text-xs tracking-widest uppercase">2018 – 2024</p>
        </div>
      </div>
    </div>
  );
}