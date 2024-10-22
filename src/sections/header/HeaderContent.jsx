import PrimaryButton from '@/components/element/PrimaryButton';
import { scrollToSectionById } from '@/utils';

function HeaderContent() {
  return (
    <div className="relative">
      <div className="mx-auto my-0 flex w-[560px] flex-col items-center gap-5">
        <img src="/assets/images/section_1_logo.png" />
        <div className="border-t-[1px] border-black pt-2">
          <p className="text-medium text-center">
            Chiến dịch truyền thông nằm nâng cao nhận thức của người trẻ về bệnh
            cột sống.
          </p>
        </div>
        <PrimaryButton
          className="mt-2"
          label="Khai phá Kỳ án"
          onClick={() => scrollToSectionById('carouselSection')}
        />
      </div>
    </div>
  );
}

export default HeaderContent;
