import Footer from '@/sections/footer';
import Header from '@/sections/header';
import SectionOne from '@/sections/section_1';
import SectionTwo from '@/sections/section_2';
import SectionThree from '@/sections/section_3';
import SectionFour from '@/sections/section_4';
import '@/styles/App.scss';

function App() {
  return (
    <main>
      <Header />
      <section>
        <SectionOne />
      </section>
      <section>
        <SectionTwo />
      </section>
      <section>
        <SectionThree />
      </section>
      <section>
        <SectionFour />
      </section>
      <Footer />
    </main>
  );
}

export default App;
