import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import tapeimg1 from '../assets/tape-photos/nexa-tape.jpeg'
import tapeimg2 from '../assets/tape-photos/bhopa-tape.jpeg'
import tapeimg3 from '../assets/tape-photos/maruti-tape.jpeg'
import tpaeimg4 from '../assets/tape-photos/redrock-tape.jpeg'
import tapeimg5 from '../assets/tape-photos/snapdo.jpeg'
import { image, img } from "motion/react-client";

const crousels = [{ img: tapeimg1 }, { img: tapeimg2 }, { img: tapeimg3 }, { img: tpaeimg4 }, { img: tapeimg5 },];


export default function Footer() {

  return (<>
    <section className="bg-[#96b0e0] p-8">
      <div className="w-6xl m-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">Our Printed Tapes</h2>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          style={{ position: "relative", paddingBottom: "50px" }}
          spaceBetween={50}
          slidesPerView={4}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
        >
          {crousels.map((crousel, idx) => (
            <SwiperSlide key={idx}>
              <img src={crousel.img} alt={image} className="h-40" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>

    <footer className="bg-gray-700 text-white text-center py-6 border-t border-white">
      <div className="flex justify-center gap-6 mb-2">
        <a href="#" className="hover:text-red-500" aria-label="Facebook"><FaFacebookF /></a>
        <a href="#" className="hover:text-red-500" aria-label="Twitter"><FaTwitter /></a>
        <a href="#" className="hover:text-red-500" aria-label="Instagram"><FaInstagram /></a>
      </div>
      <p>&copy; {new Date().getFullYear()} PowerFixit Tapes. All rights reserved.</p>
    </footer>
  </>
  );
}

// from-[#7895d0] via-white to-[#96b0e0]