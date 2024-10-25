import { motion } from 'framer-motion';
import HeaderContent from './HeaderContent';
import NavigationBar from './NavigationBar';
import '@/styles/sections/Header.scss';

function Header() {
  return (
    <header id="header" className="relative h-[1300px]">
      <motion.div
        initial={{
          height: 0,
        }}
        animate={{
          height: '100%',
          transition: {
            duration: 1,
            ease: 'easeInOut',
          },
        }}
        viewport={{ once: true }}
        className="absolute h-full max-h-[1000px] w-full"
      >
        <img
          alt="notebook"
          src="/assets/images/header_notebook.webp"
          className="h-full"
        />
      </motion.div>
      <motion.div
        initial={{
          left: '-20%',
          top: '15%',
        }}
        animate={{
          left: 0,
          top: '12%',
          transition: {
            duration: 1,
            delay: 0.3,
            ease: 'easeInOut',
          },
        }}
        viewport={{ once: true }}
        className="absolute top-[12%] w-[300px]"
      >
        <img alt="pencil" src="/assets/images/header_pen.webp" />
      </motion.div>
      <motion.div
        initial={{
          right: '-25%',
          top: '15%',
        }}
        animate={{
          right: 0,
          top: '10%',
          transition: {
            duration: 1,
            delay: 0.3,
            ease: 'easeInOut',
          },
        }}
        viewport={{ once: true }}
        className="absolute right-0 top-[10%] w-[850px]"
      >
        <img
          alt="magnifying glass"
          src="/assets/images/header_magnifying.webp"
        />
      </motion.div>
      <motion.div
        initial={{
          left: '-25%',
          top: '60%',
        }}
        animate={{
          left: 0,
          top: '45%',
          transition: {
            duration: 1,
            delay: 0.3,
            ease: 'easeInOut',
          },
        }}
        viewport={{ once: true }}
        className="absolute top-[45%] w-[450px]"
      >
        <img alt="notebook 2" src="/assets/images/header_notebook2.webp" />
      </motion.div>
      <NavigationBar />
      <HeaderContent />
    </header>
  );
}

export default Header;
