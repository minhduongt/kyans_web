import Contact from '@/components/section/footer/Contact';
import CopyrightInfo from '@/components/section/footer/CopyrightInfo';

function Footer() {
  return (
    <footer id="lien-he">
      <div className="relative flex h-[1080px] w-full">
        <div id="footer_content_section" className="w-full self-end px-[75px]">
          <div className="absolute bottom-[19%] right-0 z-[1] w-[600px]">
            <img alt="footer pencil" src="/assets/images/footer_pen.webp" />
          </div>
          <div className="relative flex h-[530px] w-full rounded-t-[112px] bg-gradient-to-b from-red-primary to-orange-primary">
            <div className="absolute top-[-10%] w-[170px]">
              <img alt="footer mascot" src="/assets/images/side_mascot.webp" />
            </div>
            <div className="relative z-[2] w-full self-end px-[100px]">
              <Contact />
              <CopyrightInfo />
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 z-[1] w-[450px]">
          <img
            alt="footer magnifying"
            src="/assets/images/footer_magnifying.webp"
          />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
