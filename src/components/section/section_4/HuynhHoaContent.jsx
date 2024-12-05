import { cn } from '@/utils';
import Masonry from './Masonry';

const previewImages = {
  alt: 'huynhHoa',
  mainImages: [
    '/assets/images/partners/huynhhoa_1.jpg',
    '/assets/images/partners/huynhhoa_2.jpg',
    '/assets/images/partners/huynhhoa_3.jpg',
  ],
  images: [
    '/assets/images/partners/huynhhoa_4.jpg',
    '/assets/images/partners/huynhhoa_5.jpg',
    '/assets/images/partners/huynhhoa_6.jpg',
    '/assets/images/partners/huynhhoa_7.jpg',
    '/assets/images/partners/huynhhoa_8.jpg',
    '/assets/images/partners/huynhhoa_9.jpg',
  ],
};

function HuynhHoaContent() {
  return (
    <div className="max-h-[calc(100vh-100px)] overflow-y-scroll lg:overflow-y-visible">
      <div className="my-[3%] flex flex-col-reverse items-center justify-center gap-5 lg:mx-10 lg:flex-row lg:gap-[100px]">
        <div className="lg:max-w-[50%]">
          <p className="flex flex-col gap-10 text-justify font-inter text-mobile leading-[24px] text-[#563700] lg:max-w-[410px] lg:text-small">
            <span>
              Với thông điệp về sức khỏe, chiến dịch{' '}
              <b>{'Kỳ Án "S" - Tương Lai Cột Sống GenZ'}</b> hân hạnh được sát
              cánh cùng Bánh Mì Huynh Hoa trong việc cung cấp một chế độ ăn uống
              cân bằng, đầy đủ dưỡng chất, giúp hỗ trợ cơ thể và bảo vệ sức khỏe
              xương khớp, từ đó phòng ngừa các bệnh lý về cột sống cho GenZ.
            </span>
            <span>
              <b>Bánh Mì Huynh Hoa</b>, với hơn 35 năm hình thành và phát triển,
              là một biểu tượng ẩm thực không thể thiếu tại Sài Gòn. Với sự kết
              hợp hoàn hảo giữa pate, bơ và các lớp nhân tươi ngon,{' '}
              <b>bánh Mì Huynh Hoa</b> mang đến một trải nghiệm ẩm thực đa dạng,
              chất lượng & tinh tế có 1-0-2. Đó là lý do vì sao thương hiệu này
              luôn được lòng thực khách và góp phần quan trọng vào thành công
              của chiến dịch. Thưởng thức <b>bánh Mì Huynh Hoa</b> không chỉ là
              thưởng thức hương vị mà còn cảm nhận phong cách sống phóng khoáng,
              sôi động của người Sài Gòn.
            </span>
          </p>
        </div>
        <div className="flex flex-col gap-2 lg:max-w-[50%]">
          <div className="flex items-center gap-3">
            <h1 className="font-inter text-[22px] font-bold text-[#563700]">
              Nhà tài trợ Vàng
            </h1>
            <div className="max-w-[120px] md:-left-[10%] md:max-w-[207px]">
              <img
                alt="huynhhoa_logo"
                src={'/assets/images/partner_huynhhoa.webp'}
              />
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

export default HuynhHoaContent;
