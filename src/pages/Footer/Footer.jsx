import { useState } from "react";

const socialLinks = [
  { label: "FACEBOOK", href: "#" },
  { label: "INSTAGRAM", href: "#" },
  { label: "DRIBBBLE", href: "#" },
  { label: "TWITTER", href: "#" },
  { label: "YOUTUBE", href: "#" },
];

const productLinks = [
  "Commercial Videos",
  "Training Videos",
  "Animation",
  "Corporate Videos",
  "Motion Graphic",
];

const serviceLinks = [
  "Film Production",
  "Creative Direction",
  "Digital Content",
  "Digital Content",
  "Visual Effects",
  "VFX Making",
];

const aboutLinks = [
  "Our Team",
  "Price & Plans",
  "Contact Us",
  "Refund Policy",
  "Terms & Condition",
  "Careers",
];

export default function Footer() {
  const [hoveredSocial, setHoveredSocial] = useState(null);

  return (
    <footer
      className="bg-[#0e0e0e] text-white w-full font-sans"
      style={{ fontFamily: "'DM Sans', 'Syne', sans-serif" }}
    >
      {/* Top Section */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pt-16 pb-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-12 lg:gap-0">
        {/* Left: Headline + Dot */}
        <div className="flex-1 max-w-xl relative">
          <h2
            className="font-black leading-[1.1] tracking-tight"
            style={{
              fontSize: "clamp(2rem, 6vw, 5rem)",
              background: "linear-gradient(110deg, #f97316 30%, #ef4444 65%, #ec4899 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Let's bring your
            <br />
            idea to life!
          </h2>
        </div>

        {/* Right: Office & Contact */}
        <div className="flex flex-col gap-8 lg:items-end">
          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-gray-400 mb-2 font-semibold">
              Office Location
            </p>
            <p className="text-2xl sm:text-3xl font-bold leading-snug text-white">
              2972 Westheimer Rd.
              <br />
              Santa Ana, Illinois
            </p>
          </div>

          <div>
            <p className="text-[11px] tracking-[0.2em] uppercase text-gray-400 mb-2 font-semibold">
              Contact
            </p>
            <p className="text-2xl sm:text-3xl font-bold text-white">
              + (406) 555-0120
            </p>
            <a
              href="mailto:support@example.com"
              className="text-xl sm:text-2xl font-semibold underline underline-offset-4 text-white hover:text-orange-400 transition-colors duration-200"
            >
              support@example.com
            </a>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16">
        <hr className="border-t border-gray-700/60 mt-8" />
      </div>

      {/* Bottom Section: Nav Links + Social */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 py-14">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Product */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-gray-400 font-semibold mb-5">
              Product
            </h4>
            <ul className="space-y-3">
              {productLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[15px] sm:text-base text-gray-200 hover:text-orange-400 transition-colors duration-200 font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-gray-400 font-semibold mb-5">
              Our Services
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((item, i) => (
                <li key={`${item}-${i}`}>
                  <a
                    href="#"
                    className="text-[15px] sm:text-base text-gray-200 hover:text-orange-400 transition-colors duration-200 font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-gray-400 font-semibold mb-5">
              About Us
            </h4>
            <ul className="space-y-3">
              {aboutLinks.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="text-[15px] sm:text-base text-gray-200 hover:text-orange-400 transition-colors duration-200 font-medium"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-[11px] tracking-[0.2em] uppercase text-gray-400 font-semibold mb-5">
              Follow Us
            </h4>
            <div className="flex flex-wrap gap-2.5">
              {socialLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  onMouseEnter={() => setHoveredSocial(label)}
                  onMouseLeave={() => setHoveredSocial(null)}
                  className={`
                    px-3.5 py-2 rounded-full border text-[11px] font-bold tracking-wider
                    transition-all duration-200 cursor-pointer
                    ${hoveredSocial === label
                      ? "bg-orange-500 border-orange-500 text-white scale-105"
                      : "bg-transparent border-gray-500 text-white hover:border-orange-400 hover:text-orange-400"
                    }
                  `}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Very bottom bar */}
      <div className="max-w-[1400px] mx-auto px-6 sm:px-10 lg:px-16 pb-8">
        <p className="text-gray-600 text-xs text-center sm:text-left">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}