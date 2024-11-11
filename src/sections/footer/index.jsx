import { motion } from 'framer-motion';
import Contact from '@/components/section/footer/Contact';
import CopyrightInfo from '@/components/section/footer/CopyrightInfo';
import { useMediaQuery } from '@uidotdev/usehooks';

function Footer() {
  const isMobile = useMediaQuery('only screen and (max-width : 768px)');

  return (
    <footer id="lien-he" className="h-[1080px] overflow-hidden">
      <div className="relative flex h-full w-full">
        <div
          id="footer_content_section"
          className="w-full self-end md:px-[75px]"
        >
          <motion.div
            initial={
              isMobile
                ? {}
                : {
                    right: '-100px',
                    bottom: '25%',
                    transform: 'scale(2)',
                  }
            }
            whileInView={
              isMobile
                ? {}
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
            className="absolute bottom-[19%] right-0 z-[1] w-[600px]"
          >
            <img alt="footer pencil" src="/assets/images/footer_pen.webp" />
          </motion.div>
          <div className="relative flex h-[636px] w-full rounded-t-[50px] bg-gradient-to-b from-red-primary to-orange-primary md:h-[530px] md:rounded-t-[112px]">
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
              className="absolute top-[-10%] w-[170px]"
            >
              <img alt="footer mascot" src="/assets/images/side_mascot.webp" />
            </motion.div>
            <div className="jus relative z-[2] flex w-full flex-col justify-between md:self-end md:px-[100px]">
              <Contact />
              <CopyrightInfo />
            </div>
          </div>
        </div>
        <motion.div
          initial={
            isMobile
              ? {}
              : {
                  left: '-100px',
                  bottom: '-30px',
                  transform: 'scale(1.2)',
                }
          }
          whileInView={
            isMobile
              ? {}
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
          className="absolute bottom-0 z-[1] w-[450px]"
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
