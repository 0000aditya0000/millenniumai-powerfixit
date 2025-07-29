import { FaPlug, FaPaintRoller, FaGripLines, FaRoad, FaCar, FaCogs } from "react-icons/fa";

const tapes = [
  {
    icon: <FaPlug className="text-4xl text-[#b07a3c]" />, 
    title: "PVC INSULATION TAPE",
    desc: "Electrical tape (insulation tape) is a type of pressure-sensitive tape used to insulate electrical wires and other materials that conduct electricity. It can be made of many plastics, but vinyl is the most popular, as it stretches well and gives an effective and long lasting insulation."
  },
  {
    icon: <FaPaintRoller className="text-4xl text-[#b07a3c]" />,
    title: "MASKING TAPES",
    desc: "Masking tape, also known as painter's tape, is a type of pressure-sensitive tape made of a thin and easy-to-tear paper, and an easily released pressure-sensitive adhesive. It is available in a variety of widths. It is used mainly in painting to mask areas that should not be painted."
  },
  {
    icon: <FaGripLines className="text-4xl text-[#b07a3c]" />,
    title: "CROSS FILAMENT TAPE",
    desc: "This tape has a film backing and rubber adhesive. Woven glass fibers reinforce the backing making this product extremely strong when used for heavy packing where it can replace metal and polypropylene strapping to great advantage."
  },
  {
    icon: <FaRoad className="text-4xl text-[#b07a3c]" />,
    title: "FLOOR MARKING TAPE",
    desc: "Floor marking tapes are adhesive tapes used to mark hazards, divide spaces, create aisles, or provide directions. They are commonly used in industrial and manufacturing facilities for floor marking. Tapes are an effective replacement for paints."
  },
];

const applications = [
  { caption: "Automotive Use", icon: <FaCar className="text-3xl text-[#1a2341]" /> },
  { caption: "General Masking", icon: <FaPaintRoller className="text-3xl text-[#1a2341]" /> },
  { caption: "Industrial Application", icon: <FaCogs className="text-3xl text-[#1a2341]" /> },
];

export default function SpecialtyTapes() {
  return (
    <section className="w-full bg-[#f3e7d2] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-start gap-8 mb-8">
          <div className="flex-1 flex flex-col gap-8">
            {tapes.map((t, i) => (
              <div key={i} className="flex gap-4 items-start">
                <div>{t.icon}</div>
                <div>
                  <div className="font-bold text-lg text-[#1a2341] mb-1">{t.title}</div>
                  <div className="text-[#1a2341] text-sm leading-relaxed">{t.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center gap-8 mt-8">
          {applications.map((a, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="bg-white rounded-lg shadow p-3 mb-2">{a.icon}</div>
              <div className="text-xs text-[#1a2341] font-semibold text-center">{a.caption}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 