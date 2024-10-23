import { cn } from '@/utils';

function PrimaryButton({ label, className, ...props }) {
  return (
    <button
      className={cn(
        'max-w-[240px] rounded-2xl bg-red-primary px-[35px] py-[20px] text-white hover:opacity-80',
        className,
      )}
      {...props}
    >
      <p className="text-medium font-semibold">{label || 'Button'}</p>
    </button>
  );
}

export default PrimaryButton;
