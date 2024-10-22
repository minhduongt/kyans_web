import Logo from '@/components/Logo';
import { NAVIGATION_ITEMS } from '@/constants';
import { scrollToSectionById } from '@/utils';

function NavigationBar() {
  return (
    <div className="relative flex items-center justify-between gap-5 px-[100px] py-4">
      <Logo />
      <div className="border-b-[1px] border-black py-1 pr-2">
        <div className="relative right-4 flex">
          {NAVIGATION_ITEMS.map((item) => (
            <div
              key={item.id}
              className="hover:bg-blue-primary cursor-pointer rounded-[30px] p-4 hover:text-white"
              onClick={() => scrollToSectionById(item.id)}
            >
              <p className="font-gilroy text-small">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
