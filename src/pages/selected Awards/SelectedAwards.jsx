import { useState } from "react";
import MarqueePill from "../awardWinnings/MarqueePill";

const works = [
  {
    id: 1,
    title: "Case Study",
    tag: "MOTION GRAPHICS",
    size: "large",
    image:
      "https://images.unsplash.com/photo-1518710843675-2540dd79065c?w=800&q=80",
  },
  {
    id: 2,
    title: "UX Designer",
    tag: "COMMERCIAL",
    size: "small",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80",
  },
  {
    id: 3,
    title: "Business Meeting",
    tag: "MOTION GRAPHICS",
    size: "small",
    image:
      "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600&q=80",
  },
  {
    id: 4,
    title: "Product Design",
    tag: "ANIMATION",
    size: "large",
    image:
      "https://images.unsplash.com/photo-1504196606672-aef5c9cefc92?w=800&q=80",
  },
];

const tagColors = {
  "MOTION GRAPHICS": "border-white/40 text-white",
  COMMERCIAL: "border-white/40 text-white",
  ANIMATION: "border-white/40 text-white",
};

function WorkCard({ work }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative overflow-hidden rounded-sm cursor-pointer group h-full"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <img
        src={work.image}
        alt={work.title}
        className={`w-full h-full object-cover transition-transform duration-700 ease-out ${hovered ? "scale-105" : "scale-100"
          }`}
        style={{ display: "block" }}
      />

      {/* Dark overlay */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-300 ${hovered ? "opacity-40" : "opacity-20"
          }`}
      />

      {/* Bottom info bar */}
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-4 py-3">
        <span
          className="text-white font-semibold text-[25px] tracking-wide"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          {work.title}
        </span>
        <span
          className={`border rounded-full text-[20px] tracking-widest px-3 py-1 ${tagColors[work.tag] || "text-white"
            }`}
          style={{
            fontFamily: "'DM Mono', monospace",
            borderColor: "#e8356d",
            borderWidth: "2px"
          }}
        >
          {work.tag}
        </span>
      </div>
    </div>
  );
}

export default function SelectedWorks() {
  return (
    <section
      className="w-full overflow-hidden"
      style={{ backgroundColor: "#1a1a1a", fontFamily: "'DM Sans', sans-serif" }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=DM+Mono:wght@400;500&display=swap');
      `}</style>
      <div
        className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12"
      >
        <MarqueePill />
        {/* Divider */}
        <div className="border-t border-white/10 mb-6" />
        {/* Header */}
        <div className="flex items-start justify-between mb-8">
          <h1 className="text-3xl tracking-tight leading-tight" style={{ fontWeight: 800 }}>
            Selected{" "}
            <span style={{ color: "#e8356d", fontStyle: "italic" }}>works</span>
          </h1>

          <div className="text-right max-w-[200px]" >
            <h4 className="text-[20px] uppercase tracking-widest text-gray-500 mb-1">
              Our collaborations
            </h4>
            <h3 className="text-[20px] text-gray-300 leading-relaxed">
              Latest works with our{" "}
              <span style={{ color: "#e8356d" }}>friends</span> &{" "}
              <span style={{ color: "#e8356d" }}>partners</span>
            </h3>
          </div>
        </div>



        {/* Grid Row 1 — large left, small right */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-3">
          {/* Large card */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-3 aspect-[4/3] lg:aspect-auto lg:h-[500px]">
            <WorkCard work={works[0]} />
          </div>
          {/* Small card */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-2 aspect-[4/3] lg:aspect-auto lg:h-[500px]">
            <WorkCard work={works[1]} />
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mb-3" />

        {/* Grid Row 2 — small left, large right */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {/* Small card */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-2 aspect-[4/3] lg:aspect-auto lg:h-[500px]">
            <WorkCard work={works[2]} />
          </div>
          {/* Large card */}
          <div className="col-span-1 sm:col-span-1 lg:col-span-3 aspect-[4/3] lg:aspect-auto lg:h-[500px]">
            <WorkCard work={works[3]} />
          </div>
        </div>
      </div>
    </section>
  );
}
