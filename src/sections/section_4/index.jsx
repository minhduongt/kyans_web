import PartnerWithPreview from '@/components/section/section_4/PartnerWithPreview';
import PartnerTitle from '@/components/section/section_4/title';

function SectionFour() {
  return (
    <div className="relative h-[2400px] bg-yellow-light md:h-[2720px]">
      <h1 className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-[45px] bg-red-primary px-[60px] py-[20px] font-orenji text-[22px] text-white md:text-h1">
        Đối tác dự án
      </h1>
      <div
        id="partners"
        className="flex h-full flex-col items-center justify-center gap-10"
      >
        <div id="partner_group_1" className="flex flex-col items-center gap-9">
          <PartnerTitle label={'BAN TỔ CHỨC'} />
          <div className="flex items-center gap-10">
            <div className="max-h-[125px] max-w-[325px]">
              <img alt="fpt" src="/assets/images/partner_fpt.webp" />
            </div>
            <div className="max-h-[139px] max-w-[139px]">
              <img alt="mc" src="/assets/images/partner_mc.webp" />
            </div>
            <div className="max-h-[130px] max-w-[175px]">
              <img alt="brand" src="/assets/images/partner_brand.webp" />
            </div>
          </div>
        </div>
        <div id="partner_group_2" className="flex flex-col items-center gap-9">
          <PartnerTitle label={'ĐƠN VỊ ĐỒNG HÀNH'} />
          <div className="flex items-center gap-10">
            <div className="max-h-[100px] max-w-[200px]">
              <img alt="partner_uef" src="/assets/images/partner_uef.webp" />
            </div>
            <div className="max-h-[50px] max-w-[180px]">
              <img alt="partner_umt" src="/assets/images/partner_umt.webp" />
            </div>
            <div className="max-h-[100px] max-w-[160px]">
              <img
                alt="partner_umttce"
                src="/assets/images/partner_umttce.webp"
              />
            </div>
          </div>
        </div>
        <div id="partner_group_3" className="flex flex-col items-center gap-9">
          <PartnerTitle label={'ĐỐI TÁC ÂM NHẠC'} />
          <div className="max-h-[145px] max-w-[115px]">
            <img alt="partner_suzu" src="/assets/images/partner_suzu.webp" />
          </div>
        </div>
        <div id="partner_group_4" className="flex flex-col items-center gap-9">
          <PartnerTitle label={'ĐỐI TÁC SẢN XUẤT'} />
          <div className="flex items-center gap-10">
            <div className="max-h-[85px] max-w-[220px]">
              <img
                alt="partner_chonka"
                src="/assets/images/partner_chonka.webp"
              />
            </div>
            <div className="max-h-[125px] max-w-[180px]">
              <img
                alt="partner_hoabien"
                src="/assets/images/partner_hoabien.webp"
              />
            </div>
          </div>
        </div>
        <div id="partner_group_5" className="flex flex-col items-center gap-9">
          <PartnerTitle label={'NHÀ TÀI TRỢ KIM CƯƠNG'} />
          <PartnerWithPreview>
            <div className="max-h-[66px] max-w-[360px]">
              <img
                alt="partner_dermaAngel"
                src="/assets/images/partner_dermaAngel.webp"
              />
            </div>
          </PartnerWithPreview>
        </div>
        <div id="partner_group_6" className="flex flex-col items-center gap-9">
          <PartnerTitle label={'NHÀ TÀI TRỢ VÀNG'} />
          <div className="flex items-center gap-10">
            <PartnerWithPreview>
              <div className="max-h-[100px] max-w-[150px]">
                <img
                  alt="partner_ngocbich"
                  src="/assets/images/partner_ngocbich.webp"
                />
              </div>
            </PartnerWithPreview>
            <PartnerWithPreview>
              <div className="max-h-[110px] max-w-[130px]">
                <img
                  alt="partner_zing"
                  src="/assets/images/partner_zing.webp"
                />
              </div>
            </PartnerWithPreview>
            <PartnerWithPreview>
              <div className="max-h-[110px] max-w-[130px]">
                <img
                  alt="partner_snow"
                  src="/assets/images/partner_snow.webp"
                />
              </div>
            </PartnerWithPreview>
          </div>
        </div>
        <div id="partner_group_7" className="flex flex-col items-center gap-9">
          <PartnerTitle label={'NHÀ TÀI TRỢ BẠC'} />
          <div className="flex items-center gap-10">
            <div className="max-h-[135px] max-w-[120px]">
              <img
                alt="partner_agrisung"
                src="/assets/images/partner_agrisung.webp"
              />
            </div>
            <div className="max-h-[130px] max-w-[190px]">
              <img
                alt="partner_elisa"
                src="/assets/images/partner_elisa.webp"
              />
            </div>
          </div>
        </div>
        <div id="partner_group_8" className="flex flex-col items-center gap-9">
          <PartnerTitle label={'NHÀ TÀI TRỢ ĐỒNG HÀNH'} />
          <div className="flex items-center gap-10">
            <div className="max-h-[90px] max-w-[100px]">
              <img
                alt="partner_mascotmiennam"
                src="/assets/images/partner_mascotmiennam.webp"
              />
            </div>
            <div className="max-h-[105px] max-w-[180px]">
              <img
                alt="partner_debartkery"
                src="/assets/images/partner_debartkery.webp"
              />
            </div>
          </div>
        </div>
        <div id="partner_group_9" className="flex flex-col items-center gap-9">
          <PartnerTitle label={'BẢO TRỢ TRUYỀN THÔNG'} />
          <div className="max-h-[235px] max-w-[780px]">
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
