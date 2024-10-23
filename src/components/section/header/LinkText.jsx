import { cn, scrollToSectionById } from '@/utils';

function LinkText({ label, id, className }) {
  return (
    <div
      className={cn(
        'cursor-pointer rounded-[30px] p-4 hover:bg-blue-primary hover:text-white',
        className,
      )}
      onClick={() => scrollToSectionById(id)}
    >
      <p className="font-gilroy text-small">{label}</p>
    </div>
  );
}

export default LinkText;
