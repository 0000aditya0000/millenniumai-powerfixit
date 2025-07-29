// src/components/Stats.jsx
const stats = [
    { value: "500+", label: "Clients Served" },
    { value: "1M+", label: "Rolls Delivered" },
    { value: "15+", label: "Years Experience" },
    { value: "99.9%", label: "On-Time Delivery" },
  ];
  
  export default function Stats() {
    return (
      <section className="w-full bg-white py-12">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <div className="text-3xl font-extrabold text-[#b07a3c]">{s.value}</div>
              <div className="text-[#1a2341] font-medium">{s.label}</div>
            </div>
          ))}
        </div>
      </section>
    );
  }