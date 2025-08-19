import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    quote: "The best tape we've ever used for our packaging! Super strong and always reliable.",
    name: "Rohit Sharma",
    company: "Sharma Logistics",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "Custom printed tapes from Power Fixit made our brand stand out. Fast delivery too!",
    name: "Priya Mehta",
    company: "Mehta Retailers",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "Excellent quality and customer service. Highly recommended for any business.",
    name: "Amit Verma",
    company: "Verma Exports",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg"
  }
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef();

  // Auto-rotate every 4 seconds
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 4000);
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  const next = () => setIndex((i) => (i + 1) % testimonials.length);
  const prev = () => setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <section className="py-24 px-6 text-center relative overflow-hidden bg-gradient-to-br from-white via-[#96b0e0] to-white">
      {/* Decorative SVG blob */}
      <svg className="absolute right-0 top-0 w-60 h-60 opacity-20 blur-2xl -z-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#b07a3c" d="M44.8,-67.2C57.2,-59.2,65.2,-44.8,70.2,-29.7C75.2,-14.7,77.2,1,72.2,14.7C67.2,28.3,55.2,39.8,42.2,48.2C29.2,56.7,14.6,62.1,-0.7,62.9C-16,63.7,-32,59.9,-44.2,51.1C-56.4,42.3,-64.8,28.5,-68.2,13.6C-71.6,-1.3,-70,-17.2,-62.7,-29.7C-55.4,-42.2,-42.4,-51.3,-28.2,-58.2C-14,-65.1,1.4,-69.8,16.7,-70.2C32,-70.6,44.8,-67.2,44.8,-67.2Z" transform="translate(100 100)" />
      </svg>
      <h2 className="text-4xl font-bold mb-10 text-white">What Our Customers Say</h2>
      <div className="flex flex-col items-center justify-center relative max-w-xl mx-auto">
        <div className="flex items-center justify-center gap-4 mb-6">
          <button onClick={prev} aria-label="Previous" className="p-2 rounded-full bg-white shadow hover:bg-[#7895d0] text-[#96b0e0] hover:text-white text-xl transition disabled:opacity-50" disabled={testimonials.length < 2}>
            <FaChevronLeft />
          </button>
          <div className="w-full min-w-[320px] max-w-lg flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.7 }}
                className="bg-[#7895d0] p-8 rounded-2xl shadow-xl border-4 border-black flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8 w-full"
                aria-live="polite"
              >
                <img src={testimonials[index].avatar} alt={testimonials[index].name} className="w-20 h-20 rounded-full border-2 border-[#b07a3c] mb-4 md:mb-0 shadow object-cover" />
                <div className="flex-1 text-left">
                  <p className="text-black italic mb-4 text-base md:text-lg">“{testimonials[index].quote}”</p>
                  <div className="font-semibold text-white">{testimonials[index].name}</div>
                  <div className="text-[#1a2341] text-sm">{testimonials[index].company}</div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          <button onClick={next} aria-label="Next" className="p-2 rounded-full bg-white shadow hover:bg-[#7895d0] text-[#96b0e0] hover:text-white text-xl transition disabled:opacity-50" disabled={testimonials.length < 2}>
            <FaChevronRight />
          </button>
        </div>
        {/* Dots */}
        <div className="flex gap-2 justify-center mt-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-3 h-3 rounded-full ${i === index ? 'bg-white' : 'bg-[#96b0e0]'} transition`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}