import PrimaryButton from '@/components/element/PrimaryButton';

function PartnerWithPreview({ children }) {
  return (
    <div className="flex flex-col items-center gap-4">
      {children}
      <PrimaryButton
        className={'max-w-fit whitespace-nowrap px-4 py-2'}
        textClassName={'text-base font-bold'}
        label={'Giới thiệu thương hiệu'}
      />
    </div>
  );
}

export default PartnerWithPreview;
