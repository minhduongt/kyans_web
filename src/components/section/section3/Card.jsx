import { cn } from '@/utils';

function Section3Card({ label, title, className, titleClassName }) {
  return (
    <div
      className={cn(
        'flex aspect-[7/6] w-1/2 flex-col justify-evenly rounded-[45px] border-[1px] border-red-primary bg-[#FFFFFF5C] px-4 py-3 shadow-[0_5px_0_0] shadow-red-primary md:mt-2 md:px-9',
        className,
      )}
    >
      <p
        className={cn(
          'whitespace-nowrap border-b-[1px] border-black text-center font-inter !text-[13px] font-bold text-red-primary md:!text-medium',
          titleClassName,
        )}
      >
        {title}
      </p>
      <p className="mx-auto max-w-[133px] text-justify font-inter text-smallMobile leading-[15px] md:max-w-[255px] md:text-small md:leading-6">
        {label}
      </p>
    </div>
  );
}

export default Section3Card;
