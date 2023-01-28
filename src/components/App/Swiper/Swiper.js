// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import "./Swiper.css";

import { Navigation } from "swiper";

function PortfolioSwiper(props) {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      navigation={true}
      modules={[Navigation]}
    >
      {props.slideImages.map((slideImage, index) => {
        return (
          <SwiperSlide key={index}>
            <figure className="image-viewing__img-card">
              <img
                src={slideImage}
                alt={"фото"}
                className="image-viewing__image"
              />
            </figure>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
}

export default PortfolioSwiper;
