import { FaTruck, FaCar, FaWarehouse } from "react-icons/fa";
import { MdHexagon } from "react-icons/md";
import { motion } from "framer-motion";

const trusted = [
  { icon: <MdHexagon className="text-3xl text-gray-500" />, label: "FMCG" },
  { icon: <FaTruck className="text-3xl text-gray-500" />, label: "Logistics" },
  { icon: <FaCar className="text-3xl text-gray-500" />, label: "Automotive" },
  { icon: <FaWarehouse className="text-3xl text-gray-500" />, label: "Retail" },
];

export default function TrustedBy() {
  return (
    <section className="w-full relative bg-gradient-to-br from-white to-[#96b0e0] py-8 border-t border-b border-gray-200">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="uppercase text-xs tracking-widest text-gray-600 font-bold mb-2">Trusted By</div>
        <div className="text-lg font-semibold text-black mb-4 text-center">Leading brands across industries trust our tapes for reliability and performance.</div>
        <div className="flex gap-10 md:gap-16 text-gray-700 text-base justify-center items-center">
          {trusted.map((t, i) => (
            <motion.div
              key={i}
              className="flex flex-col items-center gap-1"
              whileHover={{ scale: 1.18, rotate: 6 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {t.icon}
              <span className="font-semibold text-gray-600 text-sm mt-1">{t.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 