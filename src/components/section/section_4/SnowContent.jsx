import { cn } from '@/utils';
import Masonry from './Masonry';

const previewImages = {
  alt: 'snow',
  mainImages: [
    '/assets/images/partners/snow_1.jpg',
    '/assets/images/partners/snow_2.jpg',
    '/assets/images/partners/snow_3.jpg',
  ],
  images: [
    '/assets/images/partners/snow_4.jpg',
    '/assets/images/partners/snow_5.jpg',
    '/assets/images/partners/snow_6.jpg',
    '/assets/images/partners/snow_7.jpg',
    '/assets/images/partners/snow_8.jpg',
    '/assets/images/partners/snow_9.jpg',
  ],
};

function SnowContent() {
  return (
    <div className="max-h-[calc(100vh-100px)] overflow-y-scroll lg:overflow-y-visible">
      <div className="my-[3%] flex flex-col-reverse items-center justify-center gap-5 lg:mx-10 lg:flex-row lg:gap-[100px]">
        <div className="lg:max-w-[50%]">
          <p className="flex flex-col gap-4 text-justify font-inter text-mobile leading-[24px] text-[#563700] lg:max-w-[420px] lg:text-small">
            <span>
              Chiến dịch <b>{'Kỳ Án "S" - Tương Lai Cột Sống GenZ'}</b> đã cùng
              với <b>Thương hiệu Snow Việt Nam</b>. <b>SNOW Việt Nam</b>, với
              các ứng dụng nổi bật như <b>SNOW, B612, Soda, Foodie,</b>... đã
              trở thành công cụ không thể thiếu cho giới trẻ GenZ. Kể từ khi ra
              mắt vào năm 2015, <b>SNOW</b>
              đã thu hút hơn 100 triệu người dùng nhờ vào sự sáng tạo và các
              tính năng độc đáo. Với hàng ngàn hiệu ứng và bộ lọc đa dạng,{' '}
              <b>SNOW</b>
              mang đến cho bạn khả năng chỉnh sửa ảnh/video một cách dễ dàng và
              thú vị, giúp mọi khoảnh khắc trở nên đặc biệt.
            </span>
            <span>
              Với <b>SNOW</b>, mỗi ứng dụng đều mang đến một trải nghiệm chỉnh
              sửa độc đáo, giúp bạn tạo ra những nội dung hấp dẫn và dễ dàng
              chia sẻ. Thế hệ GenZ có thể giao tiếp và chia sẻ những khoảnh khắc
              vui vẻ, độc đáo và ý nghĩa, đồng thời nhắc nhở nhau về tầm quan
              trọng của sức khỏe cột sống. Hãy theo dõi và sử dụng các sản phẩm
              của <b>SNOW</b>
              để tận hưởng những trải nghiệm sáng tạo, thể hiện cá tính và cùng
              nhau xây dựng một tương lai cột sống khỏe mạnh.
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-2 lg:max-w-[50%]">
          <div className="flex items-center gap-3">
            <h1 className="font-inter text-[22px] font-bold text-[#563700]">
              Nhà tài trợ Vàng
            </h1>
            <div className="max-w-[100px] md:-left-[10%] md:max-w-[113px]">
              <img alt="snow_logo" src={'/assets/images/partner_snow.webp'} />
            </div>
          </div>
          <Masonry
            alt={previewImages.alt}
            mainImages={previewImages.mainImages}
            images={previewImages.images}
          />
        </div>
      </div>
    </div>
  );
}

export default SnowContent;
