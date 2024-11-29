import '@/styles/sections/Header.scss';
import { useMediaQuery } from '@uidotdev/usehooks';
import { motion } from 'framer-motion';
import HeaderContent from './HeaderContent';
import NavigationBar from './NavigationBar';

function Header() {
  const isMobile = useMediaQuery('only screen and (max-width : 768px)');

  return (
    <header id="header" className="relative h-[1300px]">
      <motion.div
        initial={
          isMobile
            ? {}
            : {
                height: 0,
                transition: {
                  duration: 1,
                  ease: 'easeInOut',
                },
              }
        }
        animate={
          isMobile
            ? {}
            : {
                height: '100%',
                transition: {
                  duration: 1,
                  ease: 'easeInOut',
                },
              }
        }
        className="absolute -left-[75%] h-full max-h-[1000px] w-full min-w-[1300px] md:left-0 md:min-w-0"
      >
        <img
          alt="notebook"
          src="/assets/images/header_notebook.webp"
          className="h-full"
        />
      </motion.div>
      <motion.div
        initial={
          isMobile
            ? { left: '-30%' }
            : {
                left: '-20%',
                top: '15%',
              }
        }
        animate={
          isMobile
            ? {
                left: '-15%',
                transition: {
                  duration: 1,
                  delay: 0.3,
                  ease: 'easeInOut',
                },
              }
            : {
                left: 0,
                top: '15%',
                transition: {
                  duration: 1,
                  delay: 0.3,
                  ease: 'easeInOut',
                },
              }
        }
        className="md:left:0 absolute -left-[25%] top-[5%] z-[2] max-w-[150px] md:top-[15%] md:max-w-[300px]"
      >
        <img alt="pencil" src="/assets/images/header_pen.webp" />
      </motion.div>
      <motion.div
        initial={
          isMobile
            ? { right: '-40%' }
            : {
                right: '-25%',
                top: '15%',
              }
        }
        animate={
          isMobile
            ? {
                right: '-20%',
                transition: {
                  duration: 1,
                  delay: 0.3,
                  ease: 'easeInOut',
                },
              }
            : {
                right: 0,
                top: '10%',
                transition: {
                  duration: 1,
                  delay: 0.3,
                  ease: 'easeInOut',
                },
              }
        }
        className="max-w[330px] vmd:right-0 absolute -right-[20%] top-[40%] -rotate-12 md:top-[10%] md:max-w-[850px] md:rotate-0"
      >
        <img
          alt="magnifying glass"
          src="/assets/images/header_magnifying.webp"
        />
      </motion.div>
      <motion.div
        initial={
          isMobile
            ? { left: '-20%', top: '55%' }
            : {
                left: '-25%',
                top: '60%',
              }
        }
        animate={
          isMobile
            ? {
                left: '-5%',
                top: '48%',
                transition: {
                  duration: 1,
                  delay: 0.3,
                  ease: 'easeInOut',
                },
              }
            : {
                left: 0,
                top: '45%',
                transition: {
                  duration: 1,
                  delay: 0.3,
                  ease: 'easeInOut',
                },
              }
        }
        className="absolute -left-[5%] top-[48%] max-w-[300px] md:left-0 md:top-[45%] md:max-w-[450px]"
      >
        <img alt="notebook 2" src="/assets/images/header_notebook2.webp" />
      </motion.div>
      <NavigationBar />
      <HeaderContent />
    </header>
  );
}

export default Header;
