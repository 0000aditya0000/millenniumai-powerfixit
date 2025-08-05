import { motion } from "framer-motion";
import tapeimg1 from '../assets/tape-photos/img1.jpeg'
import tapeimg2 from '../assets/tape-photos/img2.jpeg'
import tapeimg3 from '../assets/tape-photos/img3.jpeg'
import tapeimg4 from '../assets/tape-photos/img11.jpeg'
import tapeimg5 from '../assets/tape-photos/img10.jpeg'
import tapeimg6 from '../assets/tape-photos/img4.jpeg'

const tapeDetails = [
  {
    img: tapeimg1,
    title: "Crystal Clear Tape",
    desc: "Ultra-transparent finish, ideal for premium packaging and sealing.",
  },
  {
    img: tapeimg2,
    title: "High-Tack Brown Tape",
    desc: "Strong adhesive for heavy cartons. Works in humid conditions.",
  },
  {
    img: tapeimg3,
    title: "Custom Printed Tape",
    desc: "Printed with your branding/logo. Boosts brand visibility.",
  },
  {
    img: tapeimg4,
    title: "Masking Tape",
    desc: "Removes cleanly after use. Perfect for painting and surface protection.",
  },
  {
    img: tapeimg5,
    title: "Packaging Tape",
    desc: "Packaging tapes are widely used for carton sealing and shipping applications.",
  },
  {
    img: tapeimg6,
    title: "Coloured Tape",
    desc: "Vibrant colors for coding, marking, or decorative packaging.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
  hover: {
    scale: 1.05,
    boxShadow: "0 8px 32px rgba(63,87,141,0.18),0 1.5px 2.5px rgba(0,0,0,0.09)",
    y: -8,
    zIndex: 10,
    transition: { duration: 0.3, ease: "easeOut" },
  }
};

function TapeGrid() {
  return (
    <section className="bg-gradient-to-br from-[#7895d0] via-gray-200 to-[#7895d0] py-12 min-h-screen">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center font-bold text-white mb-4">
          Our Customize Tapes
        </h2>
        <p className="text-center text-black mb-9 text-lg max-w-2xl mx-auto">
          Explore our diverse range of custom and specialty tapes designed for every application—from secure shipping to visually striking packaging.
        </p>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {tapeDetails.map((tape, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
              className="relative bg-white rounded-2xl shadow-md flex flex-col items-center p-5 cursor-pointer transition-all duration-150 border-2 border-[#96b0e0]"
            >
              <motion.img
                src={tape.img}
                alt={tape.title}
                className="w-full h-48 object-fill rounded-xl shadow-lg border-4 border-[#eaeff7] mb-4"
                whileHover={{ scale: 1.03, rotate: 1 }}
                transition={{ duration: 0.28 }}
                draggable={false}
              />
              <div className="w-full flex flex-col flex-grow items-center justify-between">
                <h3 className="text-lg font-bold text-black text-center mb-2">{tape.title}</h3>
                <p className="text-gray-600 text-center text-base">{tape.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TapeGrid;
