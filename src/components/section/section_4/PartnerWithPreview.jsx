import PrimaryButton from '@/components/element/PrimaryButton';

function PartnerWithPreview({ children }) {
  return (
    <div className="flex h-full flex-col items-center justify-between gap-4">
      {children}
      <PrimaryButton
        className={
          'flex w-fit min-w-0 max-w-[200px] justify-center whitespace-nowrap px-4 py-2'
        }
        textClassName={'!text-base w-min font-bold font-inter'}
        label={'Giới thiệu thương hiệu'}
      />
    </div>
  );
}

export default PartnerWithPreview;
