import { useParams } from "react-router-dom";
import { services } from "./ServicesPage";
import { motion } from "framer-motion";
import ServiceHero from "../components/ServiceHero";

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
        fill="#acb6c7"
        stroke="#6985bc"
        strokeWidth="6"
      />
      <circle
        cx="50"
        cy="60"
        r="16"
        fill="#fff"
        stroke="#6985bc"
        strokeWidth="3"
      />
      <motion.rect
        x="82"
        y="56"
        width="60"
        height="8"
        rx="4"
        fill="#6985bc"
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

  if (!service)
    return <div className="p-10 text-xl text-gray-800">Service not found</div>;

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <ServiceHero/>

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
                <div className="w-20 h-1 bg-gradient-to-r from-[#6985bc] to-[#96b0e0] rounded-full mb-8"></div>
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
              <div className="w-20 h-1 bg-gradient-to-r from-[#6985bc] to-[#96b0e0] rounded-full mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Discover what makes our {service.title.toLowerCase()} the perfect choice for your needs
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
                      <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-[#6985bc] to-[#96b0e0] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
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
          <div className="bg-gradient-to-r from-[#7895d0] to-[#96b0e0] rounded-3xl p-12 text-white">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-xl mb-8 text-white/90 max-w-2xl mx-auto">
              Contact us today to learn more about our {service.title.toLowerCase()} and how it can benefit your business.
            </p>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default ServiceDetail;