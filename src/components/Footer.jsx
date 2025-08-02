import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { Pagination, Scrollbar, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import tapeimg1 from '../assets/tape-photos/img1.jpeg'
import tapeimg2 from '../assets/tape-photos/img2.jpeg'
import tapeimg3 from '../assets/tape-photos/img3.jpeg'
import tapeimg10 from '../assets/tape-photos/img10.jpeg'
import tapeimg11 from '../assets/tape-photos/img11.jpeg'

import { image, img } from "motion/react-client";

const crousels = [{ img: tapeimg1 }, { img: tapeimg2 }, { img: tapeimg3 },
  { img: tapeimg10 }, { img: tapeimg11 },
];


export default function Footer() {

  return (<>
    <section className="bg-[#96b0e0] p-8">
      <div className="w-full m-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">Our Printed Tapes</h2>
        <Swiper
          modules={[Pagination, Scrollbar, Autoplay]}
          style={{ position: "relative", paddingBottom: "50px" }}
          spaceBetween={20}
          slidesPerView={2}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 4,
            },
            1280: { slidesPerView: 4,
            }
          }}
          pagination={{ clickable: true }}
          scrollbar={{ draggable: true }}
          className="max-w-7xl"
        >
          {crousels.map((crousel, idx) => (
            <SwiperSlide key={idx}>
              <img src={crousel.img} alt={image} className="h-40 w-60" />
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