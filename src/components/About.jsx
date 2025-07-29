import { FaCheckCircle } from "react-icons/fa";

export default function About() {
  return (
    <section className="py-24 px-6 relative overflow-hidden bg-gradient-to-br from-[#f3e7d2] via-white to-[#f3e7d2]">
      {/* Decorative SVG blob */}
      <svg className="absolute left-0 top-0 w-60 h-60 opacity-20 blur-2xl -z-10" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path fill="#b07a3c" d="M44.8,-67.2C57.2,-59.2,65.2,-44.8,70.2,-29.7C75.2,-14.7,77.2,1,72.2,14.7C67.2,28.3,55.2,39.8,42.2,48.2C29.2,56.7,14.6,62.1,-0.7,62.9C-16,63.7,-32,59.9,-44.2,51.1C-56.4,42.3,-64.8,28.5,-68.2,13.6C-71.6,-1.3,-70,-17.2,-62.7,-29.7C-55.4,-42.2,-42.4,-51.3,-28.2,-58.2C-14,-65.1,1.4,-69.8,16.7,-70.2C32,-70.6,44.8,-67.2,44.8,-67.2Z" transform="translate(100 100)" />
      </svg>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="md:w-1/2 flex justify-center">
          <div className="bg-white rounded-2xl p-4 md:p-8 border-4 border-[#b07a3c] shadow-xl">
            <img src={aboutimg} alt="Tape Rolls" className="rounded-xl shadow-lg w-80 h-80 object-cover" />
          </div>
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl font-bold mb-6 text-[#b07a3c]">About PowerFixit Tapes</h2>
          <p className="text-lg mb-6 text-[#1a2341]">
            Since 2009, PowerFixit has been a trusted name in BOPP self-adhesive tapes. Our mission is to deliver strong, reliable, and customizable tape solutions for packaging, shipping, and industrial needs. We are ISO 9001:2015 certified, ensuring every roll meets the highest standards of quality and performance.
          </p>
          <ul className="text-left space-y-3 mb-6">
            <li className="flex items-center gap-2"><FaCheckCircle className="text-[#b07a3c]" /> Customer-first approach</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-[#b07a3c]" /> Consistent product quality</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-[#b07a3c]" /> Fast, reliable delivery</li>
            <li className="flex items-center gap-2"><FaCheckCircle className="text-[#b07a3c]" /> Custom branding options</li>
          </ul>
          <p className="text-base text-[#1a2341]">Join hundreds of satisfied customers who trust us to secure their products and their reputation.</p>
        </div>
      </div>
    </section>
  );
}