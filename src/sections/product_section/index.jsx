import { LEFT_ENTER } from '@/utils/animation';
import ArrowIcon from '../../icons/arrow.svg';
import { motion } from 'framer-motion';

function ProductSection() {
  return (
    <div className="mb-[400px]">
      <div className="flex items-center bg-red-primary">
        <motion.div
          className="relative max-w-[235px]"
          variants={LEFT_ENTER}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <img alt="mascot" src="/assets/images/side_mascot.webp" />
        </motion.div>
        <motion.div
          variants={LEFT_ENTER}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative text-white"
        >
          <p className="text-title">Animated Short Film</p>
          <h1 className="font-orenji text-h1">Khai mở Kỳ án &quot;S&quot;</h1>
        </motion.div>
      </div>
      <div className="relative flex h-[850px] justify-end bg-yellow-light">
        <div className="absolute left-0 top-0 z-10 flex h-full w-full items-center justify-between px-4">
          <button className="flex h-16 w-16 items-center justify-center rounded-full bg-red-primary">
            <img className="h-6 w-6 rotate-180" src={ArrowIcon} />
          </button>
          <button className="flex h-16 w-16 items-center justify-center rounded-full bg-red-primary">
            <img className="h-6 w-6" src={ArrowIcon} />
          </button>
        </div>
        <motion.div
          initial={{
            bottom: -50,
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
          className="absolute bottom-0 left-0 max-w-[668px]"
        >
          <img alt="product mascot" src="/assets/images/product_mascot.webp" />
        </motion.div>
        <div className="flex max-w-[910px] flex-col items-end gap-10 pr-[130px] text-medium">
          <p className="font-inter mt-10 text-justify leading-8">
            {`Cô Sô - một thám tử thuộc tổ chức THIO`}
            <i>(Hiệp hội Điều tra Sức Khoẻ Xuyên thời gian)</i>
            {` đến từ tương lai để điều tra các nguyên do dẫn đến
            thực trạng nhiều người trẻ Việt Nam đang mắc các bệnh liên quan đến
            cột sống.`}
          </p>
          <p className="font-inter text-justify leading-8">
            {`Nghe phong thanh đồn đoán, “Cô Sô tới nơi - Hung thủ tới
            số". Liệu vị “trùm cuối" này sẽ đối phó với kẻ chủ mưu và giải cứu
            những nạn nhân mắc bệnh cột sống như thế nào? Mời mọi người cùng theo
            chân Cô Sô trong nhiệm vụ đầu tiên!`}
          </p>
          <motion.div
            className="relative mt-8 h-full max-h-[355px] w-full max-w-[620px]"
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
                src="https://www.youtube.com/embed/nmSO__aYEQA?si=27d0mszMB4AKm4y-"
                title="Animated Short Film"
                gesture="media"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>
            <h1 className="font-inter pt-[3%] text-center text-medium font-bold">
              Official Animated Short Film
            </h1>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
