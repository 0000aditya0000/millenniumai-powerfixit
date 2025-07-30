import { FaCogs, FaCertificate, FaShippingFast, FaSmile } from "react-icons/fa";
import { motion } from "framer-motion";

const features = [
  {
    icon: <FaCogs className="text-3xl text-black" />,
    title: "In-House Manufacturing",
    desc: "Direct control over quality and delivery.",
    details: [
      "State-of-the-art production lines",
      "Strict quality checks at every stage",
      "Custom solutions for unique needs"
    ]
  },
  {
    icon: <FaCertificate className="text-3xl text-black" />,
    title: "ISO Certified",
    desc: "Internationally recognized quality standards.",
    details: [
      "ISO 9001:2015 certified facility",
      "Consistent product quality",
      "Trusted by leading brands"
    ]
  },
  {
    icon: <FaShippingFast className="text-3xl text-black" />,
    title: "Fast Delivery",
    desc: "Quick turnaround and reliable logistics.",
    details: [
      "On-time delivery across India",
      "Efficient order processing",
      "Strong logistics partnerships"
    ]
  },
  {
    icon: <FaSmile className="text-3xl text-black" />,
    title: "Customer Satisfaction",
    desc: "Hundreds of happy clients across industries.",
    details: [
      "Dedicated support team",
      "Flexible order quantities",
      "Long-term business relationships"
    ]
  },
];

export default function Features() {
  return (
    <section className="w-full bg-gradient-to-br from-[#7895d0] via-white to-[#96b0e0] py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-4">Why Choose Us?</h2>
        <p className="text-lg text-center text-black mb-12 max-w-2xl mx-auto">We go beyond just supplying tapes. Our commitment to quality, speed, and customer satisfaction sets us apart in the industry.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left bg-white/80 rounded-2xl p-8 shadow-lg border border-[#f3e7d2] hover:shadow-2xl transition-transform duration-300 gap-6 md:gap-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ scale: 1.03 }}
            >
              <motion.div
                whileHover={{ scale: 1.18, rotate: 6 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="mb-2 flex-shrink-0"
              >
                {f.icon}
              </motion.div>
              <div className="flex-1">
                <div className="font-bold text-xl text-[#1a2341] mb-1">{f.title}</div>
                <div className="text-[#4b4b4b] text-base mb-2">{f.desc}</div>
                <ul className="text-xs text-[#1a2341] list-disc list-inside">
                  {f.details && f.details.map((d, idx) => (
                    <li key={idx}>{d}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
