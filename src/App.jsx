import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import TrustedBy from "./components/TrustedBy";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import CallToAction from "./components/CallToAction";
import AboutOwner from "./components/AboutOwner";
import ServicesPage from "./pages/ServicesPage";
import ServiceDetail from "./pages/ServiceDetail";
import AboutPage from "./pages/AboutPage";
import TestimonialsPage from "./pages/TestimonialsPage";

function MainHome() {
  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <TrustedBy />
      <Services />
      <Features />
      <HowItWorks />
      <AboutOwner />
      <CallToAction />
      <Testimonials />
      <Contact />
    </>
  );
}

function App() {
  return (
    <div className="font-sans">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<MainHome />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/testimonials" element={<TestimonialsPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/:slug" element={<ServiceDetail />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
