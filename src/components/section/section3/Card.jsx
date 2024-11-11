import { cn } from '@/utils';

function Section3Card({ label, title, className, titleClassName }) {
  return (
    <div
      className={cn(
        'mt-2 flex aspect-[7/6] w-1/2 flex-col justify-evenly rounded-[45px] border-[1px] border-red-primary bg-[#FFFFFF5C] px-9 shadow-[0_5px_0_0] shadow-red-primary',
        className,
      )}
    >
      <p
        className={cn(
          'border-b-[1px] border-black text-center font-inter !text-[13px] font-bold text-red-primary md:!text-medium',
          titleClassName,
        )}
      >
        {title}
      </p>
      <p className="text-smallMobile mx-auto max-w-[255px] text-justify font-inter leading-6 md:text-small">
        {label}
      </p>
    </div>
  );
}

export default Section3Card;
