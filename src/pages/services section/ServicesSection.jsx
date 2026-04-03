import { useState, useRef, useEffect } from "react";

const services = [
  {
    id: 1,
    title: "Video Production",
    paragraph:
      "An international digital design studio reimagining how people connect with brands.",
    pill: "OUR SERVICES",
    video:
      "https://www.pexels.com/download/video/28769587/",
    accent: "#ff3333",
  },
  {
    id: 2,
    title: "Creative Directions",
    paragraph:
      "Bold vision meets meticulous craft — we shape the narrative behind every frame.",
    pill: "OUR SERVICES",
    video:
      "https://www.pexels.com/download/video/3052084/",
    accent: "#ff3333",
  },
  {
    id: 3,
    title: "Promos & Commercial",
    paragraph:
      "High-impact commercial work that converts attention into lasting brand memory.",
    pill: "OUR SERVICES",
    video:
      "https://videos.pexels.com/video-files/856973/856973-hd_1920_1080_25fps.mp4",
    accent: "#ff3333",
  },
  {
    id: 4,
    title: "Content Creation",
    paragraph:
      "Scroll-stopping content built for modern platforms, audiences, and algorithms.",
    pill: "OUR SERVICES",
    video:
      "https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4",
    accent: "#ff3333",
  },
];

function MarqueePill({ label }) {
  const text = `✦ ${label} ✦ ${label} ✦ ${label} ✦ ${label} ✦ `;
  return (
    <div className="inline-flex overflow-hidden rounded-full p-[2px] max-w-[180px]" style={{ background: 'linear-gradient(90deg, #f97316, #ec4899, #f97316)', backgroundSize: '200% 200%', animation: 'gradientShift 3s linear infinite' }}>
      <div className="flex whitespace-nowrap animate-marquee text-[10px] tracking-widest uppercase font-mono rounded-full px-1 py-1" style={{ backgroundColor: '#1a1a1a', color: '#ffffff' }}>
        <span>{text}</span>
        <span aria-hidden>{text}</span>
      </div>
    </div>
  );
}

function ArrowButton() {
  return (
    <button
      className="group w-10 h-10 rounded-full border border-white/30 bg-white flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-red-500 hover:border-red-500 flex-shrink-0"
      aria-label="Explore service"
    >
      <svg
        className="w-4 h-4 text-black group-hover:text-white transition-colors duration-300 -rotate-45"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        viewBox="0 0 24 24"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
  );
}

function ServiceCard({ service, isHovered, onMouseEnter, onMouseLeave, anyHovered }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;
    if (isHovered) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [isHovered]);

  return (
    <div
      className={`
        relative overflow-hidden cursor-pointer
        transition-all duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]
        flex-1 min-w-0
        ${isHovered ? "flex-[3]" : anyHovered ? "flex-[0.6]" : "flex-1"}
        group
      `}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      style={{ minHeight: "100%" }}
    >
      {/* Video Background */}
      <video
        ref={videoRef}
        src={service.video}
        className={`
          absolute inset-0 w-full h-full object-cover
          transition-opacity duration-700
          ${isHovered ? "opacity-60" : "opacity-20"}
        `}
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* Dark overlay gradient */}
      <div
        className={`
          absolute inset-0 transition-opacity duration-700
          ${isHovered
            ? "bg-gradient-to-t from-black/80 via-black/20 to-black/40"
            : "bg-black/70"
          }
        `}
      />

      {/* Vertical divider line */}
      <div className="absolute top-0 right-0 w-px h-full bg-white/10 z-10" />

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-between h-full p-6 md:p-8">
        {/* Top: Pill */}
        <div
          className={`
            transition-all duration-500
            ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}
          `}
        >
          <MarqueePill label={service.pill} />
        </div>

        {/* Bottom: Content block */}
        <div className="flex flex-col gap-4">
          {/* Title */}
          <h2
            className={`
              font-bold leading-tight transition-all duration-500
              ${isHovered
                ? "text-3xl md:text-4xl lg:text-5xl text-white"
                : "text-xl md:text-2xl text-white/40"}
            `}
            style={{ fontFamily: "'Goli', sans-serif", letterSpacing: "-0.02em" }}
          >
            {service.title}
          </h2>

          {/* Paragraph + Arrow — only visible on hover */}
          <div
            className={`
              flex flex-col gap-4 transition-all duration-500
              ${isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"}
            `}
          >
            <p
              className="text-white/70 text-sm leading-relaxed max-w-xs"
              style={{ fontFamily: "'Goli', sans-serif" }}
            >
              {service.paragraph}
            </p>
            <ArrowButton />
          </div>
        </div>
      </div>

      {/* Red accent glow on hover */}
      <div
        className={`
          absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-700
          ${isHovered ? "opacity-100 bg-red-500" : "opacity-0 bg-transparent"}
        `}
      />
    </div>
  );
}

export default function ServicesSection() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 8s linear infinite;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>

      {/* DESKTOP: horizontal 4-column flex */}
      <section
        className="hidden md:flex w-full bg-black"
        style={{ height: "100svh", minHeight: "560px" }}
      >
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            service={service}
            isHovered={hoveredId === service.id}
            anyHovered={hoveredId !== null}
            onMouseEnter={() => setHoveredId(service.id)}
            onMouseLeave={() => setHoveredId(null)}
          />
        ))}
      </section>

      {/* MOBILE: 2x2 grid */}
      <section
        className="grid grid-cols-2 md:hidden w-full bg-black overflow-hidden"
        style={{ minHeight: "100svh" }}
      >
        {services.map((service) => (
          <MobileServiceCard key={service.id} service={service} />
        ))}
      </section>
    </>
  );
}

function MobileServiceCard({ service }) {
  const [active, setActive] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!videoRef.current) return;
    if (active) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {});
    } else {
      videoRef.current.pause();
    }
  }, [active]);

  return (
    <div
      className="relative overflow-hidden cursor-pointer border border-white/10 flex flex-col justify-between"
      style={{ minHeight: "240px" }}
      onClick={() => setActive((v) => !v)}
    >
      {/* Video */}
      <video
        ref={videoRef}
        src={service.video}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${active ? "opacity-60" : "opacity-20"}`}
        muted
        loop
        playsInline
        preload="metadata"
      />

      {/* Overlay */}
      <div className={`absolute inset-0 transition-opacity duration-700 ${active ? "bg-gradient-to-t from-black/80 via-black/10 to-black/30" : "bg-black/70"}`} />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full p-4">
        {/* Pill */}
        <div className={`transition-all duration-500 ${active ? "opacity-100" : "opacity-0"}`}>
          <MarqueePill label={service.pill} />
        </div>

        {/* Bottom */}
        <div className="flex flex-col gap-2">
          <h2
            className={`font-bold leading-tight transition-all duration-500 ${active ? "text-2xl text-white" : "text-lg text-white/40"}`}
            style={{ fontFamily: "'Goli', sans-serif" }}
          >
            {service.title}
          </h2>

          <div className={`transition-all duration-500 flex flex-col gap-2 ${active ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
            <p className="text-white/70 text-xs leading-relaxed" style={{ fontFamily: "'Goli', sans-serif" }}>
              {service.paragraph}
            </p>
            <ArrowButton />
          </div>
        </div>
      </div>

      {/* Bottom red accent */}
      <div className={`absolute bottom-0 left-0 right-0 h-0.5 transition-all duration-700 ${active ? "opacity-100 bg-red-500" : "opacity-0"}`} />
    </div>
  );
}