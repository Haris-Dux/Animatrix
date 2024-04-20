import react from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Slider() {
  return (
    <>
      <Swiper
        modules={[Autoplay, Navigation, Pagination, Scrollbar, A11y]}
        slidesPerView={1}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        speed={500}
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <img
            className="h-[50vh] w-full object-cover"
            src="Images/Naruto3.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/Images/Naruto.jpg"
            alt=""
            className="h-[50vh] w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="h-[50vh] w-full object-cover"
            src="Images/DBZ.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/Images/OnePiece.jpg"
            alt=""
            className="h-[50vh] w-full object-cover transition duration-500 group-hover:scale-105"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}

export default Slider;
