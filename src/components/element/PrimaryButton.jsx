import { cn } from '@/utils';

function PrimaryButton({ label, className, textClassName, ...props }) {
  return (
    <button
      className={cn(
        'w-fit min-w-[240px] rounded-2xl bg-red-primary px-[35px] py-[20px] text-white hover:opacity-80',
        className,
      )}
      {...props}
    >
      <p className={cn('text-medium font-semibold', textClassName)}>
        {label || 'Button'}
      </p>
    </button>
  );
}

export default PrimaryButton;
