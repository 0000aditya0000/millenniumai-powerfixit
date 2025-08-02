import { useRef, useState, useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";
import { RiShakeHandsFill } from "react-icons/ri";
import img1 from "../assets/hero-photos/img11.png";
import img2 from "../assets/hero-photos/img22.png";
import img3 from "../assets/hero-photos/img333.png";
import img4 from "../assets/hero-photos/img4.png";
import img5 from "../assets/hero-photos/img5.png";
import img6 from "../assets/hero-photos/img6.png";
// import img from "../assets/hero-photos/img.png";


const carouselImages = [
  {
    src: img1,
    alt: "Packaging Tape Roll",
    title: "Premium Packaging Tape",
    description: "Strong adhesion for secure packaging & shipping.",
  },
  {
    src: img2,
    alt: "Double Side Tape",
    title: "Double Sided Tape",
    description: "Perfect bonding for crafts, frames, and industry.",
  },
  {
    src: img3,
    alt: "Masking Tape",
    title: "High-Quality Masking Tape",
    description: "Clean lines, easy removal for painting & repairs.",
  },
  {
    src: img4,
    alt: "Insulation Tape",
    title: "Electrical Insulation Tape",
    description: "Safe, flexible insulation for wires and electricals.",
  },
  {
    src: img5,
    alt: "BOPP Tape",
    title: "BOPP Adhesive Tape",
    description: "Durable, moisture-resistant sealing for packages.",
  },
  {
    src: img6,
    alt: "Custom Printed Tape",
    title: "Custom Printed Tape",
    description: "Promote your brand with printed adhesive tapes.",
  },
];

export default function Hero() {
  const [animate, setAnimate] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStartX, setDragStartX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const carouselRef = useRef(null);

  // Drag handlers
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setDragStartX(e.clientX);
    setDragOffset(0);
  };
  const handleMouseMove = (e) => {
    if (!isDragging) return;
    setDragOffset(e.clientX - dragStartX);
  };
  const handleMouseUp = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (Math.abs(dragOffset) > 50) {
      if (dragOffset > 0) {
        setCurrentImageIndex((prev) =>
          prev === 0 ? carouselImages.length - 1 : prev - 1
        );
      } else {
        setCurrentImageIndex((prev) =>
          prev === carouselImages.length - 1 ? 0 : prev + 1
        );
      }
    }
    setDragOffset(0);
  };
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setDragStartX(e.touches[0].clientX);
    setDragOffset(0);
  };
  const handleTouchMove = (e) => {
    if (!isDragging) return;
    setDragOffset(e.touches[0].clientX - dragStartX);
  };
  const handleTouchEnd = () => {
    if (!isDragging) return;
    setIsDragging(false);
    if (Math.abs(dragOffset) > 50) {
      if (dragOffset > 0) {
        setCurrentImageIndex((prev) =>
          prev === 0 ? carouselImages.length - 1 : prev - 1
        );
      } else {
        setCurrentImageIndex((prev) =>
          prev === carouselImages.length - 1 ? 0 : prev + 1
        );
      }
    }
    setDragOffset(0);
  };

  // Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (!isDragging) {
        setCurrentImageIndex((prev) =>
          prev === carouselImages.length - 1 ? 0 : prev + 1
        );
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [isDragging]);

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28 lg:pt-32 bg-[#6985bc]">
      {/* Glowing Orbs */}
      <div className="absolute top-1/4 -left-10 sm:-left-20 w-48 h-48 sm:w-72 sm:h-72 bg-[#acb6c7] rounded-full filter blur-[80px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-10 sm:-right-20 w-48 h-48 sm:w-72 sm:h-72 bg-[#a2b4d2] rounded-full filter blur-[110px] animate-pulse delay-1000" />

      <div className="max-w-[1920px] w-full mx-auto px-4 sm:px-6 relative z-20">
        <div
          className={`max-w-6xl mx-auto transition-all duration-1000 ${
            animate ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* Left: Main Content */}
            <div className="text-left">
              {/* <div className="inline-block px-4 py-2 mb-8 rounded-full border border-[#acb6c7] bg-white">
                <span className="text-base font-semibold text-[#6985bc]">
                  Welcome to Millennium Tapes
                </span>
              </div> */}
              <h1 className="text-2xl md:text-4xl lg:text-4xl font-extrabold mb-4 leading-tight text-black">
                {/* Jod Hamra{" "} */}
                <span className="text-white inline-block">
                  {/* <RiShakeHandsFill /> */}
                </span>{" "}
                {/* Bharosa Aapka */}
                {/* <span className="text-transparent bg-clip-text bg-black">
                    Adhesive Tapes
                  </span> */}
              </h1>
              {/* <span className="absolute -bottom-2 left-0 w-full h-1 rounded-full bg-gradient-to-r from-[#6985bc] via-[#7895d0] to-[#acb6c7]"></span> */}
              <div className="flex items-center mb-6">
                <span className="text-2xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-[#96b0e0]">
                  <Typewriter
                    words={[
                      "Custom Tape Solutions for your Business",
                      "Premium Adhesive Tapes Designed to Perform",
                      "Reliable Solutions for Every Industry",
                    ]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={60}
                    deleteSpeed={30}
                    delaySpeed={2000}
                  />
                </span>
              </div>
              <p className="text-lg md:text-xl mb-8 max-w-xl leading-relaxed text-gray-950">
                Strong, reliable, and customizable tapes for packaging,
                insulation, branding, and industrial needs. Quality you can
                trust—performance you expect.
              </p>
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <a href="#contact">
                  <button className="group relative px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:scale-105 transition-all duration-300 bg-gradient-to-r from-[#6985bc] via-[#7895d0] to-[#96b0e0] text-white">
                    <span className="relative z-10">Get a Quote</span>
                  </button>
                </a>
                <a href="#services">
                  <button className="group relative px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:scale-105 transition-all duration-300 border border-[#7895d0] bg-white text-[#7895d0]">
                    <span className="relative z-10">View Products</span>
                  </button>
                </a>
              </div>

              {/* Stats */}
              {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8 mt-16">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2 text-[#6985bc]">20+</div>
                  <div className="text-sm text-[#7895d0]">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2 text-[#6985bc]">500+</div>
                  <div className="text-sm text-[#7895d0]">Clients Served</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2 text-[#6985bc]">1,000+</div>
                  <div className="text-sm text-[#7895d0]">Shipments Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2 text-[#6985bc]">24/7</div>
                  <div className="text-sm text-[#7895d0]">Support</div>
                </div>
              </div> */}
            </div>
            {/* Right: Carousel */}
            <div className="relative hidden lg:block">
              <div className="relative w-full aspect-square">
                {/* BG Stack */}
                <div className="absolute inset-0 transition-all duration-1000 ease-out -z-10">
                  <div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: `linear-gradient(135deg, #96b0e0 40%, #acb6c7 70%, #ffffff 100%)`,
                      transform: `rotate(${
                        (currentImageIndex - 2) * -3
                      }deg) scale(${1 + (currentImageIndex % 2) * 0.08})`,
                      transition: "all 1s",
                    }}
                  />
                </div>
                <div className="absolute inset-0 transition-all duration-1000 ease-out -z-10">
                  <div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: `linear-gradient(150deg, #96b0e0 40%, #acb6c7 70%, #ffffff 100%)`,
                      transform: `rotate(${
                        (currentImageIndex - 2) * 3
                      }deg) scale(${1 + (currentImageIndex % 2) * 0.1})`,
                      transition: "all 1s",
                    }}
                  />
                </div>
                <div className="absolute inset-0 transition-all duration-1000 ease-out -z-10">
                  <div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: `linear-gradient(150deg, #96b0e0 40%, #acb6c7 70%, #ffffff 100%)`,
                      transform: `rotate(${
                        (currentImageIndex - 2) * 5
                      }deg) scale(${1 + (currentImageIndex % 2) * 0.07})`,
                      transition: "all 1s",
                    }}
                  />
                </div>
                {/* Carousel */}
                <div className="relative bg-white/80 rounded-3xl p-8 border-4 border-[#6985bc] shadow-2xl h-full flex flex-col justify-between">
                  {/* Company Name Top Border */}
                  <div className="absolute top-0 px-2 text-blue-800 font-bold tracking-wide text-xl pointer-events-none">
                    PowerFixit Tape Industry
                  </div>
                  {/* Carousel Image & Content */}
                  <div
                    ref={carouselRef}
                    className="aspect-square rounded-2xl overflow-hidden relative cursor-grab active:cursor-grabbing flex flex-col"
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                  >
                    <div
                      className="w-full h-full transition-transform duration-300 ease-out"
                      style={{ transform: `translateX(${dragOffset}px)` }}
                    >
                      <img
                        src={carouselImages[currentImageIndex].src}
                        alt={carouselImages[currentImageIndex].alt}
                        className="w-full h-full object-full bg-white"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/40 via-transparent to-transparent pb-2">
                        <div className="p-6 w-full">
                          <h3 className="text-2xl font-bold mb-1 text-white">
                            {carouselImages[currentImageIndex].title}
                          </h3>
                          <p className="text-lg text-gray-100">
                            {carouselImages[currentImageIndex].description}
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* Navigation dots & prev/next buttons... (your existing code) */}
                  </div>
                  {/* Slogan Bottom Border */}
                  <div className="absolute bottom-0 px-2 text-blue-800 font-bold tracking-wide text-2xl pointer-events-none">
                    Jod Hamara <span className="text-black inline-block"><RiShakeHandsFill /></span> Bharosa Aapka
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <svg
              className="w-8 h-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="#acb6c7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
