import DermaAngelContent from '@/components/section/section_4/DermaAngelContent';
import HuynhHoaContent from '@/components/section/section_4/HuynhHoaContent';
import PartnerWithPreview from '@/components/section/section_4/PartnerWithPreview';
import SnowContent from '@/components/section/section_4/SnowContent';
import PartnerTitle from '@/components/section/section_4/title';
import ZingContent from '@/components/section/section_4/ZingContent';

function SectionFour() {
  return (
    <div className="relative h-[1500px] bg-yellow-light md:h-[2720px]">
      <h1 className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-[45px] bg-red-primary px-8 py-2 font-orenji text-[22px] text-white md:px-[60px] md:py-[20px] md:text-h1">
        Đối tác dự án
      </h1>
      <div
        id="partners"
        className="flex h-full flex-col items-center justify-center gap-10 md:pt-0"
      >
        <div
          id="partner_group_1"
          className="flex w-full flex-col items-center gap-5 md:gap-9"
        >
          <PartnerTitle label={'BAN TỔ CHỨC'} />
          <div className="flex w-full items-center justify-center gap-5 md:gap-10">
            <div className="max-w-[174px] md:max-w-[325px]">
              <img alt="fpt" src="/assets/images/partner_fpt.webp" />
            </div>
            <div className="max-w-[75px] md:max-w-[139px]">
              <img alt="mc" src="/assets/images/partner_mc.webp" />
            </div>
            <div className="max-w-[93px] md:max-w-[175px]">
              <img alt="brand" src="/assets/images/partner_brand.webp" />
            </div>
          </div>
        </div>
        <div
          id="partner_group_2"
          className="flex flex-col items-center gap-5 md:gap-9"
        >
          <PartnerTitle label={'ĐƠN VỊ ĐỒNG HÀNH'} />
          <div className="flex w-full items-center justify-center gap-5 md:gap-10">
            <div className="max-w-[107px] md:max-w-[200px]">
              <img alt="partner_uef" src="/assets/images/partner_uef.webp" />
            </div>
            <div className="max-w-[97px] md:max-w-[180px]">
              <img alt="partner_umt" src="/assets/images/partner_umt.webp" />
            </div>
            <div className="max-w-[85px] md:max-w-[160px]">
              <img
                alt="partner_umttce"
                src="/assets/images/partner_umttce.webp"
              />
            </div>
          </div>
        </div>
        <div
          id="partner_group_3"
          className="flex flex-col items-center gap-5 md:gap-9"
        >
          <PartnerTitle label={'ĐỐI TÁC ÂM NHẠC'} />
          <div className="flex w-full items-center justify-center gap-5 md:gap-10">
            <div className="max-w-[60px] md:max-w-[115px]">
              <img alt="partner_suzu" src="/assets/images/partner_suzu.webp" />
            </div>
          </div>
        </div>
        <div
          id="partner_group_4"
          className="flex flex-col items-center gap-5 md:gap-9"
        >
          <PartnerTitle label={'ĐỐI TÁC SẢN XUẤT'} />
          <div className="flex w-full items-center justify-center gap-5 md:gap-10">
            <div className="max-w-[118px] md:max-w-[220px]">
              <img
                alt="partner_chonka"
                src="/assets/images/partner_chonka.webp"
              />
            </div>
            <div className="max-w-[98px] md:max-w-[180px]">
              <img
                alt="partner_hoabien"
                src="/assets/images/partner_hoabien.webp"
              />
            </div>
          </div>
        </div>
        <div
          id="partner_group_5"
          className="flex flex-col items-center gap-5 md:gap-9"
        >
          <PartnerTitle label={'NHÀ TÀI TRỢ KIM CƯƠNG'} />
          <div className="flex w-full items-center justify-center gap-5 md:gap-10">
            <PartnerWithPreview previewContent={<DermaAngelContent />}>
              <div className="max-w-[162px] md:max-w-[360px]">
                <img
                  alt="partner_dermaAngel"
                  src="/assets/images/partner_dermaAngel.webp"
                />
              </div>
            </PartnerWithPreview>
            <PartnerWithPreview>
              <div className="max-w-[110px] md:max-w-[360px]">
                <img
                  alt="partner_garnier"
                  src="/assets/images/partner_garnier.webp"
                />
              </div>
            </PartnerWithPreview>
          </div>
        </div>
        <div
          id="partner_group_6"
          className="flex flex-col items-center gap-5 md:gap-9"
        >
          <PartnerTitle label={'NHÀ TÀI TRỢ VÀNG'} />
          <div className="flex w-full items-center justify-center gap-7 md:gap-10">
            <PartnerWithPreview>
              <div className="max-w-[62px] md:max-w-[150px]">
                <img
                  alt="partner_ngocbich"
                  src="/assets/images/partner_ngocbich.webp"
                />
              </div>
            </PartnerWithPreview>
            <PartnerWithPreview previewContent={<ZingContent />}>
              <div className="max-w-[66px] md:max-w-[130px]">
                <img
                  alt="partner_zing"
                  src="/assets/images/partner_zing.webp"
                />
              </div>
            </PartnerWithPreview>
            <PartnerWithPreview previewContent={<SnowContent />}>
              <div className="max-w-[64px] md:max-w-[130px]">
                <img
                  alt="partner_snow"
                  src="/assets/images/partner_snow.webp"
                />
              </div>
            </PartnerWithPreview>
            <PartnerWithPreview previewContent={<HuynhHoaContent />}>
              <div className="max-w-[77px] md:max-w-[207px]">
                <img
                  alt="partner_huynhhoav"
                  src="/assets/images/partner_huynhhoa.webp"
                />
              </div>
            </PartnerWithPreview>
          </div>
        </div>
        <div
          id="partner_group_7"
          className="flex flex-col items-center gap-5 md:gap-9"
        >
          <PartnerTitle label={'NHÀ TÀI TRỢ BẠC'} />
          <div className="flex w-full items-center justify-center gap-5 md:gap-10">
            <div className="max-w-[60px] md:max-w-[120px]">
              <img
                alt="partner_agrisung"
                src="/assets/images/partner_agrisung.webp"
              />
            </div>
            <div className="max-w-[89px] md:max-w-[190px]">
              <img
                alt="partner_elisa"
                src="/assets/images/partner_elisa.webp"
              />
            </div>
            <div className="max-w-[64px] md:max-w-[150px]">
              <img
                alt="partner_longthanh"
                src="/assets/images/partner_longthanh.webp"
              />
            </div>
            <div className="max-w-[66px] md:max-w-[150px]">
              <img alt="partner_wil" src="/assets/images/partner_wil.webp" />
            </div>
          </div>
        </div>
        <div
          id="partner_group_8"
          className="flex flex-col items-center gap-5 md:gap-9"
        >
          <PartnerTitle label={'NHÀ TÀI TRỢ ĐỒNG HÀNH'} />
          <div className="flex w-full items-center justify-center gap-7 md:gap-10">
            <div className="max-w-[55px] md:max-w-[100px]">
              <img
                alt="partner_mascotmiennam"
                src="/assets/images/partner_mascotmiennam.webp"
              />
            </div>
            <div className="max-w-[95px] md:max-w-[180px]">
              <img
                alt="partner_debartkery"
                src="/assets/images/partner_debartkery.webp"
              />
            </div>
          </div>
        </div>
        <div
          id="partner_group_9"
          className="flex flex-col items-center gap-5 md:gap-9"
        >
          <PartnerTitle label={'BẢO TRỢ TRUYỀN THÔNG'} />
          <div className="max-w-[350px] md:max-w-[780px]">
            <img
              alt="partner_baotro"
              src="/assets/images/partner_baotro.webp"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionFour;
