import { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import 'swiper/css/effect-coverflow';


import heroimg1 from "../assets/tape2.png";
import heroimg2 from "../assets/tape2.png";
import heroimg3 from "../assets/tape3.png";

const slides = [
  {
    img: heroimg1,
    headline: "Premium Adhesive Tapes Designed to Perform",
    sub: "Delivering reliable, industrial-grade tapes for packaging, insulation, and custom solutions.",
  },
  {
    img: "https://www.segliwa.de/fileadmin/_processed_/e/8/csm_202111_SEG_HP_4x3_Glimmerba__nder_558af620f7.png",
    headline: "Reliable Solutions for Every Industry",
    sub: "From packaging to insulation, our tapes meet the highest standards.",
  },
  {
    img: heroimg3,
    headline: "Custom Tape Solutions for Your Business",
    sub: "Get tailored adhesive products to fit your unique requirements.",
  },
];

export default function Hero() {
  const swiperRef = useRef(null);

  return (
    <section className="relative w-full min-h-[100vh] flex items-center justify-center px-0 overflow-hidden">
      {/* Swiper Background */}
      <div className="absolute top-0 inset-0 w-full h-screen z-0 cursor-pointer">
        <Swiper
          modules={[Autoplay, Pagination, EffectCoverflow]}
          effect="coverflow"
          loop
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="w-full h-full"
          onSwiper={(swiper) => (swiperRef.current = swiper)}
        >
          {slides.map((slide, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative w-full h-full min-h-[70vh]">
                <div
                  className="absolute inset-0 w-full h-full"
                  style={{
                    background: `url(${slide.img}) no-repeat center center/cover`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                />
                {/* Overlay for better text contrast */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a2341]/80 via-[#1a2341]/30 to-transparent z-10 pointer-events-none top-0" />
                {/* Text Content */}
                <div className="relative z-20 flex flex-col items-center justify-center h-full min-h-[70vh] px-4">
                  <motion.h1
                    className="text-3xl md:text-5xl font-semibold font-roboto-slab mb-4 text-white text-center drop-shadow-lg"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.7 }}
                  >
                    {slide.headline}
                  </motion.h1>
                  <motion.p
                    className="text-lg md:text-2xl max-w-2xl mb-8 font-medium text-white/90 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                  >
                    {slide.sub}
                  </motion.p>
                  <motion.div
                    className="flex flex-col sm:flex-row gap-4 mb-10 w-full sm:w-auto justify-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                  >
                    <a
                      href="#services"
                      className="bg-[#b07a3c] hover:bg-[#a86b2d] text-white font-bold px-7 py-3 rounded-full shadow-lg text-lg transition-all duration-200 text-center"
                    >
                      View Our Products
                    </a>
                    <a
                      href="#contact"
                      className="bg-white hover:bg-[#f3e7d2] text-[#1a2341] font-bold px-7 py-3 rounded-full shadow-lg text-lg transition-all duration-200 text-center border border-[#b07a3c]"
                    >
                      Get a Quote
                    </a>
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <motion.div initial={{ width:4000, height:4000}} animate={{width:0, height:0}} transition={{ duration: 0.8, delay: 0.5 }} className="absolute rounded-full bg-[#b07a3c] z-10"></motion.div>
    </section>
  );
}