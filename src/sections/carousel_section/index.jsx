import { CAROUSEL_SLIDES } from '@/constants';
import { FreeMode, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '@/styles/sections/Carousel.scss';

function CarouselSection() {
  return (
    <div
      id="carouselSection"
      className="flex h-[700px] items-center bg-yellow-light"
    >
      <Swiper
        modules={[FreeMode, Autoplay]}
        spaceBetween={300}
        slidesPerView={3}
        loop
        speed={2000}
        freeMode={true}
        autoplay={{ delay: 0, disableOnInteraction: false }}
      >
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
