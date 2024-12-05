import { cn } from '@/utils';
import { useEffect, useRef, useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import ArrowIcon from '../../../icons/arrow.svg';
import Masonry from './Masonry';

const dermaAngelPreviewImages1 = {
  alt: 'dermaAngel',
  mainImages: [
    '/assets/images/partners/dermaAngel_1.png',
    '/assets/images/partners/dermaAngel_2.png',
    '/assets/images/partners/dermaAngel_3.png',
  ],
  images: [
    '/assets/images/partners/dermaAngel_4.png',
    '/assets/images/partners/dermaAngel_5.png',
    '/assets/images/partners/dermaAngel_6.png',
    '/assets/images/partners/dermaAngel_7.png',
    '/assets/images/partners/dermaAngel_8.png',
    '/assets/images/partners/dermaAngel_9.png',
  ],
};

const dermaAngelPreviewImages2 = {
  alt: 'dermaAngel',
  mainImages: [
    '/assets/images/partners/dermaAngel_10.png',
    '/assets/images/partners/dermaAngel_11.png',
    '/assets/images/partners/dermaAngel_12.png',
  ],
  images: [
    '/assets/images/partners/dermaAngel_13.png',
    '/assets/images/partners/dermaAngel_14.png',
    '/assets/images/partners/dermaAngel_15.png',
    '/assets/images/partners/dermaAngel_16.png',
    '/assets/images/partners/dermaAngel_17.png',
    '/assets/images/partners/dermaAngel_18.png',
  ],
};

function DermaAngelContent() {
  const swiperRef = useRef(null);
  const [current, setCurrent] = useState(0);
  const [lastIndex, setLastIndex] = useState(0);

  const clickBack = () => {
    swiperRef.current?.slidePrev();
  };
  const clickNext = () => {
    swiperRef.current?.slideNext();
  };

  const onSlideChange = () => {
    if (swiperRef.current) {
      setCurrent(swiperRef.current.activeIndex); // Update current index on slide change
    }
  };

  useEffect(() => {
    if (swiperRef.current) {
      setLastIndex(swiperRef?.current?.slides.length - 1);
    }
  }, [swiperRef]);
  return (
    <div className="relative">
      <div className="max-h-[calc(100vh-100px)] overflow-y-scroll lg:overflow-y-visible">
        <Swiper
          ref={swiperRef}
          slidesPerView={1}
          onSlideChange={onSlideChange}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
        >
          <SwiperSlide>
            <div className="my-[3%] flex flex-col-reverse items-center justify-center gap-5 lg:mx-10 lg:flex-row lg:gap-[100px]">
              <div className="lg:max-w-[50%]">
                <p className="flex flex-col gap-4 text-justify font-inter text-mobile leading-[24px] text-[#563700] lg:max-w-[420px] lg:text-small">
                  <span>
                    Chiến dịch <b>Kỳ Án “S” - Tương lai cột sống GenZ</b> hân
                    hạnh được đồng hành cùng <b>Thương hiệu DERMA ANGEL</b>{' '}
                    trong hành trình lan toả thông điệp tích cực về việc nâng
                    cao nhận thức bảo vệ cột sống đối với người trẻ. Làn da cũng
                    nhạy cảm như cảm xúc, cần được bảo vệ khỏi những ảnh hưởng
                    xấu trong giai đoạn yếu ớt nhất, và <b>DERMA ANGEL</b> ở đây
                    để trở thành thiên thần hộ mệnh dành cho mọi làn da.
                  </span>
                  <span>
                    <b>DERMA ANGEL</b> kết hợp nghiên cứu chuyên sâu với các bác
                    sĩ và chuyên gia đầu ngành về da liễu, mang đến các sản phẩm
                    hỗ trợ điều trị mụn trứng cá hiệu quả, nhanh chóng & dịu nhẹ
                    nhất cho da.
                  </span>
                  <span>
                    Miếng dán mụn <b>DERMA ANGEL</b> hiện đang là miếng dán trị
                    mụn SỐ 1 tại các thị trường lớn như: Trung Quốc, Thái Lan,
                    Singapore và Philippines,…
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-1 lg:max-w-[50%]">
                <h1 className="font-inter text-[22px] font-bold text-[#563700]">
                  Nhà tài trợ Kim cương
                </h1>
                <div className="max-w-[140px] md:-left-[10%] md:max-w-[363px]">
                  <img
                    alt="dermaAngel_logo"
                    src={'/assets/images/partner_dermaAngel.webp'}
                  />
                </div>
                <Masonry
                  alt={dermaAngelPreviewImages1.alt}
                  mainImages={dermaAngelPreviewImages1.mainImages}
                  images={dermaAngelPreviewImages1.images}
                />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="my-[3%] flex flex-col-reverse items-center justify-center gap-5 lg:mx-10 lg:flex-row-reverse lg:gap-[100px]">
              <div className="lg:max-w-[50%]">
                <p className="flex max-w-[420px] flex-col gap-4 text-justify font-inter text-mobile leading-[24px] text-[#563700] lg:text-small">
                  <span>
                    Thương hiệu <b>DERMA ANGEL</b> là một trong những hãng
                    chuyên về các dòng chăm sóc da mụn giúp giải quyết nỗi lo
                    lắng trong thời buổi công nghệ nhiều bụi bẩn, vi khuẩn như
                    hiện nay. Đây là một trong những thương hiệu nổi tiếng được
                    nhiều chị em săn đón những năm gần đây.
                  </span>
                  <span>
                    Không chỉ có tác dụng ngăn mụn, giảm mụn mà các sản phẩm của
                    hãng còn được quan tâm bởi hình ảnh thương đáng yêu, năng
                    động & tràn đầy sức sống. Giá thành hợp túi tiền nhiều đối
                    tượng từ học sinh đến nhân viên văn phòng cũng là điều kiến
                    DERMA ANGEL dễ dàng “ghi điểm” trong lòng người tiêu dùng.
                  </span>
                </p>
              </div>
              <div className="flex flex-col gap-2 lg:max-w-[50%]">
                <h1 className="font-inter text-[22px] font-bold text-[#563700]">
                  Nhà tài trợ Kim cương
                </h1>
                <div className="max-w-[140px] md:-left-[10%] md:max-w-[363px]">
                  <img
                    alt="dermaAngel_logo"
                    src={'/assets/images/partner_dermaAngel.webp'}
                  />
                </div>
                <Masonry
                  alt={dermaAngelPreviewImages2.alt}
                  mainImages={dermaAngelPreviewImages2.mainImages}
                  images={dermaAngelPreviewImages2.images}
                />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
      <button
        onClick={clickBack}
        className={cn(
          'absolute top-1/2 z-[10] flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-red-primary md:h-11 md:w-11',
          current === 0 && 'cursor-default bg-gray-500 hover:opacity-100',
        )}
      >
        <img className="h-3 w-3 rotate-180 md:h-5 md:w-5" src={ArrowIcon} />
      </button>
      <button
        onClick={clickNext}
        className={cn(
          'absolute right-0 top-1/2 z-[10] flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-red-primary md:h-11 md:w-11',
          current === lastIndex &&
            'cursor-default bg-gray-500 hover:opacity-100',
        )}
      >
        <img className="h-3 w-3 md:h-5 md:w-5" src={ArrowIcon} />
      </button>
    </div>
  );
}

export default DermaAngelContent;
