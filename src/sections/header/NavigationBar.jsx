import Logo from '@/components/Logo';
import LinkText from '@/components/section/header/LinkText';
import { NAVIGATION_ITEMS } from '@/constants';

function NavigationBar() {
  return (
    <div className="relative flex items-center justify-between gap-5 px-[100px] py-4">
      <Logo />
      <div className="border-b-[1px] border-black py-1 pr-2">
        <div className="relative right-4 flex">
          {NAVIGATION_ITEMS.map((item) => (
            <LinkText key={item.id} id={item.id} label={item.label} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default NavigationBar;
