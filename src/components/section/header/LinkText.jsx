import { scrollToSectionById } from '@/utils';

function LinkText({ label, id }) {
  return (
    <div
      className="hover:bg-blue-primary cursor-pointer rounded-[30px] p-4 hover:text-white"
      onClick={() => scrollToSectionById(id)}
    >
      <p className="font-gilroy text-small">{label}</p>
    </div>
  );
}

export default LinkText;
