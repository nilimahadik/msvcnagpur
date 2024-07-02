import mainSliderData from "@/data/mainSliderData";
import React from "react";
import SwiperCore, {
  Autoplay,
  EffectFade,
  Navigation,
  Pagination,
} from "swiper";
import { Swiper } from "swiper/react";
import SingleSlide from "./SingleSlide";
import SliderCounter from "./SliderCounter";
import { useTranslation } from 'next-i18next';

SwiperCore.use([Autoplay, Navigation, EffectFade, Pagination]);

const mainSlideOptions = {
  slidesPerView: 1,
  loop: true,
  effect: "fade",
  pagination: {
    el: "#main-slider-pagination",
    type: "bullets",
    clickable: true,
  },
  navigation: {
    nextEl: "#main-slider__swiper-button-next",
    prevEl: "#main-slider__swiper-button-prev",
  },
  autoplay: {
    delay: 5000,
  },
};

const MainSlider = ({ locale }) => {
  const { t } = useTranslation('common');

  return (
    <section className="main-slider">
       <h1>{t('main_slider_title')}</h1>
      <p>Current locale: {locale}</p>
      <Swiper className="thm-swiper__slider" {...mainSlideOptions}>
        <div className="swiper-wrapper">
          {mainSliderData.map((slide) => (
            <SingleSlide key={slide.id} slide={slide} />
          ))}
        </div>
        {/* <SliderCounter /> */}
        <div className="swiper-pagination" id="main-slider-pagination"></div>
        <div className="main-slider__nav">
          <div
            className="swiper-button-prev"
            id="main-slider__swiper-button-next"
          >
            <i className="icon-right-arrow icon-left-arrow"></i>
          </div>
          <div
            className="swiper-button-next"
            id="main-slider__swiper-button-prev"
          >
            <i className="icon-right-arrow"></i>
          </div>
        </div>
      </Swiper>
    </section>
  );
};

export default MainSlider;
