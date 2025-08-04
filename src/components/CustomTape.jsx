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

const crousels = [{ img: tapeimg1 }, { img: tapeimg2 }, { img: tapeimg3 },
  { img: tapeimg10 }, { img: tapeimg11 },
];

function CustomTape(){
    return <section className="bg-[#96b0e0] p-8">
      <div className="w-full m-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">Our Customize Printed Tapes</h2>
        <Swiper
          modules={[Pagination, Scrollbar, Autoplay]}
          style={{ position: "relative", paddingBottom: "50px" }}
          spaceBetween={30}
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
              <img src={crousel.img} alt={idx} className="h-40 w-60" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
}

export default CustomTape;