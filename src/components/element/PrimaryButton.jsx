import { cn } from '@/utils';

function PrimaryButton({ label, className, textClassName, ...props }) {
  return (
    <button
      className={cn(
        'w-fit min-w-[150px] rounded-2xl bg-red-primary px-[15%] py-[5%] text-white hover:opacity-80 md:min-w-[240px]',
        className,
      )}
      {...props}
    >
      <p
        className={cn('text-base font-semibold md:text-medium', textClassName)}
      >
        {label || 'Button'}
      </p>
    </button>
  );
}

export default PrimaryButton;
