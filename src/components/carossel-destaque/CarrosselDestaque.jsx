import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./CarrosselDestaque.css";

const CarrosselDestaque = () => {
  const images = [
    { src: "/src/assets/logo.png", title: "Título 1" },
    { src: "/src/assets/logocopy.png", title: "Título 2" },
    { src: "/src/assets/logocopy2.png", title: "Título 3" },
  ];

  return (
    <div className="carrossel-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop={true}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div>
              <img
                src={image.src}
                alt={`Slide ${index + 1}`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarrosselDestaque;