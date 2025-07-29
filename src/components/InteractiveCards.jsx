import React from "react";

const cards = [
  {
    title: "Inspiring Testimonial",
    subtitle: "Jane Doe",
    body: "“This mix changed my life! The vibes are unmatched.”",
    img: "/assets/user1.jpg",
    cta: "Read More",
    link: "#"
  },
  {
    title: "Latest Blog Post",
    subtitle: "Mixing Tips",
    body: "Discover the secrets to a perfect summer mix in our latest post.",
    img: "/assets/blog1.jpg",
    cta: "Read More",
    link: "#"
  },
  {
    title: "Featured Track",
    subtitle: "DJ Tape",
    body: "Listen to the new single that’s topping the charts.",
    img: "/assets/track1.jpg",
    cta: "Listen Now",
    link: "#"
  },
];

import { motion } from "framer-motion";

export default function InteractiveCards() {
  return (
    <motion.section
      className="py-12 px-4 max-w-6xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7 }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {cards.map((card, i) => (
          <div
            key={i}
            className="group relative bg-white rounded-2xl shadow-md overflow-hidden transition-transform duration-200 hover:scale-105 focus-within:scale-105"
            tabIndex={0}
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-5">
              <h3 className="text-lg font-bold mb-1 tracking-tight">{card.title}</h3>
              <span className="block text-sm text-gray-500 mb-2">{card.subtitle}</span>
              <p className="text-base text-gray-700 mb-4 leading-relaxed">{card.body}</p>
              <a
                href={card.link}
                className="opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-200 absolute bottom-5 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-6 py-2 rounded-full font-semibold shadow-lg text-base focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-400 transform hover:scale-105"
                tabIndex={0}
              >
                {card.cta}
              </a>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
} 