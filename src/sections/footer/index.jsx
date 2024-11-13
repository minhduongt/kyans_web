import { motion } from 'framer-motion';
import Contact from '@/components/section/footer/Contact';
import CopyrightInfo from '@/components/section/footer/CopyrightInfo';
import { useMediaQuery } from '@uidotdev/usehooks';

function Footer() {
  const isMobile = useMediaQuery('only screen and (max-width : 768px)');

  return (
    <footer id="lien-he" className="h-[850px] overflow-hidden md:h-[1080px]">
      <div className="relative flex h-full w-full">
        <div
          id="footer_content_section"
          className="w-full self-end md:px-[75px]"
        >
          <motion.div
            initial={
              isMobile
                ? { right: '-60%', bottom: '-15%', transform: 'scale(2)' }
                : {
                    right: '-100px',
                    bottom: '25%',
                    transform: 'scale(2)',
                  }
            }
            whileInView={
              isMobile
                ? {
                    right: '-50%',
                    bottom: '-23%',
                    transform: 'scale(1.0)',
                    transition: {
                      duration: 1,
                      ease: 'easeInOut',
                    },
                  }
                : {
                    right: 0,
                    bottom: '19%',
                    transform: 'scale(1.0)',
                    transition: {
                      duration: 1,
                      ease: 'easeInOut',
                    },
                  }
            }
            viewport={{ once: true }}
            className="absolute bottom-[-23%] right-[-50%] z-[1] w-[600px] md:bottom-[19%] md:right-0"
          >
            <img alt="footer pencil" src="/assets/images/footer_pen.webp" />
          </motion.div>
          <div className="relative flex h-[656px] w-full rounded-t-[50px] bg-gradient-to-b from-red-primary to-orange-primary md:h-[530px] md:rounded-t-[112px]">
            <motion.div
              initial={
                isMobile
                  ? {}
                  : {
                      transform: 'rotateX(90deg)',
                    }
              }
              whileInView={
                isMobile
                  ? {}
                  : {
                      transform: 'rotateX(0)',
                      transition: {
                        duration: 1,
                        ease: 'easeInOut',
                      },
                    }
              }
              viewport={{ once: true }}
              className="absolute top-[-8%] max-w-[120px] md:top-[-10%] md:max-w-[170px]"
            >
              <img alt="footer mascot" src="/assets/images/side_mascot.webp" />
            </motion.div>
            <div className="relative z-[2] flex w-full flex-col justify-between md:self-end md:px-[100px]">
              <Contact />
              <CopyrightInfo />
            </div>
          </div>
        </div>
        <motion.div
          initial={
            isMobile
              ? {
                  left: '-10%',
                  bottom: '40%',
                  transform: 'scale(1.2)',
                }
              : {
                  left: '-100px',
                  bottom: '-30px',
                  transform: 'scale(1.2)',
                }
          }
          whileInView={
            isMobile
              ? {
                  left: '-20%',
                  bottom: '32%',
                  transform: 'scale(1.0)',
                  transition: {
                    duration: 1,
                    ease: 'easeInOut',
                  },
                }
              : {
                  left: 0,
                  bottom: 0,
                  transform: 'scale(1.0)',
                  transition: {
                    duration: 1,
                    ease: 'easeInOut',
                  },
                }
          }
          viewport={{ once: true }}
          className="absolute bottom-[32%] left-[-20%] z-[1] max-w-[350px] md:bottom-0 md:max-w-[450px]"
        >
          <img
            alt="footer magnifying"
            src="/assets/images/footer_magnifying.webp"
          />
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
