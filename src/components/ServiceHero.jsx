import { motion } from "framer-motion";

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
        fill="#acb6c7"
        stroke="#6985bc"
        strokeWidth="6"
      />
      <circle
        cx="50"
        cy="60"
        r="16"
        fill="#fff"
        stroke="#6985bc"
        strokeWidth="3"
      />
      <motion.rect
        x="82"
        y="56"
        width="60"
        height="8"
        rx="4"
        fill="#6985bc"
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

function ServiceHero() {
  return (
    <motion.section
      className="relative w-full py-20 px-4 pt-40 flex flex-col items-center justify-center bg-[#6985bc] overflow-hidden"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div className="max-w-3xl mx-auto text-center z-10 relative">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
          Premium Tape Solutions
        </h1>
        <p className="text-lg font-semibold md:text-xl text-black mb-8 max-w-2xl mx-auto leading-relaxed">
          Discover our full range of{" "}
          <span className="font-semibold text-white">general</span> and{" "}
          <span className="font-semibold text-white">specialty tapes</span>,
          engineered for <span className="font-semibold">reliability</span>,{" "}
          <span className="font-semibold">performance</span>, and your unique
          business needs. From{" "}
          <span className="font-semibold text-white">packaging</span> to{" "}
          <span className="font-semibold text-white">insulation</span>, we have
          the perfect tape for you.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-4">
          <span className="inline-flex items-center px-4 py-2 bg-white text-gray-700 font-semibold rounded-full shadow-sm text-base">
            🏆 Industry Leading Quality
          </span>
          <span className="inline-flex items-center px-4 py-2 bg-white text-gray-700 font-semibold rounded-full shadow-sm text-base">
            🚚 Fast Delivery
          </span>
          <span className="inline-flex items-center px-4 py-2 bg-white text-gray-700 font-semibold rounded-full shadow-sm text-base">
            🛡️ Custom Solutions
          </span>
        </div>
        <a
          href="#services"
          className="inline-block mt-2 px-8 py-3 bg-white text-black font-bold rounded-full shadow-lg hover:bg-[#acb6c7] transition-colors duration-200"
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
          fill="#fffff"
          d="M44.8,-67.2C57.2,-59.2,65.2,-44.8,70.2,-29.7C75.2,-14.7,77.2,1,72.2,14.7C67.2,28.3,55.2,39.8,42.2,48.2C29.2,56.7,14.6,62.1,-0.7,62.9C-16,63.7,-32,59.9,-44.2,51.1C-56.4,42.3,-64.8,28.5,-68.2,13.6C-71.6,-1.3,-70,-17.2,-62.7,-29.7C-55.4,-42.2,-42.4,-51.3,-28.2,-58.2C-14,-65.1,1.4,-69.8,16.7,-70.2C32,-70.6,44.8,-67.2,44.8,-67.2Z"
          transform="translate(100 100)"
        />
      </svg>
      {tapeRollSVG}
    </motion.section>
  );
}

export default ServiceHero;
