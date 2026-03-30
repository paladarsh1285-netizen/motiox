import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MarqueePill from "./MarqueePill";

gsap.registerPlugin(ScrollTrigger);

const avatars = [
  "https://i.pravatar.cc/150?img=1",
  "https://i.pravatar.cc/150?img=2",
  "https://i.pravatar.cc/150?img=5",
];

// Animation variants for left side elements
const slideFromLeft = {
  hidden: { 
    opacity: 0, 
    x: -150,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// Animation variants for right side elements
const slideFromRight = {
  hidden: { 
    opacity: 0, 
    x: 150,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// Staggered children animation
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

// Fade up animation for text
const fadeUp = {
  hidden: { 
    opacity: 0, 
    y: 60,
    filter: "blur(10px)"
  },
  visible: { 
    opacity: 1, 
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
};

// Scale animation for badge (no rotation - handled by continuous rotation)
const scaleRotate = {
  hidden: { 
    opacity: 0, 
    scale: 0
  },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.34, 1.56, 0.64, 1]
    }
  }
};

export default function AwardWinnings() {
  const circleRef = useRef(null);
  const containerRef = useRef(null);
  const headlineRef = useRef(null);
  const trustedRef = useRef(null);
  const badgeRef = useRef(null);
  const textContentRef = useRef(null);

  // Check if elements are in view
  const isHeadlineInView = useInView(headlineRef, { once: true, margin: "-100px" });
  const isTrustedInView = useInView(trustedRef, { once: true, margin: "-100px" });
  const isBadgeInView = useInView(badgeRef, { once: true, amount: 0.5 });
  const isTextContentInView = useInView(textContentRef, { once: true, margin: "-100px" });

  useEffect(() => {
    // Rotating badge animation
    let angle = 0;
    const interval = setInterval(() => {
      angle += 0.4;
      if (circleRef.current) {
        circleRef.current.style.transform = `rotate(${angle}deg)`;
      }
    }, 16);

    // GSAP scroll-triggered animations for the container
    const ctx = gsap.context(() => {
      // Animate the entire container on scroll
      gsap.fromTo(
        containerRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            toggleActions: "play none none none"
          }
        }
      );

      // Parallax effect for the badge
      gsap.to(badgeRef.current, {
        y: -50,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });
    }, containerRef);

    return () => {
      clearInterval(interval);
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen w-full flex flex-col"
      style={{ backgroundColor: "#1a1a1a", fontFamily: "'Syne', sans-serif" }}
    >
      {/* Google Font Import */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&display=swap');

        .badge-ring {
          position: relative;
          width: 220px;
          height: 220px;
          flex-shrink: 0;
        }

        .badge-ring-text {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transform-origin: center center;
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
      `}</style>

      {/* ── TOP BAR: MarqueePill flush left ── */}
      <motion.div 
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full px-4 sm:px-6 lg:px-8 pt-6 sm:pt-8 pb-0 flex flex-col items-start"
      >
        <MarqueePill />
      </motion.div>
      
      {/* Thin divider line below the pill - full width */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        className="w-full max-w-[1500px] mx-auto mt-4"
        style={{ height: "1px", backgroundColor: "#2a2a2a", transformOrigin: "left" }}
      />

      {/* ── MAIN CONTENT ── */}
      <div className="w-full max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 flex-1 flex flex-col justify-center">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 sm:gap-8 mb-8 sm:mb-12 lg:mb-16">
          {/* Headline - Slides from Left */}
          <motion.div 
            ref={headlineRef}
            variants={slideFromLeft}
            initial="hidden"
            animate={isHeadlineInView ? "visible" : "hidden"}
          >
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate={isHeadlineInView ? "visible" : "hidden"}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight m-0"
              style={{ color: "#ffffff", fontWeight: 700 }}
            >
              Award-winning
            </motion.h1>
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate={isHeadlineInView ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
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
            </motion.h1>
          </motion.div>

          {/* Trusted by - Slides from Right */}
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

          <motion.div 
            ref={trustedRef}
            variants={slideFromRight}
            initial="hidden"
            animate={isTrustedInView ? "visible" : "hidden"}
            className="flex flex-col items-start lg:items-end gap-2 sm:gap-3 lg:pt-3 py-8"
          >
            <motion.p 
              variants={fadeUp}
              initial="hidden"
              animate={isTrustedInView ? "visible" : "hidden"}
              className="text-gray-400 text-base sm:text-xl lg:text-2xl text-right leading-snug"
            >
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
            </motion.p>
            <motion.div 
              variants={staggerContainer}
              initial="hidden"
              animate={isTrustedInView ? "visible" : "hidden"}
              className="avatar-group flex items-center"
            >
              {avatars.map((src, i) => (
                <motion.img 
                  key={i} 
                  src={src} 
                  alt={`client-${i}`}
                  variants={{
                    hidden: { opacity: 0, scale: 0, x: 30 },
                    visible: { 
                      opacity: 1, 
                      scale: 1, 
                      x: 0,
                      transition: { duration: 0.5, delay: i * 0.1 }
                    }
                  }}
                />
              ))}
              <motion.div 
                variants={{
                  hidden: { opacity: 0, scale: 0 },
                  visible: { 
                    opacity: 1, 
                    scale: 1,
                    transition: { duration: 0.5, delay: 0.3, type: "spring", stiffness: 200 }
                  }
                }}
                className="plus-bubble"
              >
                +
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-8 sm:gap-10 lg:gap-12">
          {/* Rotating Badge (left) - Slides from Left with Scale & Rotate */}
          <motion.div 
            ref={badgeRef}
            variants={scaleRotate}
            initial="hidden"
            animate={isBadgeInView ? "visible" : "hidden"}
            className="shrink-0 self-start lg:self-auto"
          >
            <div className="badge-ring">
              <div ref={circleRef} className="badge-ring-text">
                <svg viewBox="0 0 110 110" width="220" height="220">
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
                  className="w-28 h-28 rounded-full flex items-center justify-center"
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
          </motion.div>

          {/* Text Content - Slides from Right */}
          <motion.div 
            ref={textContentRef}
            variants={slideFromRight}
            initial="hidden"
            animate={isTextContentInView ? "visible" : "hidden"}
            className="flex-1 max-w-4xl text-left"
          >
            <motion.h2
              variants={fadeUp}
              initial="hidden"
              animate={isTextContentInView ? "visible" : "hidden"}
              className="text-2xl sm:text-3xl lg:text-4xl font-black mb-6 sm:mb-8 text-left"
              style={{
                color: "#ffffff",
                lineHeight: "1.2",
                letterSpacing: "-0.02em",
                fontSize: "clamp(1rem, 3vw, 2.5rem)"
              }}
            >
              We're the crafters of fascinating videos that associate with your viewers personally.
            </motion.h2>
            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate={isTextContentInView ? "visible" : "hidden"}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl lg:text-2xl font-normal leading-relaxed"
              style={{
                color: "#9ca3af",
                lineHeight: "1.12"
              }}
            >
              From startups to well-known brands worldwide, we've completed plenty of corporate video
              production projects for both. We ensure each design not only captivates but also drives
              growth and engagement. From concept to execution, our goal is to create impactful brand
              experiences that leave a lasting impression.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
