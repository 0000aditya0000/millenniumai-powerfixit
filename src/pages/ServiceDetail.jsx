import { useParams } from "react-router-dom";
import { services } from "./ServicesPage";
import { motion, useAnimation, useInView } from "framer-motion";

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
        fill="#f3e7d2"
        stroke="#b07a3c"
        strokeWidth="6"
      />
      <circle
        cx="50"
        cy="60"
        r="16"
        fill="#fff"
        stroke="#b07a3c"
        strokeWidth="3"
      />
      <motion.rect
        x="82"
        y="56"
        width="60"
        height="8"
        rx="4"
        fill="#b07a3c"
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

const ServiceDetail = () => {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <div className="p-10 text-xl">Service not found</div>;

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="relative w-full py-20 px-4 pt-40 flex flex-col items-center justify-center bg-[#b07a3ca5] overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7 }}
      >
        <div className="max-w-3xl mx-auto text-center z-10 relative">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-lg">
            Premium Tape Solutions
          </h1>
          <p className="text-lg md:text-xl text-[#4b4b4b] mb-8 max-w-2xl mx-auto leading-relaxed">
            Discover our full range of{" "}
            <span className="font-semibold text-[#b07a3c]">general</span> and{" "}
            <span className="font-semibold text-[#b07a3c]">
              specialty tapes
            </span>
            , engineered for <span className="font-semibold">reliability</span>,{" "}
            <span className="font-semibold">performance</span>, and your unique
            business needs. From{" "}
            <span className="font-semibold text-[#b07a3c]">packaging</span> to{" "}
            <span className="font-semibold text-[#b07a3c]">insulation</span>, we
            have the perfect tape for you.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-4">
            <span className="inline-flex items-center px-4 py-2 bg-[#f3e7d2] text-[#b07a3c] font-semibold rounded-full shadow-sm text-base">
              🏆 Industry Leading Quality
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-[#f3e7d2] text-[#b07a3c] font-semibold rounded-full shadow-sm text-base">
              🚚 Fast Delivery
            </span>
            <span className="inline-flex items-center px-4 py-2 bg-[#f3e7d2] text-[#b07a3c] font-semibold rounded-full shadow-sm text-base">
              🛡️ Custom Solutions
            </span>
          </div>
          <a
            href="#services"
            className="inline-block mt-2 px-8 py-3 bg-[#b07a3c] text-white font-bold rounded-full shadow-lg hover:bg-[#a06a2c] transition-colors duration-200"
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
            fill="#b07a3c"
            d="M44.8,-67.2C57.2,-59.2,65.2,-44.8,70.2,-29.7C75.2,-14.7,77.2,1,72.2,14.7C67.2,28.3,55.2,39.8,42.2,48.2C29.2,56.7,14.6,62.1,-0.7,62.9C-16,63.7,-32,59.9,-44.2,51.1C-56.4,42.3,-64.8,28.5,-68.2,13.6C-71.6,-1.3,-70,-17.2,-62.7,-29.7C-55.4,-42.2,-42.4,-51.3,-28.2,-58.2C-14,-65.1,1.4,-69.8,16.7,-70.2C32,-70.6,44.8,-67.2,44.8,-67.2Z"
            transform="translate(100 100)"
          />
        </svg>
        {tapeRollSVG}
      </motion.section>

      {/* service Details  */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Product Gallery */}
        <motion.section
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <motion.div
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={service.image || "/placeholder-image.jpg"}
                  alt={service.title}
                  className="rounded-2xl shadow-xl object-cover w-full h-96 group-hover:shadow-2xl transition-shadow duration-300"
                />
                <div className="absolute inset-0 bg-black/10 rounded-2xl group-hover:bg-black/20 transition-colors duration-300"></div>
              </motion.div>
            </div>

            <div className="order-1 lg:order-2 space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Product Overview
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#b07a3c] to-[#d4a972] rounded-full mb-8"></div>
                <p className="text-lg text-gray-700 leading-relaxed whitespace-pre-line">
                  {service.longDescription}
                </p>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Features Section */}
        {service.features?.length > 0 && (
          <motion.section
            className="mb-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-12">
              <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Key Features
              </h3>
              <div className="w-20 h-1 bg-gradient-to-r from-[#b07a3c] to-[#d4a972] rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover what makes our {service.title.toLowerCase()} the
                perfect choice for your needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {service.features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="group relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 h-full group-hover:shadow-xl transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#b07a3c] to-[#d4a972] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <svg
                          className="w-6 h-6 text-white"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-800 font-medium leading-relaxed group-hover:text-gray-900 transition-colors duration-300">
                          {feature}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Call to Action */}
        <motion.section
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-gradient-to-r from-[#b07a3c] to-[#d4a972] rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Contact us today to learn more about our{" "}
              {service.title.toLowerCase()} and how it can benefit your
              business.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ServiceDetail;
