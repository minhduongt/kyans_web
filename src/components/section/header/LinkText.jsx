import { cn, scrollToSectionById } from '@/utils';

function LinkText({ label, id, className }) {
  return (
    <div
      className={cn(
        'hover:bg-blue-primary cursor-pointer rounded-[30px] p-4 hover:text-white',
        className,
      )}
      onClick={() => scrollToSectionById(id)}
    >
      <p className="font-gilroy text-small">{label}</p>
    </div>
  );
}

export default LinkText;
