import React from "react";
import { motion } from "framer-motion";
import owner from "../assets/owner.jpeg";
import owner2 from "../assets/owner2.jpeg";

const owners = [
  {
    name: "A K Saxena",
    role: "Founder & CEO",
    image: owner,
    bio: `With over 17 years of industry experience, A K Saxena has been the driving force behind the company’s growth and innovation since its inception in 2009. His strategic vision and unwavering commitment to excellence have positioned the company as a trusted provider of premium adhesive solutions. A believer in values and quality, he leads with integrity and inspires the team to deliver beyond expectations.`,
    contact : "9997028787",
  },
  {
    name: "Akalavaya Saxena",
    role: "Co-Founder & Operations Head",
    image: owner2,
    bio: `As the Co-Founder and Operations Head, Akalavaya Saxena brings energy and precision to the company’s operations. With a sharp focus on efficiency and client satisfaction, he ensures seamless delivery across all projects. His leadership fosters collaboration and drives the team towards achieving operational excellence and innovation.`,
    contact : "9458201918",
  },

];

const AboutOwner = () => {
  return (
    <div className="py-16 bg-gradient-to-br from-white via-[#96b0e0] to-white">
      <h2 className="text-4xl font-bold text-center text-white mb-10 tracking-tight">
        Meet Our Leadership
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-10 px-4">
        {owners.map((owner, idx) => (
          <motion.div
            key={idx}
            className="bg-white rounded-3xl shadow-xl border border-black p-8 flex flex-col items-center group hover:shadow-2xl transition-all duration-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: idx * 0.12 }}
            whileHover={{ scale: 1.03 }}
          >
            <div className="w-32 h-32 mb-5 rounded-full overflow-hidden shadow-lg border-4 border-black">
              <motion.img
                src={owner.image}
                alt={owner.name}
                className="w-full h-full object-cover object-left transition-transform duration-300 group-hover:scale-110"
                whileHover={{ scale: 1.15 }}
                transition={{ duration: 0.4 }}
              />
            </div>
            <div className="text-xl font-bold text-[#7895d0] mb-1">
              {owner.name}
            </div>
            <div className="text-black font-semibold mb-3">
              {owner.role}
            </div>
            <p className="text-[#4b4b4b] text-center text-sm px-4">
              {owner.bio}
            </p>
            <div className="text-black font-semibold mt-4">
              Contact: {owner.contact}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutOwner;
