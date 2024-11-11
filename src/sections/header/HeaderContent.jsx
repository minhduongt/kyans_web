import { motion } from 'framer-motion';
import PrimaryButton from '@/components/element/PrimaryButton';
import { scrollToSectionById } from '@/utils';
import { useMediaQuery } from '@uidotdev/usehooks';

function HeaderContent() {
  const isMobile = useMediaQuery('only screen and (max-width : 768px)');
  return (
    <motion.div
      initial={
        isMobile
          ? {}
          : {
              opacity: 0,
            }
      }
      animate={
        isMobile
          ? {
              transition: {
                duration: 1,
                delay: 1,
                ease: 'easeInOut',
              },
            }
          : {
              opacity: 1,
              transition: {
                duration: 1,
                delay: 1,
                ease: 'easeInOut',
              },
            }
      }
      className="relative"
    >
      <div className="mx-auto my-0 flex w-full max-w-[300px] flex-col items-center gap-5 md:max-w-[560px]">
        <img alt="section banner" src="/assets/images/header_logo.webp" />

        <div className="border-t-[1px] border-black pt-2">
          <h1 className="min-w-[350px] text-center text-base leading-4 md:min-w-0 md:text-medium md:leading-7">
            Chiến dịch truyền thông nằm nâng cao nhận thức của người trẻ về bệnh
            cột sống.
          </h1>
        </div>
        <PrimaryButton
          className="mt-2"
          label="Khai phá Kỳ án"
          onClick={() => scrollToSectionById('su-kien')}
        />
      </div>
    </motion.div>
  );
}

export default HeaderContent;
