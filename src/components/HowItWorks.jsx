import { motion } from "framer-motion";
const steps = [
  { step: "1", title: "Contact Us", desc: "Reach out with your requirements." },
  { step: "2", title: "Get a Quote", desc: "Receive a tailored offer quickly." },
  { step: "3", title: "Production", desc: "We manufacture your order to spec." },
  { step: "4", title: "Delivery", desc: "Fast, reliable shipping to your door." },
];

export default function HowItWorks() {
  return (
    <section className="w-full bg-[#96b0e0] py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#1a2341] mb-10">How It Works</h2>
        <div className="relative">
          {/* Animated horizontal line for md+ screens */}
          <motion.div
            className="hidden md:block absolute top-20 left-0 right-0 h-2"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            style={{
              transformOrigin: "left",
              background: "linear-gradient(90deg, #ffffff 0%, #5895d0 100%)",
              borderRadius: "9999px",
              height: "6px",
              zIndex: 0,
            }}
          />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {steps.map((s, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center text-center bg-white rounded-xl p-6 shadow-md border border-[#e5d3b3] hover:shadow-xl transition-transform duration-300 cursor-pointer"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                whileHover={{ scale: 1.07 }}
              >
                <div className="w-12 h-12 rounded-full bg-[#7895d0] text-white flex items-center justify-center text-2xl font-bold mb-2 relative z-20">
                  {s.step}
                </div>
                <div className="font-bold text-lg text-[#1a2341]">{s.title}</div>
                <div className="text-[#4b4b4b] text-sm mt-1">{s.desc}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
