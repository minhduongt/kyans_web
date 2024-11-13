import { cn } from '@/utils';

function Section3Title({ label, className }) {
  return (
    <p
      className={cn(
        'h-fit w-fit rounded-[45px] bg-red-primary px-5 py-2 text-justify font-inter !text-extraSmall font-bold text-white md:px-10 md:py-4 md:text-[28px]',
        className,
      )}
    >
      {label}
    </p>
  );
}

export default Section3Title;
