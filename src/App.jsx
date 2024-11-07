import Footer from '@/sections/footer';
import Header from '@/sections/header';
import SectionOne from '@/sections/section_1';
import SectionTwo from '@/sections/section_2';
import SectionThree from '@/sections/section_3';
import SectionFour from '@/sections/section_4';
import CarouselSection from './sections/carousel_section';
import ProductSection from './sections/product_section';
import ScrollToTopButton from '@/components/ScrollToTopButton';
import '@/styles/App.scss';
import '@/styles/fonts.scss';

function App() {
  return (
    <main className="bg-[url('/assets/images/landing_background.webp')] bg-contain bg-repeat-y">
      <ScrollToTopButton />
      <Header />
      <CarouselSection />
      <section id="thuc-trang-cot-song">
        <SectionOne />
      </section>
      <section id="tong-quan-chien-dich">
        <SectionTwo />
      </section>
      <section id="hoat-dong-chi-tiet">
        <SectionThree />
      </section>
      <ProductSection />
      <section id="doi-tac">
        <SectionFour />
      </section>
      <Footer />
    </main>
  );
}

export default App;
