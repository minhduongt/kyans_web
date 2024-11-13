import { cn } from '@/utils';
import { useMediaQuery } from '@uidotdev/usehooks';

function CardWithPin({ children, className, isFull = false }) {
  const isMobile = useMediaQuery('only screen and (max-width : 768px)');
  return (
    <div
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
    </div>
  );
}

export default CardWithPin;
