import { motion } from 'framer-motion';

function SectionThree() {
  return (
    <div className="relative flex h-[1800px]">
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
        className="absolute -mt-[2%] h-full w-full"
      >
        <img alt="notebook full" src="/assets/images/section3_bg.webp" />
      </motion.div>
      <div className="absolute left-0 top-0 m-10 w-1/2">
        <div className="max-h-[650px] max-w-[650px]">
          <img alt="section3 logo" src="/assets/images/section3_logo.webp" />
        </div>
        <div className="relative bottom-8 max-h-[375px] max-w-[850px] scale-[1.1]">
          <img alt="steps" src="/assets/images/section3_steps.webp" />
        </div>
      </div>
      <div className="w-1/2"></div>
      <div className="absolute -left-[20%] bottom-[8%] m-10 max-h-[782px] max-w-[861px]">
        <img alt="section3 logo" src="/assets/images/section3_doc.webp" />
      </div>
    </div>
  );
}

export default SectionThree;
