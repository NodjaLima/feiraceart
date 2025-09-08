import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./CarrosselDestaque.css";
import logo1 from "../../assets/logo.png";
import logo2 from "../../assets/logocopy.png";
import logo3 from "../../assets/logocopy2.png";

const CarrosselDestaque = () => {
  const images = [
    { src: logo1, title: "Título 1" },
    { src: logo2, title: "Título 2" },
    { src: logo3, title: "Título 3" },
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