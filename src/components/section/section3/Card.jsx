import { cn } from '@/utils';

function Section3Card({ label, title, className, titleClassName }) {
  return (
    <div
      className={cn(
        'mt-2 flex h-[285px] w-1/2 max-w-[330px] flex-col justify-evenly rounded-[45px] border-[1px] border-red-primary bg-[#FFFFFF5C] px-8 shadow-[0_5px_0_0] shadow-red-primary',
        className,
      )}
    >
      <p
        className={cn(
          'border-b-[1px] border-black text-center font-inter !text-medium font-bold text-red-primary',
          titleClassName,
        )}
      >
        {title}
      </p>
      <p className="text-justify font-inter text-small leading-6">{label}</p>
    </div>
  );
}

export default Section3Card;
