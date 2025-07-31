import React from "react";
import {
  FaBoxOpen,
  FaCar,
  FaEraser,
  FaTags,
  FaTruck,
  FaPalette,
  FaCogs,
  FaBolt,
  FaShieldAlt,
  FaPlug,
  FaPaintRoller,
  FaGripLines,
  FaRoad,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Grid, A11y } from "swiper/modules";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { motion, useAnimation, useInView } from "framer-motion";
import { useRef, useEffect } from "react";
import { useMotionValue, animate } from "framer-motion";

const services = [
  {
    icon: <FaBoxOpen className="text-6xl text-black mb-4 mt-4" />,
    title: "BOPP Packaging Tape",
    desc: "Strong, long-lasting, and perfect for carton sealing.",
    features: [
      "Ideal for carton sealing",
      "High tensile strength",
      "Excellent adhesion on all surfaces",
    ],
  },
  {
    icon: <FaEraser className="text-6xl text-black mb-4 mt-4" />,
    title: "Masking Tapes",
    desc: "Clean removal, high precision, and no residue.",
    features: [
      "Perfect for painting jobs",
      "Leaves no residue",
      "Easy to tear by hand",
    ],
  },
  {
    icon: <FaTags className="text-6xl text-black mb-4 mt-4" />,
    title: "Custom Printed Tapes",
    desc: "Brand your packaging and enhance visibility.",
    features: [
      "Showcase your logo",
      "Enhance brand visibility",
      "Available in multiple colors",
    ],
  },
  {
    icon: <FaPalette className="text-6xl text-black mb-4 mt-4" />,
    title: "Color & Specialty Tapes",
    desc: "Highlight, code, or decorate with style.",
    features: [
      "Color code inventory",
      "Decorative and functional",
      "Multiple color options",
    ],
  },
  {
    icon: <FaCogs className="text-6xl text-black mb-4 mt-4" />,
    title: "Wire Harnessing Tapes",
    desc: "Insulate and protect wires in automotive and electronics.",
    features: [
      "High-temperature resistance",
      "Flexible and stretchable",
      "Ideal for automotive and electronics",
    ],
  },
  {
    icon: <FaPlug className="text-6xl text-black mb-4 mt-4" />,
    title: "PVC Insulation Tape",
    desc: "Pressure-sensitive, flexible, and abrasion-resistant.",
    features: [
      "Insulates electrical wires",
      "Flexible and stretchable",
      "Resistant to abrasion and moisture",
    ],
  },
  {
    icon: <FaPaintRoller className="text-6xl text-black mb-4 mt-4" />,
    title: "Painter’s Masking Tape",
    desc: "Clean lines and easy removal for painting.",
    features: [
      "Used in painting and surface protection",
      "Removes cleanly after use",
      "Available in various widths",
    ],
  },
  {
    icon: <FaGripLines className="text-6xl text-black mb-4 mt-4" />,
    title: "Cross Filament Tape",
    desc: "Glass fiber-reinforced for heavy packing.",
    features: [
      "High tensile strength",
      "Ideal for bundling and palletizing",
      "Replaces metal strapping in many cases",
    ],
  },
  {
    icon: <FaRoad className="text-6xl text-black mb-4 mt-4" />,
    title: "Floor Marking Tape",
    desc: "Mark hazards, aisles, and directions in industrial spaces.",
    features: [
      "Marks safety zones and aisles",
      "Highly visible colors",
      "Durable and easy to apply",
    ],
  },
  {
    icon: <FaPaintRoller className="text-6xl text-black mb-4 mt-4" />,
    title: "Painter’s Masking Tape",
    desc: "Clean lines and easy removal for painting.",
    features: [
      "Used in painting and surface protection",
      "Removes cleanly after use",
      "Available in various widths",
    ],
  },
];

const stats = [
  { value: 17, label: "Years of Experience" },
  { value: 50, label: "Clients Served" },
  { value: 20, label: "Tape Variants" },
  { value: 15, label: "Industries Covered" },
];

const tapeRollSVG = (
  <div
    className="absolute bottom-8 right-8 z-0 opacity-20 pointer-events-none select-none"
    style={{ filter: "blur(1px)" }}
  >
    <svg
      width="160"
      height="120"
      viewBox="0 0 160 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="50"
        cy="60"
        r="32"
        fill="#f3e7d2"
        stroke="#b07a3c"
        strokeWidth="6"
      />
      <circle
        cx="50"
        cy="60"
        r="16"
        fill="#fff"
        stroke="#b07a3c"
        strokeWidth="3"
      />
      <motion.rect
        x="82"
        y="56"
        width="60"
        height="8"
        rx="4"
        fill="#b07a3c"
        initial={{ x: 82 }}
        animate={{ x: [82, 100, 82] }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "loop",
          ease: "easeInOut",
        }}
      />
    </svg>
  </div>
);

const CustomCTA = () => (
  <motion.section
    className="w-full bg-[#1a2341] py-16 px-4 flex flex-col items-center justify-center text-center rounded-3xl shadow-lg my-16"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7 }}
  >
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
      Ready to Upgrade Your Packaging?
    </h2>
    <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
      Get in touch for a free consultation or to request a custom tape sample.
      Our experts are here to help you find the perfect solution for your
      business.
    </p>
    <motion.a
      href="/contact"
      className="inline-block bg-[#b07a3c] hover:bg-[#a86b2d] text-white font-bold px-10 py-4 rounded-full shadow-lg text-lg transition-all duration-200 text-center focus:outline-none focus:ring-2 focus:ring-[#b07a3c] hover:scale-105 relative overflow-hidden"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
      onClick={(e) => {
        const btn = e.currentTarget;
        const ripple = document.createElement("span");
        ripple.className = "ripple";
        ripple.style.left = e.nativeEvent.offsetX + "px";
        ripple.style.top = e.nativeEvent.offsetY + "px";
        btn.appendChild(ripple);
        setTimeout(() => ripple.remove(), 600);
      }}
      style={{ position: "relative" }}
    >
      Request a Free Sample
      <style>{`
        .ripple {
          position: absolute;
          border-radius: 50%;
          transform: scale(0);
          animation: ripple 0.6s linear;
          background-color: rgba(255,255,255,0.5);
          pointer-events: none;
          width: 120px;
          height: 120px;
          z-index: 10;
        }
        @keyframes ripple {
          to {
            transform: scale(2.5);
            opacity: 0;
          }
        }
      `}</style>
    </motion.a>
  </motion.section>
);

function AnimatedStat({ value, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      controls.start({ count: value });
    }
  }, [inView, value, controls]);
  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center justify-center p-6 bg-white rounded-2xl shadow border border-[#f3e7d2]"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <motion.span
        className="text-4xl md:text-5xl font-bold text-[#b07a3c] mb-2"
        animate={controls}
        initial={{ count: 0 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {inView ? <AnimatedNumber value={value} /> : 0}
      </motion.span>
      <span className="text-lg text-[#1a2341] font-semibold">{label}</span>
    </motion.div>
  );
}

function AnimatedNumber({ value }) {
  const count = useMotionValue(0);
  const [display, setDisplay] = React.useState(0);
  React.useEffect(() => {
    const controls = animate(count, value, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => {
        setDisplay(Math.round(latest));
      },
    });
    return controls.stop;
  }, [value, count]);
  return <span>{display}+</span>;
}

const ServicesPage = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="relative w-full py-20 px-4 pt-40 flex flex-col items-center justify-center bg-[#b07a3ca5] overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-3xl mx-auto text-center z-10 relative">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
            Premium Tape Solutions
          </h1>
          <p className="text-lg md:text-xl text-[#4b4b4b] mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover our full range of{" "}
            <span className="font-semibold text-[#b07a3c]">general</span> and{" "}
            <span className="font-semibold text-[#b07a3c]">
              specialty tapes
            </span>
            , engineered for <span className="font-semibold">reliability</span>,{" "}
            <span className="font-semibold">performance</span>, and your unique
            business needs. From{" "}
            <span className="font-semibold text-[#b07a3c]">packaging</span> to{" "}
            <span className="font-semibold text-[#b07a3c]">insulation</span>, we
            have the perfect tape for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <span className="inline-flex items-center px-4 py-2 bg-[#f3e7d2] text-[#b07a3c] font-semibold rounded-full shadow-sm text-base">
              🏆 Industry Leading Quality
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-[#f3e7d2] text-[#b07a3c] font-semibold rounded-full shadow-sm text-base">
              🚚 Fast Delivery
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-[#f3e7d2] text-[#b07a3c] font-semibold rounded-full shadow-sm text-base">
              🛡️ Custom Solutions
            </span>
          </div>
          <a
            href="#services"
            className="inline-block mt-2 px-8 py-3 bg-[#b07a3c] text-white font-bold rounded-full shadow-lg hover:bg-[#a06a2c] transition-colors duration-200"
          >
            Explore Our Tapes
          </a>
        </div>
        {/* Decorative SVG blob */}
        <svg
          className="absolute left-0 top-0 w-60 h-60 opacity-20 blur-2xl -z-10"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#b07a3c"
            d="M44.8,-67.2C57.2,-59.2,65.2,-44.8,70.2,-29.7C75.2,-14.7,77.2,1,72.2,14.7C67.2,28.3,55.2,39.8,42.2,48.2C29.2,56.7,14.6,62.1,-0.7,62.9C-16,63.7,-32,59.9,-44.2,51.1C-56.4,42.3,-64.8,28.5,-68.2,13.6C-71.6,-1.3,-70,-17.2,-62.7,-29.7C-55.4,-42.2,-42.4,-51.3,-28.2,-58.2C-14,-65.1,1.4,-69.8,16.7,-70.2C32,-70.6,44.8,-67.2,44.8,-67.2Z"
            transform="translate(100 100)"
          />
        </svg>
        {tapeRollSVG}
      </motion.section>
      {/* Stats Section */}
      <motion.section
        className="max-w-5xl mx-auto py-12 px-4 grid grid-cols-2 md:grid-cols-4 gap-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        {stats.map((stat, i) => (
          <AnimatedStat key={i} value={stat.value} label={stat.label} />
        ))}
      </motion.section>
      {/* Services Swiper */}
      <motion.section
        className="max-w-7xl mx-auto py-16 px-4"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <Swiper
          modules={[Navigation, Pagination, Grid, A11y]}
          spaceBetween={32}
          slidesPerView={1}
          grid={{
            rows: 1,
            fill: "row",
          }}
          loop
          breakpoints={{
            640: { slidesPerView: 1, grid: { rows: 1 } },
            768: { slidesPerView: 2, grid: { rows: 2 } },
            1024: { slidesPerView: 3, grid: { rows: 2 } },
            1280: { slidesPerView: 3, grid: { rows: 2 } },
          }}
          navigation
          pagination={{ clickable: true }}
          className="!pb-12 relative"
        >
          {services.map((s, i) => (
            <SwiperSlide key={i}>
              <div className="flex flex-col items-center bg-white rounded-2xl p-10 shadow-md border border-[#f3e7d2] hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 cursor-pointer text-center h-[420px] group">
                <div className="w-full bg-[#b07a3c] flex items-center justify-center">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {s.icon}
                  </div>
                </div>
                <div className="font-bold text-xl text-[#1a2341] mb-2 tracking-tight">
                  {s.title}
                </div>
                <div className="text-[#4b4b4b] text-base mb-4 leading-relaxed">
                  {s.desc}
                </div>
                <motion.ul
                  className="text-left mx-auto text-[#1a2341] text-sm list-disc list-inside max-w-xs"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  variants={{
                    hidden: {},
                    visible: {
                      transition: {
                        staggerChildren: 0.15,
                      },
                    },
                  }}
                >
                  {s.features &&
                    s.features.map((f, idx) => (
                      <motion.li
                        key={idx}
                        variants={{
                          hidden: { opacity: 0, x: 20 },
                          visible: {
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.5 },
                          },
                        }}
                      >
                        {f}
                      </motion.li>
                    ))}
                </motion.ul>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.section>
      {/* Custom CTA Section */}
      <CustomCTA />
    </div>
  );
};

export default ServicesPage;
