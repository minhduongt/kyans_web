import { cn } from '@/utils';
import { useMediaQuery } from '@uidotdev/usehooks';
import { motion } from 'framer-motion';

function CardWithPin({ children, className, isFull = false, no = 0 }) {
  const isMobile = useMediaQuery('only screen and (max-width : 768px)');
  return (
    <motion.div
      initial={{
        opacity: 0,
        transform: 'scale(2)',
      }}
      whileInView={{
        opacity: 1,
        transform: 'scale(1)',
        transition: {
          duration: 1,
          delay: no * 0.5,
          ease: 'easeInOut',
        },
      }}
      viewport={{ once: true }}
      className={cn(
        'relative flex h-full min-h-[228px] w-full max-w-[250px] items-center justify-center md:max-h-[540px] md:min-h-0 md:max-w-[430px]',
        className,
      )}
    >
      <div className="absolute z-[1] max-w-[230px] md:max-w-full">
        {isMobile && !isFull ? (
          <img alt="section2_pin" src="/assets/images/section2_pinfull.webp" />
        ) : (
          <img alt="section2_pin" src="/assets/images/section2_pin.webp" />
        )}
      </div>
      {children}
    </motion.div>
  );
}

export default CardWithPin;
