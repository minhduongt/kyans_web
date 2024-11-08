import { motion } from 'framer-motion';
import PrimaryButton from '@/components/element/PrimaryButton';
import { scrollToSectionById } from '@/utils';

function HeaderContent() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: {
          duration: 1,
          delay: 1,
          ease: 'easeInOut',
        },
      }}
      className="relative"
    >
      <div className="mx-auto my-0 flex w-[560px] flex-col items-center gap-5">
        <img alt="section banner" src="/assets/images/header_logo.webp" />
        <div className="border-t-[1px] border-black pt-2">
          <h1 className="text-center text-medium">
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
