import { cn } from '@/utils';
import Masonry from './Masonry';

const previewImages = {
  alt: 'zing',
  mainImages: [
    '/assets/images/partners/zing_1.jpg',
    '/assets/images/partners/zing_2.jpg',
    '/assets/images/partners/zing_3.jpg',
  ],
  images: [
    '/assets/images/partners/zing_4.jpg',
    '/assets/images/partners/zing_5.jpg',
    '/assets/images/partners/zing_6.jpg',
    '/assets/images/partners/zing_7.jpg',
    '/assets/images/partners/zing_8.jpg',
    '/assets/images/partners/zing_9.jpg',
  ],
};

function ZingContent() {
  return (
    <div className="max-h-[calc(100vh-100px)] overflow-y-scroll lg:overflow-y-visible">
      <div className="my-[3%] flex flex-col-reverse items-center justify-center gap-5 lg:mx-10 lg:flex-row lg:gap-[100px]">
        <div className="lg:max-w-[50%]">
          <p className="flex flex-col gap-4 text-justify font-inter text-mobile leading-[24px] text-[#563700] lg:max-w-[440px] lg:text-small">
            <span>
              Chiến dịch <b>{'Kỳ Án "S" - Tương Lai Cột Sống GenZ'}</b> đã cùng
              với <b>Thương hiệu Zing Pilates</b> mang đến cho các bạn trẻ những
              bài tập thể chất chuẩn mực, giúp cải thiện tư thế và sức khỏe cột
              sống một cách toàn diện.
            </span>
            <span>
              <b>Zing Pilates</b> được thành lập bởi{' '}
              <b>
                chị Quyên Đỗ - cựu vận động viên quốc gia Việt Nam với hơn 15
                năm kinh nghiệm
              </b>
              . Sau nhiều năm thực hành và áp dụng phương pháp Pilates Thuần
              Khiết, chị Quyên Đỗ đã kết hợp các động tác nhịp điệu với âm nhạc
              và cardio vào các bài tập truyền thống để tạo nên
              <b> Zing Pilates</b>. Đội ngũ huấn luyện viên của
              <b> Zing Pilates</b> đã trải qua nhiều năm tập luyện và học hỏi từ
              các nước như Úc và Mỹ, đảm bảo mang đến những bài tập hiệu quả và
              an toàn cho học viên.
            </span>
            <span>
              <b>Zing Pilates</b> cam kết cung cấp trải nghiệm đào tạo tốt nhất
              với các cơ sở hiện đại, được chăm chút & trang bị tối tân. Hãy
              theo dõi và sử dụng dịch vụ của <b>Zing Pilates</b> để trải nghiệm
              những bài tập Pilates đỉnh cao và nâng cao sức khỏe cột sống của
              bạn.
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-2 lg:max-w-[50%]">
          <div className="flex items-center gap-3">
            <h1 className="font-inter text-[22px] font-bold text-[#563700]">
              Nhà tài trợ Vàng
            </h1>
            <div className="max-w-[100px] md:-left-[10%] md:max-w-[113px]">
              <img alt="zing_logo" src={'/assets/images/partner_zing.webp'} />
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

export default ZingContent;
