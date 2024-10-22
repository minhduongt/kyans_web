import Footer from '@/sections/footer';
import Header from '@/sections/header';
import SectionOne from '@/sections/section_1';
import SectionTwo from '@/sections/section_2';
import SectionThree from '@/sections/section_3';
import SectionFour from '@/sections/section_4';
import CarouselSection from './sections/carousel_section';
import ProductSection from './sections/product_section';
import '@/styles/App.scss';

function App() {
  return (
    <main className="bg-[url('/assets/images/landing_background.jpg')] bg-contain bg-repeat-y">
      <Header />
      <CarouselSection />
      <section id="sectionOne">
        <SectionOne />
      </section>
      <section id="sectionTwo">
        <SectionTwo />
      </section>
      <section id="sectionThree">
        <SectionThree />
      </section>
      <ProductSection />
      <section id="sectionFour">
        <SectionFour />
      </section>
      <Footer />
    </main>
  );
}

export default App;
