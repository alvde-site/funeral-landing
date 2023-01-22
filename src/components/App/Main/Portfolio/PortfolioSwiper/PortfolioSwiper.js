// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { portfolioImages } from "../../../../../utils/constants";

import "swiper/css";
import "swiper/css/navigation";

import "./PortfolioSwiper.css";

import { Navigation } from "swiper";

import "./PortfolioSwiper.css";

function PortfolioSwiper() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      navigation={true}
      modules={[Navigation]}
    >
      {portfolioImages.map((portfolioImage, index) => {
        return (
          <SwiperSlide key={index}>
            <figure className="image-viewing__img-card">
              <img
                src={portfolioImage.src}
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
