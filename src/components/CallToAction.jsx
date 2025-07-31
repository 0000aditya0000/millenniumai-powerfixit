import { motion } from "framer-motion";

export default function CallToAction() {
  return (
    <motion.section
      className="w-full bg-[#7895d0] py-12 flex justify-center items-center relative overflow-hidden"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      {/* Decorative SVG background pattern */}
      <svg className="absolute left-0 top-0 w-80 h-80 opacity-20 blur-2xl -z-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#fff" d="M44.8,-67.2C57.2,-59.2,65.2,-44.8,70.2,-29.7C75.2,-14.7,77.2,1,72.2,14.7C67.2,28.3,55.2,39.8,42.2,48.2C29.2,56.7,14.6,62.1,-0.7,62.9C-16,63.7,-32,59.9,-44.2,51.1C-56.4,42.3,-64.8,28.5,-68.2,13.6C-71.6,-1.3,-70,-17.2,-62.7,-29.7C-55.4,-42.2,-42.4,-51.3,-28.2,-58.2C-14,-65.1,1.4,-69.8,16.7,-70.2C32,-70.6,44.8,-67.2,44.8,-67.2Z" transform="translate(100 100)" />
      </svg>
      <div className="max-w-3xl text-center relative z-10">
        <h2 className="text-3xl font-bold text-white mb-4 tracking-tight">Ready to Experience Premium Tapes?</h2>
        <p className="text-black mb-6 leading-relaxed">Contact us today for a quote or to discuss your custom requirements.</p>
        <motion.a
          href="#contact"
          className="bg-white text-black hover:bg-[#adc0dd] font-bold px-8 py-3 rounded-full shadow-lg text-lg transition-all duration-200 inline-block focus:outline-none focus:ring-2 focus:ring-[#b07a3c] hover:scale-105"
          whileHover={{ scale: 1.08, boxShadow: "0 8px 32px 0 rgba(176,122,60,0.25)" }}
          whileTap={{ scale: 0.97 }}
        >
          Get a Quote
        </motion.a>
      </div>
    </motion.section>
  );
} 