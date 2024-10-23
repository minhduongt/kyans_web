import HeaderContent from './HeaderContent';
import NavigationBar from './NavigationBar';
import '@/styles/sections/Header.scss';

function Header() {
  return (
    <header id="header" className="relative h-[1300px]">
      <img
        alt="notebook"
        src="/assets/images/section_1_notebook.webp"
        className="absolute min-w-[1440px]"
      />
      <div className="absolute top-[12%] w-[300px]">
        <img alt="pencil" src="/assets/images/section_1_pen.webp" />
      </div>
      <div className="absolute right-0 top-[10%] w-[850px]">
        <img
          alt="magnifying glass"
          src="/assets/images/section_1_magnifying.webp"
        />
      </div>
      <div className="absolute top-[45%] w-[450px]">
        <img alt="notebook 2" src="/assets/images/section_1_notebook2.webp" />
      </div>
      <NavigationBar />
      <HeaderContent />
    </header>
  );
}

export default Header;
