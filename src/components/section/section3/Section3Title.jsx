import { cn } from '@/utils';

function Section3Title({ label, className }) {
  return (
    <p
      className={cn(
        'h-fit w-fit rounded-[45px] bg-red-primary px-10 py-4 text-justify font-inter text-extraSmall font-bold text-white md:text-[28px]',
        className,
      )}
    >
      {label}
    </p>
  );
}

export default Section3Title;
