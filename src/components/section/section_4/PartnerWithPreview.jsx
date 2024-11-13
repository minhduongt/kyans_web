import PrimaryButton from '@/components/element/PrimaryButton';
import { useMediaQuery } from '@uidotdev/usehooks';

function PartnerWithPreview({ children }) {
  const isMobile = useMediaQuery('only screen and (max-width : 768px)');

  return (
    <div className="flex h-full flex-col items-center justify-between gap-4">
      {children}
      <PrimaryButton
        className={
          'flex w-fit min-w-0 max-w-[200px] justify-center whitespace-nowrap px-3 py-1 md:min-w-0 md:px-4 md:py-2'
        }
        textClassName={'text-[9px] md:!text-base w-min font-bold font-inter'}
        label={isMobile ? 'Giới thiệu' : 'Giới thiệu thương hiệu'}
      />
    </div>
  );
}

export default PartnerWithPreview;
