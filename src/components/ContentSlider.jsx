import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Card } from "../components";

const ContentSlider = ({ slides }) => {
  return (
    <div className="relative">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={4}
        navigation={{
          prevEl: ".swiper-button-prev-custom",
          nextEl: ".swiper-button-next-custom",
        }}
        breakpoints={{
          768: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1280: {     
            slidesPerView: 4,
            spaceBetween: 50,
          },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="max-md:min-w-full">
            <Card
              imgURL={slide.image}
              imgALT={slide.title} 
              href={`/animes/${slide._id}`}
              title={slide.title}
              type={slide.type}
              ranking={slide.ranking}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-button-prev-custom absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 cursor-pointer z-10 hover:bg-gray-700">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 19l-7-7 7-7"
          ></path>
        </svg>
      </div>
      <div className="swiper-button-next-custom z-10 absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 cursor-pointer hover:bg-gray-700">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 5l7 7-7 7"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default ContentSlider;