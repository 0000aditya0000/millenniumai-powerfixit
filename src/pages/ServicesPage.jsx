import React, { useState, useRef } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FaBoxOpen,
  FaEraser,
  FaTags,
  FaTruck,
  FaPalette,
  FaBolt,
  FaPlug,
  FaGripLines,
  FaRoad,
} from "react-icons/fa";
import CustomTape from "../components/CustomTape";
import ServiceHero from "../components/ServiceHero";
import img1 from '../assets/hero-photos/bopp.png'
import img2 from '../assets/hero-photos/masking.png'
import img3 from '../assets/hero-photos/custom.png'
import img4 from '../assets/hero-photos/packaging.png'
import img5 from '../assets/hero-photos/colour.png'
import img6 from '../assets/hero-photos/white.png'
import img7 from '../assets/hero-photos/wire.png'
import img8 from '../assets/hero-photos/cross.png'
import img9 from '../assets/hero-photos/floor.png'


export const services = [
  {
    slug: "bopp-packaging-tape",
    icon: <FaBoxOpen />,
    img: img1,
    title: "BOPP Packaging Tape",
    desc: "High-clarity, pilfer-proof tape ideal for sealing and shipping.",
    longDescription:
      "BOPP (Biaxially Oriented Polypropylene) packaging tapes are widely used for carton sealing and shipping applications. These tapes are coated with a water-based adhesive, providing high tack and superior bonding. BOPP tapes offer exceptional clarity, strength, and resistance to wear and tear. Our range includes a variety of colors, sizes, and branding options to match industry demands. Ideal for logistics, warehouse management, and secure packaging, BOPP tapes offer a cost-effective and durable solution.",
    features: [
      "High tack and excellent adhesion on all surfaces",
      "Transparent and printed options available",
      "Withstands wear and tear during transit",
      "Eco-friendly water-based adhesive",
    ],
    applications: [
      "Sealing shipping cartons",
      "Inventory management",
      "Custom branding for eCommerce packaging",
      "Used in logistics and warehousing",
    ],
    specifications: {
      brand: [
        "Wonder",
        "Wonder+",
        "EZ",
        "Super Gold",
        "EZ+",
        "Sunsui",
        "Sunsui+",
      ],
      standardLength: "65 to 650 meters",
      colour: "Various colors, up to 5 color printing available",
      coreID: "Inner diameter of core - 76mm",
      thickness: {
        Wonder: "36",
        "Wonder+": "38",
        EZ: "40",
        "Super Gold": "42",
        "EZ+": "45",
        Sunsui: "50",
        "Sunsui+": "55",
      },
    },
  },
  {
    slug: "masking-tapes",
    icon: <FaEraser />,
    img: img2,
    title: "Masking Tapes",
    desc: "Clean removal, high precision, and no residue.",
    longDescription:
      "Masking tapes are pressure-sensitive tapes made of thin paper with easy-release adhesives. They are designed for temporary surface protection and are widely used in painting, automotive refinishing, and general masking tasks. These tapes ensure clean edges and lines during painting and remove without leaving residue. Available in different grades for light to heavy-duty applications, masking tapes offer excellent conformability and tear resistance.",
    features: [
      "Leaves no adhesive residue after removal",
      "Tears easily by hand for quick use",
      "Offers sharp paint lines and edge definition",
      "Works on various surfaces: walls, wood, metal",
      "Available in multiple widths and grades",
    ],
    applications: [
      "Painting and decorative tasks",
      "Surface masking in industrial painting",
      "Car refinishing and bodywork",
      "Bundling lightweight items",
    ],
  },
  {
    slug: "custom-printing-tapes",
    icon: <FaTags />,
    img: img3,
    title: "Custom Printed Tapes",
    desc: "Brand your packaging and enhance visibility.",
    longDescription:
      "Custom printed tapes are an excellent solution to promote brand identity while ensuring secure packaging. These tapes are made with durable BOPP film and high-grade adhesives that bond well to surfaces while showcasing your brand message. With up to 5 color printing options, businesses can highlight logos, warnings, or promotional messages on every package.",
    features: [
      "Up to 5 color custom printing",
      "Enhances brand visibility",
      "Used in logistics, eCommerce, and retail",
      "Durable adhesive holds during transit",
      "Can include QR codes or product info",
    ],
    applications: [
      "eCommerce shipping",
      "Product branding",
      "Tamper-evident packaging",
    ],
  },
  {
    slug: "logistics-carton-sealing",
    icon: <FaTruck />,
    img: img4,
    title: "Logistics & Carton Sealing",
    desc: "Secure, reliable, and easy to use for all box types.",
    longDescription:
      "Our carton sealing tapes are optimized for logistics and supply chain requirements. They offer superior holding strength, compatibility with automation, and work efficiently on various box surfaces. These tapes are designed for high-volume use in warehouses, ensuring minimal tape waste and maximum carton security.",
    features: [
      "Strong adhesion even in dusty conditions",
      "Quick and smooth dispensing",
      "Works with automated packaging machines",
      "Available in multiple thicknesses",
      "Suitable for high-load shipping",
    ],
  },
  {
    slug: "color-specialty-tapes",
    icon: <FaPalette />,
    img: img5,
    title: "Color & Specialty Tapes",
    desc: "Highlight, code, or decorate with style.",
    longDescription:
      "Color and specialty tapes are used for aesthetic, organizational, and functional purposes across industries. Available in a range of vibrant colors, these tapes help in color coding inventory, marking items, or adding decorative touches to packaging and products. Specialty variants may also include reflective, glow-in-the-dark, or anti-slip properties.",
    features: [
      "Multiple bright colors available",
      "Helps in color coding and identification",
      "Durable surface finish",
      "Writable surface for labels",
      "Available in matte, glossy, and reflective types",
    ],
  },
  {
    slug: "white-goods-tapes",
    icon: <FaBolt />,
    img: img6,
    title: "White Goods Tapes",
    desc: "Durable, moisture-resistant, and long-lasting adhesion.",
    longDescription:
      "White goods tapes are used during the manufacturing, packaging, and transportation of appliances such as refrigerators, washing machines, and air conditioners. These tapes provide secure adhesion to various surfaces without leaving residue, ensuring protection of fragile parts during movement.",
    features: [
      "Excellent moisture resistance",
      "Long shelf life and storage durability",
      "Peels cleanly without marks",
      "Protects glass, metal, and plastic parts",
      "Withstands cold and heat cycles",
    ],
  },
  {
    slug: "pvc-insulation-tape",
    icon: <FaPlug />,
    img: img7,
    title: "PVC Insulation Tape",
    desc: "Pressure-sensitive, flexible, and abrasion-resistant.",
    longDescription:
      "PVC insulation tapes are used for insulating electrical wires and other materials that conduct electricity. These tapes are fire-retardant, resistant to moisture, and can stretch without breaking, making them ideal for both domestic and industrial electrical work.",
    features: [
      "Strong electrical insulation",
      "Flame-retardant and moisture resistant",
      "Flexible and stretchable for tight spaces",
      "Easy to tear and apply",
      "Available in multiple colors for coding",
    ],
  },
  {
    slug: "cross-filament-tape",
    icon: <FaGripLines />,
    img: img8,
    title: "Cross Filament Tape",
    desc: "Glass fiber-reinforced for heavy packing.",
    longDescription:
      "Cross filament tape is a high-strength tape reinforced with glass fibers that run in both directions (longitudinal and transverse). It's designed for applications requiring extreme tensile strength like bundling heavy goods, palletizing, and replacing metal strapping.",
    features: [
      "Reinforced with fiberglass threads",
      "Exceptional tensile strength",
      "Water and abrasion resistant",
      "Ideal for bundling pipes, rods, and boxes",
      "Replaces metal strapping in many cases",
    ],
  },
  {
    slug: "floor-marking-tape",
    icon: <FaRoad />,
    img: img9,
    title: "Floor Marking Tape",
    desc: "Mark hazards, aisles, and directions in industrial spaces.",
    longDescription:
      "Floor marking tapes are heavy-duty tapes used to organize and mark spaces in warehouses, factories, and public areas. They help define walkways, work zones, or hazardous areas. These tapes offer strong adhesion and visibility in high-traffic conditions.",
    features: [
      "Highly visible colors (yellow, red, green, etc.)",
      "Quick and clean application",
      "Durable under foot and forklift traffic",
      "Non-slippery surface finish",
      "Removable and replaceable without tools",
    ],
  },
];

const stats = [
  { value: 17, label: "Years of Experience" },
  { value: 500, label: "Clients Served" },
  { value: 20, label: "Tape Variants" },
  { value: 150, label: "Industries Covered" },
];

const CustomCTA = () => (
  <motion.section
    className="w-full bg-[#7895d0] py-16 px-4 flex flex-col items-center justify-center text-center rounded-3xl shadow-lg my-16"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.7 }}
  >
    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
      Ready to Upgrade Your Packaging?
    </h2>
    <p className="text-lg text-black mb-8 max-w-2xl mx-auto leading-relaxed">
      Get in touch for a free consultation or to request a custom tape sample.
      Our experts are here to help you find the perfect solution for your
      business.
    </p>
    <motion.a
      href="/testimonials"
      className="inline-block bg-white hover:bg-[#acb6c7] text-black font-bold px-10 py-4 rounded-full shadow-lg text-lg transition-all duration-200 text-center focus:outline-none focus:ring-2 focus:ring-[#b07a3c] hover:scale-105 relative overflow-hidden"
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

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center justify-center p-6 bg-[#7895d0] rounded-2xl shadow-lg border border-gray-600 hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.span
        className="text-4xl md:text-5xl font-bold text-white mb-2"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {inView ? <AnimatedNumber value={value} /> : 0}
      </motion.span>
      <span className="text-lg text-black text-center font-semibold">{label}</span>
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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="bg-gradient-to-br from-[#7895d0] to-white min-h-screen">
      {/* Hero Section */}
      <ServiceHero />

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

      {/* Custom Tape */}
      <CustomTape />

      {/* Services Grid */}
      <motion.section
        className="max-w-7xl mx-auto py-16 px-4"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <p className="text-lg text-black max-w-2xl mx-auto">
            Comprehensive tape solutions for every industry and application
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {

            const handleMouseMove = (e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left - rect.width / 2;
              const y = e.clientY - rect.top - rect.height / 2;
              setMousePosition({ x: x * 0.1, y: y * 0.1 });
            };

            const handleMouseLeave = () => {
              setMousePosition({ x: 0, y: 0 });
              setIsHovered(false);
            };

            return (
              <Link
                key={service.slug || index}
                to={`/services/${service.slug}`}
                className="group"
              >
                <motion.div
                  key={index}
                  className="relative flex flex-col items-center bg-white rounded-2xl p-8 shadow-lg border border-[#7895d0] cursor-pointer text-center min-h-[500px] overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: 1,
                    // y: 0,
                    x: mousePosition.x,
                    y: mousePosition.y,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                  }}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  onMouseEnter={() => setIsHovered(true)}
                  whileHover={{
                    rotateX: 5,
                    rotateY: 5,
                    transition: { duration: 0.3 },
                  }}
                  style={{
                    transformStyle: "preserve-3d",
                    perspective: "1000px",
                  }}
                >
                  {/* Gradient Overlay */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-[#acb6c7]/0 via-[#acb6c7]/0 to-[#7895d0]/20 rounded-2xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: isHovered ? 1 : 0 }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Background Circles */}
                  <motion.div
                    className="absolute -top-20 -right-20 w-40 h-40 bg-[#7895d0] rounded-full"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                      opacity: isHovered ? 0.6 : 0,
                      scale: isHovered ? 1.2 : 0.5,
                      rotate: isHovered ? 180 : 0,
                    }}
                    transition={{ duration: 0.7 }}
                  />
                  <motion.div
                    className="absolute -bottom-20 -left-20 w-32 h-32 bg-[#acb6c7] rounded-full"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{
                      opacity: isHovered ? 0.4 : 0,
                      scale: isHovered ? 1.5 : 0.5,
                      rotate: isHovered ? -90 : 0,
                    }}
                    transition={{ duration: 0.5 }}
                  />

                  {/* Shimmer */}
                  <div className="shimmer absolute inset-0 rounded-2xl" />

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center h-full">
                    {/* Icon */}
                    <div className="relative mb-6">
                      <motion.div
                        className="absolute inset-0 bg-[#7895d0] rounded-full -m-4"
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{
                          scale: isHovered ? 1.2 : 0,
                          opacity: isHovered ? 0.2 : 0,
                        }}
                        transition={{ duration: 0.3 }}
                      />
                      <motion.div
                        className="absolute inset-0 border-2 border-[#7895d0] rounded-full -m-2"
                        initial={{ rotate: 0, opacity: 0 }}
                        animate={{
                          rotate: isHovered ? 360 : 0,
                          opacity: isHovered ? 0.6 : 0,
                        }}
                        transition={{
                          duration: 2,
                          repeat: isHovered ? Infinity : 0,
                          ease: "linear",
                        }}
                      />
                      <motion.div
                        className="relative z-10 w-20 h-20 bg-gradient-to-br from-[#7895d0] to-[#acb6c7] rounded-full flex items-center justify-center shadow-xl"
                        whileHover={{ scale: 1.1, rotate: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          whileHover={{ scale: 1.2 }}
                          transition={{ duration: 0.2 }}
                          className="text-3xl"
                        >
                          {service.icon}
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Title */}
                    <motion.div
                      className="font-bold text-xl text-black mb-3 tracking-tight overflow-hidden"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.6 }}
                    >
                      {service.title.split("").map((char, idx) => (
                        <motion.span
                          key={idx}
                          className="inline-block group-hover:text-[#7895d0] transition-colors duration-300"
                          initial={{ y: 20, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ delay: idx * 0.03, duration: 0.3 }}
                          whileHover={{ y: -2, transition: { duration: 0.2 } }}
                        >
                          {char === " " ? "\u00A0" : char}
                        </motion.span>
                      ))}
                    </motion.div>

                    {/* Description */}
                    <motion.div
                      className="text-[#333] text-base mb-6 leading-relaxed"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {service.desc}
                    </motion.div>

                    {/* Features */}
                    <motion.ul
                      className="text-left mx-auto text-black text-sm space-y-2 max-w-xs flex-grow"
                      initial="hidden"
                      animate="visible"
                      variants={{
                        hidden: {},
                        visible: {
                          transition: {
                            staggerChildren: 0.1,
                          },
                        },
                      }}
                    >
                      {service.features &&
                        service.features.map((feature, idx) => (
                          <motion.li
                            key={idx}
                            className="flex items-center space-x-3 p-2 rounded-lg group-hover:bg-[#acb6c7]/30 transition-colors duration-300"
                            variants={{
                              hidden: { opacity: 0, x: -20, scale: 0.8 },
                              visible: {
                                opacity: 1,
                                x: 0,
                                scale: 1,
                                transition: {
                                  duration: 0.6,
                                  type: "spring",
                                  stiffness: 100,
                                },
                              },
                            }}
                          >
                            <motion.div
                              className="w-3 h-3 bg-[#7895d0] rounded-full flex-shrink-0"
                              whileHover={{ scale: 1.5 }}
                              transition={{ duration: 0.2 }}
                            />
                            <span className="group-hover:text-[#7895d0] transition-colors duration-300">
                              {feature}
                            </span>
                          </motion.li>
                        ))}
                    </motion.ul>
                  </div>

                  {/* Shimmer CSS */}
                  <style jsx="true">{`
                    .shimmer {
                      position: relative;
                      overflow: hidden;
                    }
                    .shimmer::before {
                      content: "";
                      position: absolute;
                      top: 0;
                      left: -100%;
                      width: 100%;
                      height: 100%;
                      background: linear-gradient(
                        90deg,
                        transparent,
                        rgba(255, 255, 255, 0.4),
                        transparent
                      );
                      transition: left 0.8s;
                    }
                    .shimmer:hover::before {
                      left: 100%;
                    }
                  `}</style>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </motion.section>

      {/* Custom CTA Section */}
      <CustomCTA />
    </div>
  );
};

export default ServicesPage;
