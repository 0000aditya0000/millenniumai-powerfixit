import { useState, useEffect, useRef } from "react";
import { FaTape } from "react-icons/fa";
import logo from "../assets/logo111.png";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "About", href: "/about" },
  { label: "Testimonials", href: "/testimonials" },
];

// Custom hook for scrollspy
function useScrollSpy(ids, offset = 0) {
  const [activeId, setActiveId] = useState(ids[0]);
  useEffect(() => {
    function onScroll() {
      let found = ids[0];
      for (let id of ids) {
        const el = document.getElementById(id.replace('#', ''));
        if (el) {
          const top = el.getBoundingClientRect().top - offset;
          if (top <= 0) found = id;
        }
      }
      setActiveId(found);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [ids, offset]);
  return activeId;
}

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const sectionIds = ["#", "#services", "#about", "#testimonials"];
  const activeId = useScrollSpy(sectionIds, 80);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Smooth scroll handler
  const handleNavClick = (e, href) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const el = document.getElementById(href.replace('#', ''));
      if (el) {
        e.preventDefault();
        window.scrollTo({
          top: el.offsetTop - 70,
          behavior: "smooth"
        });
      }
    }
    setOpen(false);
  };

  return (
    <nav className={
      `absolute top-0 left-0 right-0 z-10 bg-transparent bg-opacity-90  transition-all duration-300 ${scrolled ? 'shadow-lg' : ''}`
    }>
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo left */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="Power Fixit" className="w-40 h-11 object-fill rounded-xl" />
          {/* <span className="font-extrabold text-3xl text-black tracking-wide">Power <span className="text-red-700">Fi<span className="text-black">x</span>it</span></span> */}
        </div>
        {/* Nav links center */}
        <div className="hidden md:flex flex-1 justify-center">
          <div className="flex gap-6 bg-transparent rounded-full px-8 py-2 shadow-md">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={e => handleNavClick(e, link.href)}
                className={`relative px-2 py-1 group text-lg font-medium transition ${activeId === link.href ? 'text-red-600' : 'text-white hover:text-gray-200'}`}
              >
                {link.label}
                <span className={`absolute left-0 -bottom-0.5 h-0.5 bg-gradient-to-r from-gray-200 to-gray-500 rounded-full transition-all duration-300 ${activeId === link.href ? 'w-full' : 'w-0 group-hover:w-full'}`}></span>
              </a>
            ))}
          </div>
        </div>
        {/* CTA button right */}
        <div className="hidden md:flex">
          <a href="#contact" onClick={e => handleNavClick(e, '#contact')} className="ml-6 bg-white hover:bg-[#a2b4d2] text-[#6985bc] font-semibold px-6 py-2 rounded-full shadow transition text-lg">Get a Quote</a>
        </div>
        {/* Hamburger for mobile */}
        <button className="md:hidden text-white text-3xl ml-auto" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-8 h-8">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-[#b07a3c]/20 px-4 pb-4 flex flex-col gap-4 text-lg font-semibold shadow-lg animate-fade-in-down rounded-b-2xl">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={e => handleNavClick(e, link.href)}
              className={`transition px-3 py-2 rounded-full ${activeId === link.href ? 'text-[#b07a3c]' : 'text-[#1a2341] hover:text-[#7895d0]'}`}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={e => handleNavClick(e, '#contact')} className="bg-[#7895d0] hover:text-red-500 text-black font-bold px-6 py-2 rounded-full shadow transition text-lg mt-2 text-center">Get a Quote</a>
        </div>
      )}
    </nav>
  );
} 