import { CAROUSEL_SLIDES } from '@/constants';
import { FreeMode, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '@/styles/sections/Carousel.scss';
import { cn } from '@/utils';

function CarouselSection() {
  const swiperOptions = {
    loop: true,
    autoplay: { delay: 0, disableOnInteraction: false },
    freeMode: true,
    spaceBetween: 50,
    slidesPerView: 3,
    speed: 5000,
    breakpoints: {
      480: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1440: {
        slidesPerView: 3,
      },
      1920: {
        slidesPerView: 4,
      },
      2560: {
        slidesPerView: 5,
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
          <SwiperSlide
            key={slide.id}
            className={cn('min-w-fit', slide.isSmaller && '!-ml-[50px] !mr-0')}
          >
            <img
              alt={slide.label}
              src={slide.imageUrl}
              className={cn(
                'h-[500px] w-fit min-w-[500px] max-w-max object-contain',
              )}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default CarouselSection;
