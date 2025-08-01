import {
  FaBoxOpen,
  FaTruck,
  FaCheckCircle,
  FaPalette,
  FaCar,
  FaEraser,
  FaTags,
  FaCogs,
  FaBolt,
  FaShieldAlt,
  FaPlug,
  FaPaintRoller,
  FaGripLines,
  FaRoad,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { title } from "motion/react-client";

const generalTapes = [
  {
    title: "BOPP Packaging Tape",
    desc: "Strong & long-lasting",
    icon: <FaBoxOpen className="text-6xl text-black" />,
    details: [
      "Ideal for carton sealing",
      "High tensile strength",
      "Excellent adhesion on all surfaces",
    ],
  },
  {
    title: "Masking Tapes",
    desc: "Clean removal, high precision",
    icon: <FaEraser className="text-6xl text-black" />,
    details: [
      "Perfect for painting jobs",
      "Leaves no residue",
      "Easy to tear by hand",
    ],
  },
  {
    title: "Custom Printed Tapes",
    desc: "Brand your packaging",
    icon: <FaTags className="text-6xl text-black" />,
    details: [
      "Showcase your logo",
      "Enhance brand visibility",
      "Available in multiple colors",
    ],
  },
  {
    title: "Color & Specialty Tapes",
    desc: "Highlight, code, or decorate with style",
    icon: <FaPalette className="text-6xl text-black" />,
    details: [
      "Color code inventory",
      "Decorative and functional",
      "Multiple color options",
    ],
  },
  {
    title:"Wire Harnessing Tapes",
    desc: "Insulate and protect wires",
    icon: <FaCogs className="text-6xl text-black" />,
    details: [
      "High-temperature resistance",
      "Flexible and stretchable",
      "Ideal for automotive and electronics",
    ],
  },
];

const specialtyTapes = [
  {
    title: "PVC Insulation Tape",
    desc: "Pressure-sensitive tape for electrical insulation. Vinyl-based for long-lasting performance.",
    icon: <FaPlug className="text-6xl text-black" />,
    details: [
      "Insulates electrical wires",
      "Flexible and stretchable",
      "Resistant to abrasion and moisture",
    ],
  },
  {
    title: "Masking Tapes",
    desc: "Painter's tape for clean lines and easy removal. Available in various widths.",
    icon: <FaPaintRoller className="text-6xl text-black" />,
    details: [
      "Used in painting and surface protection",
      "Removes cleanly after use",
      "Available in various widths",
    ],
  },
  {
    title: "Cross Filament Tape",
    desc: "Glass fiber-reinforced, extremely strong for heavy packing and strapping.",
    icon: <FaGripLines className="text-6xl text-black" />,
    details: [
      "High tensile strength",
      "Ideal for bundling and palletizing",
      "Replaces metal strapping in many cases",
    ],
  },
  {
    title: "Floor Marking Tape",
    desc: "Adhesive tape for marking hazards, aisles, and directions in industrial spaces.",
    icon: <FaRoad className="text-6xl text-black" />,
    details: [
      "Marks safety zones and aisles",
      "Highly visible colors",
      "Durable and easy to apply",
    ],
  },
  
];


export default function Services() {
  return (
    <section className="w-full bg-gradient-to-br from-[#7895d0] via-white to-[#96b0e0] py-20 px-4 relative overflow-hidden">

      {/* Animated SVG wave at the top */}
      <div className="absolute top-0 left-0 w-full z-0 opacity-20 pointer-events-none select-none">
        <svg width="100%" height="80" viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,40 C360,80 1080,0 1440,40 L1440,80 L0,80 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* Extra floating tape fragments */}
      <motion.div
        className="absolute top-32 left-1/4 w-16 h-3 rounded bg-[#7895d0] opacity-0 z-0 rotate-12"
        animate={{ y: [0, 30, 0], x: [0, 20, 0] }}
        transition={{ duration: 16, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        style={{ filter: 'blur(1.5px)' }}
      />
      <motion.div
        className="absolute bottom-24 right-1/3 w-24 h-4 rounded bg-[#7895d0] opacity-0 z-0 -rotate-6"
        animate={{ y: [0, -25, 0], x: [0, -18, 0] }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        style={{ filter: 'blur(2px)' }}
      />
      <motion.div
        className="absolute top-1/2 left-10 w-10 h-2 rounded bg-[#7895d0] opacity-0 z-10 rotate-3"
        animate={{ y: [0, 15, 0], x: [0, 8, 0] }}
        transition={{ duration: 13, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        style={{ filter: 'blur(1px)' }}
      />

      {/* Tape roll SVG animation (bottom right) */}
      <div className="absolute bottom-8 right-8 z-0 opacity-50 pointer-events-none select-none" style={{filter: 'blur(1px)'}}>
        <svg width="160" height="120" viewBox="0 0 160 120" fill="#" xmlns="http://www.w3.org/2000/svg">
          {/* Tape roll */}
          <circle cx="50" cy="60" r="32" fill="#fff" stroke="#7895d0" strokeWidth="6" />
          <circle cx="50" cy="60" r="16" fill="#fff" stroke="#7895d0" strokeWidth="3" />
          {/* Tape strip (animated) */}
          <g>
            <motion.rect
              x="82" y="56" width="60" height="8" rx="4"
              fill="#fff"
              initial={{ x: 82 }}
              animate={{ x: [82, 100, 82] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
            />
          </g>
        </svg>
      </div>
      {/* Floating circles/icons */}
      <motion.div
        className="absolute top-20 left-10 w-10 h-10 rounded-full bg-[#7895d0] opacity-100 z-0"
        animate={{ y: [0, 30, 0], x: [0, 10, 0] }}
        transition={{ duration: 10, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        style={{ filter: 'blur(2px)' }}
      />
      <motion.div
        className="absolute top-1/3 right-16 w-8 h-8 rounded-full bg-[#7895d0] opacity-100 z-0"
        animate={{ y: [0, -20, 0], x: [0, -10, 0] }}
        transition={{ duration: 14, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        style={{ filter: 'blur(2px)' }}
      />
      <motion.div
        className="absolute bottom-40 left-1/2 w-12 h-12 rounded-full bg-[#7895d0] opacity-100 z-0"
        animate={{ y: [0, 18, 0], x: [0, 12, 0] }}
        transition={{ duration: 18, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
        style={{ filter: 'blur(2px)', transform: 'translateX(-50%)' }}
      />
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-bold text-center text-white mb-6 tracking-tight">
            Our Tape Solutions
          </h2>
          <p className="text-lg text-center text-black mb-10 max-w-2xl mx-auto leading-relaxed">
            Discover our full range of general and specialty tapes, engineered
            for performance across industries. From packaging to insulation, we
            have the perfect tape for your needs.
          </p>
          <div className="mb-12 relative">
            <h3 className="text-2xl font-bold text-gray-500 mb-6 tracking-tight">
              General Tapes
            </h3>
            {/* Horizontal line behind cards */}
            <div className="flex justify-center flex-wrap gap-8 relative z-10">
              {generalTapes.map((t, i) => (
                <div className="relative flex flex-col items-center">
                  {/* Vertical connector from card to horizontal line */}
                  <motion.div
                    key={i}
                    className="flex flex-col items-center bg-[#7895d0] rounded-xl p-6 shadow-md border border-[#f3e7d2] hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 cursor-pointer text-center overflow-hidden relative z-10 min-h-[410px] h-full w-[300px] sm:w-[320px] md:w-[340px]"
                    initial={{ opacity: 0,}}
                    whileInView={{ opacity: 1,}}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: i * 0.08 }}
                    whileHover={{ scale: 1.04 }}
                  >
                    <div className="relative w-full h-32 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-[#f3e7d2] to-[#e5d3b3]">
                      <img
                        src={t.image}
                        alt={t.title}
                        className="w-full h-full object-cover object-center"
                      />
                      <div className="absolute inset-0 bg-white bg-opacity-20 flex items-center justify-center">
                        {t.icon}
                      </div>
                    </div>
                    <div className="font-bold text-lg text-white mt-3 mb-1 tracking-tight">
                      {t.title}
                    </div>
                    <div className="text-gray-700 text-md mb-2 leading-relaxed">
                      {t.desc}
                    </div>
                    <ul className="text-md text-left text-black mb-2 list-disc list-inside">
                      {t.details &&
                        t.details.map((d, idx) => <li key={idx}>{d}</li>)}
                    </ul>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-500 mb-6 tracking-tight">
              Specialty Tapes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {specialtyTapes.map((t, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col items-center bg-[#7895d0] rounded-xl p-6 shadow-md border border-[#7895d0] hover:shadow-xl hover:-translate-y-2 transition-transform duration-300 cursor-pointer text-center overflow-hidden min-h-[340px] h-full w-full"
                  initial={{ opacity: 0,  }}
                  whileInView={{ opacity: 1, }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                  whileHover={{ scale: 1.04 }}
                >
                  <div className="relative w-full h-24 mb-4 rounded-lg overflow-hidden bg-gradient-to-br from-white to-[#f3e7d2]">
                    <img
                      src={t.image}
                      alt={t.title}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-white bg-opacity-20 flex items-center justify-center">
                      {t.icon}
                    </div>
                  </div>
                  <div className="font-bold text-lg text-white mt-3 mb-1 tracking-tight">
                    {t.title}
                  </div>
                  <div className="text-gray-700 text-sm mb-2 leading-relaxed">
                    {t.desc}
                  </div>
                  <ul className="text-xs text-left text-black mb-2 list-disc list-inside">
                    {t.details &&
                      t.details.map((d, idx) => <li key={idx}>{d}</li>)}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="flex flex-col items-center mt-8">
            <motion.a
              href="#contact"
              className="inline-block bg-[#7895d0] hover:bg-[#6985bc] text-white font-bold px-10 py-4 rounded-full shadow-lg text-lg transition-all duration-200 text-center mb-8 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#7895d0]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              Request Sample
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}
