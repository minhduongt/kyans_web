import { CAROUSEL_SLIDES } from '@/constants';
import { FreeMode, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import '@/styles/sections/Carousel.scss';
import { cn } from '@/utils';
import { useMediaQuery } from '@uidotdev/usehooks';

function CarouselSection() {
  const isMobile = useMediaQuery('only screen and (max-width : 768px)');

  const swiperOptions = {
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: isMobile ? false : true,
    },
    noSwiping: true,
    preventClicks: true,
    freeMode: true,
    spaceBetween: 50,
    slidesPerView: 3,
    speed: 5000,
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 100,
        speed: 2000,
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
      id="su-kien"
      className="flex h-[600px] items-center bg-yellow-light md:h-[700px]"
    >
      <Swiper modules={[FreeMode, Autoplay]} {...swiperOptions}>
        {CAROUSEL_SLIDES.map((slide) => (
          <SwiperSlide
            key={slide.id}
            className={cn(
              'min-w-fit',
              slide.isSmaller && '!-ml-[100px] !mr-0 md:!-ml-[50px]',
            )}
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
