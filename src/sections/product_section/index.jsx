import { FADE_TRANSITION } from '@/utils/animation';
import ArrowIcon from '../../icons/arrow.svg';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Loading from '@/components/Loading';
import { cn } from '@/utils';
import { useMediaQuery } from '@uidotdev/usehooks';

function Product1() {
  const [videoLoading, setVideoLoading] = useState(true);

  return (
    <>
      <motion.div
        initial={{
          bottom: -25,
          opacity: 0,
        }}
        whileInView={{
          bottom: 0,
          opacity: 1,
          transition: {
            duration: 1,
            ease: 'easeInOut',
          },
        }}
        viewport={{ once: true }}
        className="absolute bottom-0 left-0 max-w-[233px] md:max-w-[668px]"
      >
        <img alt="product_mascot" src={'/assets/images/product_mascot.webp'} />
      </motion.div>
      <div className="mx-10 flex h-full max-w-[910px] flex-col items-center gap-5 pr-0 text-medium md:items-end md:gap-10 md:pr-[130px]">
        <p className="mt-20 text-justify font-inter text-mobile leading-[17px] md:text-[25px] md:leading-8">
          {`Cô Sô - một thám tử thuộc tổ chức THIO `}
          <i>(Hiệp hội Điều tra Sức Khoẻ Xuyên thời gian)</i>
          {` đến từ tương lai để điều tra các nguyên do dẫn đến
            thực trạng nhiều người trẻ Việt Nam đang mắc các bệnh liên quan đến
          cột sống.`}
        </p>
        <p className="text-justify font-inter text-mobile leading-[17px] md:text-[25px] md:leading-8">
          {`Nghe phong thanh đồn đoán, “Cô Sô tới nơi - Hung thủ tới
          số". Liệu vị “trùm cuối" này sẽ đối phó với kẻ chủ mưu và giải cứu
          những nạn nhân mắc bệnh cột sống như thế nào? Mời mọi người cùng theo
          chân Cô Sô trong nhiệm vụ đầu tiên!`}
        </p>
        <motion.div
          className="relative mt-8 h-full max-h-[180px] w-full max-w-[312px] md:mt-0 md:max-h-[355px] md:max-w-[620px]"
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 1,
              delay: 1,
              ease: 'easeInOut',
            },
          }}
          viewport={{ once: true }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-[45px] border-[1px] border-black">
            <iframe
              className="absolute left-0 top-0 z-10 h-full w-full"
              src={
                'https://www.youtube.com/embed/nmSO__aYEQA?si=27d0mszMB4AKm4y-'
              }
              title="Animated Short Film"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              onLoad={() => setVideoLoading(false)}
            />
          </div>
          {videoLoading && (
            <div className="absolute left-0 top-0 z-20 flex h-full w-full items-center justify-center rounded-[45px] bg-gray-800">
              <Loading />
            </div>
          )}
          <h1 className="pt-[3%] text-center font-inter text-mobile font-bold md:text-medium">
            {'Official Animated Short Film'}
          </h1>
        </motion.div>
      </div>
    </>
  );
}

function Product2() {
  const [videoLoading, setVideoLoading] = useState(true);

  return (
    <>
      <motion.div
        initial={{
          bottom: -25,
          opacity: 0,
        }}
        whileInView={{
          bottom: 0,
          opacity: 1,
          transition: {
            duration: 1,
            ease: 'easeInOut',
          },
        }}
        viewport={{ once: true }}
        className="absolute -left-[12%] bottom-0 max-w-[250px] md:left-0 md:max-w-[668px]"
      >
        <img alt="choco_singer" src={'/assets/images/choco_singer.webp'} />
      </motion.div>
      <div className="mx-10 flex h-full max-w-[910px] flex-col items-center gap-10 pr-0 text-medium md:items-end md:pr-[130px]">
        <p className="mt-20 text-justify font-inter text-mobile leading-[17px] md:text-[25px] md:leading-8">
          {`Đối mặt với tình trạng “cột sống bất ổn” đang tấn công, bộ đôi Cô Sô và THIO quyết định biến những “tiếng kêu cứu” của cột sống thành lời ca nhắn nhủ đậm chất GenZ. Với giai điệu hài hước của bài hát gốc “Chưa Có Wow,” Bài Ca Cột Sống được Ca sĩ Choco Trúc Phương góp giọng sẽ không chỉ mang đến cảm giác gần gũi qua giai điệu, mà còn chạm đến những insight cột sống ”éc ô éc” của người trẻ ngày nay!`}
        </p>
        <motion.div
          className="relative mt-8 h-full max-h-[180px] w-full max-w-[310px] md:max-h-[355px] md:max-w-[620px]"
          initial={{
            opacity: 0,
            scale: 0.5,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            transition: {
              duration: 1,
              delay: 1,
              ease: 'easeInOut',
            },
          }}
          viewport={{ once: true }}
        >
          <div className="relative h-full w-full overflow-hidden rounded-[45px] border-[1px] border-black">
            <iframe
              className="absolute left-0 top-0 z-10 h-full w-full"
              src={
                'https://www.youtube.com/embed/e5zvcECAlew?si=0ok1EP5cx4SsbGhI'
              }
              title="Animated Short Film"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              onLoad={() => setVideoLoading(false)}
            />
          </div>
          {videoLoading && (
            <div className="absolute left-0 top-0 z-20 flex h-full w-full items-center justify-center rounded-[45px] bg-gray-800">
              <Loading />
            </div>
          )}
          <h1 className="pt-[3%] text-center font-inter text-mobile font-bold md:text-medium">
            {'Official Motion Music Video'}
          </h1>
        </motion.div>
      </div>
    </>
  );
}

function Product3() {
  return (
    <div className="absolute bottom-0 left-1/2 flex w-full -translate-x-1/2 flex-col items-center gap-10">
      <p className="mb-[100px] max-w-[318px] text-center font-orenji text-[45px] text-red-primary md:mb-0 md:max-w-full md:whitespace-nowrap md:text-justify md:text-h1">
        Bạn hãy quay lại sau nhé!
      </p>
      <div className="relative max-w-[430px] md:max-w-[668px]">
        <img
          alt="confused_mascot"
          src={'/assets/images/confused_mascot.webp'}
        />
      </div>
    </div>
  );
}
const PRODUCTS = [
  {
    id: 1,
    label: 'Animated Short Film',
    name: 'Khai mở Kỳ án “S"',
    content: <Product1 />,
  },
  {
    id: 2,
    label: 'Official Animated Motion MV',
    name: 'Bài ca cột sống',
    content: <Product2 />,
  },
  {
    id: 3,
    label: 'Ôi, tiếc quá!',
    name: 'Hoạt động chưa diễn ra',
    content: <Product3 />,
  },
];

function ProductSection() {
  const isMobile = useMediaQuery('only screen and (max-width : 768px)');
  const [loading, setLoading] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(0);

  const handleChangeProduct = (num) => {
    const newValue = currentProduct + num;
    const isValid = newValue > -1 && newValue <= PRODUCTS.length - 1;

    if (isValid) {
      setLoading(true);
      setTimeout(() => {
        setCurrentProduct((prev) => prev + num);
        setLoading(false);
      }, 750);
    }
  };

  return (
    <div className="mb-[200px] md:mb-[400px]">
      <div className="mb:pb-0 flex w-full items-center bg-red-primary pb-2 pt-6 md:flex-row">
        <motion.div
          className="absolute h-[110px] -translate-x-4 -translate-y-[20px] md:h-[220px] md:-translate-y-[30px]"
          initial={{
            left: '-50px',
          }}
          whileInView={{
            left: 0,
            transition: {
              duration: 1,
              ease: 'easeInOut',
            },
          }}
          viewport={{ once: true }}
        >
          <img
            alt="mascot"
            src="/assets/images/side_mascot.webp"
            className="h-full"
          />
        </motion.div>
        <motion.div
          initial={{
            left: 0,
          }}
          whileInView={
            isMobile
              ? {
                  left: '90px',
                  transition: {
                    duration: 1,
                    ease: 'easeInOut',
                  },
                }
              : {
                  left: '200px',
                  transition: {
                    duration: 1,
                    ease: 'easeInOut',
                  },
                }
          }
          viewport={{ once: true }}
          className="relative left-[90px] text-white md:left-[200px]"
        >
          <p className="text-mobile font-bold leading-[17px] md:text-title">
            {PRODUCTS[currentProduct].label}
          </p>
          <h1 className="font-orenji text-medium md:text-h1">
            {PRODUCTS[currentProduct].name}
          </h1>
        </motion.div>
      </div>

      <div className="relative flex h-[770px] justify-end bg-yellow-light md:h-[880px]">
        <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-between px-2 md:px-4">
          <button
            onClick={() => handleChangeProduct(-1)}
            className={cn(
              'flex h-8 w-8 items-center justify-center rounded-full bg-red-primary md:h-16 md:w-16',
              currentProduct === 0 &&
                'cursor-default bg-gray-500 hover:opacity-100',
            )}
          >
            <img className="h-4 w-4 rotate-180 md:h-6 md:w-6" src={ArrowIcon} />
          </button>
          <button
            onClick={() => handleChangeProduct(1)}
            className={cn(
              'flex h-8 w-8 items-center justify-center rounded-full bg-red-primary md:h-16 md:w-16',
              currentProduct === PRODUCTS.length - 1 &&
                'cursor-default bg-gray-500 hover:opacity-100',
            )}
          >
            <img className="h-4 w-4 md:h-6 md:w-6" src={ArrowIcon} />
          </button>
        </div>

        <motion.div
          variants={isMobile ? {} : FADE_TRANSITION}
          animate={loading ? 'initial' : 'loading'}
        >
          {PRODUCTS[currentProduct].content}
        </motion.div>
      </div>
    </div>
  );
}

export default ProductSection;
