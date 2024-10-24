import HeaderContent from './HeaderContent';
import NavigationBar from './NavigationBar';
import '@/styles/sections/Header.scss';

function Header() {
  return (
    <header id="header" className="relative h-[1300px]">
      <div className="absolute h-full w-full">
        <img
          alt="notebook"
          src="/assets/images/header_notebook.webp"
          className="h-full"
        />
      </div>
      <div className="absolute top-[12%] w-[300px]">
        <img alt="pencil" src="/assets/images/header_pen.webp" />
      </div>
      <div className="absolute right-0 top-[10%] w-[850px]">
        <img
          alt="magnifying glass"
          src="/assets/images/header_magnifying.webp"
        />
      </div>
      <div className="absolute top-[45%] w-[450px]">
        <img alt="notebook 2" src="/assets/images/header_notebook2.webp" />
      </div>
      <NavigationBar />
      <HeaderContent />
    </header>
  );
}

export default Header;
