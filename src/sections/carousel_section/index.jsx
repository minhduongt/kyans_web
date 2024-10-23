import { CAROUSEL_SLIDES } from '@/constants';
import { FreeMode, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '@/styles/sections/Carousel.scss';

function CarouselSection() {
  const swiperOptions = {
    loop: true,
    autoplay: { delay: 0, disableOnInteraction: false },
    freeMode: true,
    spaceBetween: 300,
    slidesPerView: 2,
    speed: 2000,
    breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: 300,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 300,
      },
      1440: {
        slidesPerView: 3,
        spaceBetween: 300,
      },
      1920: {
        slidesPerView: 4,
        spaceBetween: 0,
      },
    },
  };

  return (
    <div
      id="carouselSection"
      className="flex h-[700px] items-center bg-yellow-light"
    >
      <Swiper modules={[FreeMode, Autoplay]} {...swiperOptions}>
        {CAROUSEL_SLIDES.map((slide) => (
          <SwiperSlide key={slide.id}>
            <img
              alt={slide.label}
              src={slide.imageUrl}
              className="h-[500px] w-fit min-w-[500px] max-w-max"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CarouselSection;
