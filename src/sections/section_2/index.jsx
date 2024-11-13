import CardWithPin from '@/components/section/section2/CardWithPin';
import { motion } from 'framer-motion';

function SectionTwo() {
  return (
    <div className="relative flex h-[800px] flex-col bg-[rgba(255,255,255,0.45)] md:h-[1125px]">
      <h1 className="absolute left-1/2 top-0 h-fit w-fit -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-[45px] bg-red-primary px-8 py-4 font-orenji text-extraSmall text-white md:left-0 md:ml-[2%] md:translate-x-0 md:text-h2">
        Thực trạng truyền thông
      </h1>
      <div className="flex h-full w-full flex-col justify-center pt-10 md:flex-row md:items-center md:gap-6 md:pt-[100px]">
        <CardWithPin className={'-left-2 md:left-0'}>
          <p className="relative z-[2] max-w-[165px] pt-8 text-justify font-inter text-mobile leading-[17px] md:max-w-full md:p-9 md:pt-0 md:text-[27px] md:leading-[32px]">
            Trong
            <span className="font-bold text-red-primary">
              {' 330.000 cuộc thảo luận '}
            </span>
            về các bệnh văn phòng trên mạng xã hội, đau lưng, đau thắt lưng và
            các
            <span className="font-bold text-red-primary">
              {' vấn đề về cột sống xếp hạng 6 với 20.203 cuộc thảo luận.'}
            </span>
          </p>
        </CardWithPin>
        <CardWithPin
          no={1}
          className="-top-[70px] left-[42%] md:left-0 md:top-[80px]"
        >
          <p className="relative z-[2] max-w-[148px] pt-8 text-justify font-inter text-mobile leading-[17px] md:max-w-full md:p-6 md:pt-0 md:text-[27px] md:leading-[32px]">
            Trong hơn 4.000 cuộc thảo luận, nhóm Gen Z thường sử dụng
            <span className="font-bold text-red-primary">
              {` thuật ngữ
            "cột sống" thay thế cho "cuộc sống"`}
            </span>
            , thể hiện những khía cạnh khiến họ cảm thấy bất ổn.
          </p>
        </CardWithPin>
        <CardWithPin
          no={2}
          isFull
          className={'-top-[115px] md:left-0 md:top-0'}
        >
          <p className="relative z-[2] max-w-[182px] p-1 pt-8 text-justify font-inter text-mobile leading-[19px] md:max-w-full md:p-9 md:pt-0 md:text-[27px] md:leading-[32px]">
            {`Áp lực từ tiền bạc, tình yêu và công việc là những chủ đề chiếm 73%
            nội dung về cảm giác căng thẳng và "quá tải" của Gen Z.`}
            <span className="font-bold text-red-primary">
              {' Đau lưng thực tế chỉ chiếm 9% các cuộc thảo luận.'}
            </span>
          </p>
        </CardWithPin>
      </div>
      <div className="md-py-0 relative mx-auto flex h-full max-h-[220px] w-full items-center justify-start rounded-tl-[45px] bg-yellow-light py-4 md:right-[7%] md:mt-[200px] md:max-h-[345px] md:w-fit md:justify-center md:pl-[10%] md:pr-[25%]">
        <div className="ml-[12%] max-w-[650px]">
          <motion.h1
            initial={{
              opacity: 0,
              transform: 'scale(3)',
            }}
            whileInView={{
              opacity: 1,
              transform: 'scale(1)',
              transition: {
                duration: 1,
                delay: 0.5,
                ease: 'easeInOut',
              },
            }}
            // viewport={{ once: true }}
            className="font-orenji text-small leading-[25px] text-red-primary md:text-[50px] md:leading-[62px]"
          >
            Có thể là...
          </motion.h1>
          <motion.p
            initial={{
              opacity: 0,
              transform: 'scale(2)',
            }}
            whileInView={{
              opacity: 1,
              transform: 'scale(1)',
              transition: {
                duration: 1,
                delay: 1.5,
                ease: 'easeInOut',
              },
            }}
            className="max-w-[160px] pt-4 text-justify text-extraSmall leading-[22px] md:max-w-full md:pt-0 md:text-4xl md:leading-[43px]"
          >
            Giới trẻ quan tâm nhiều hơn đến
            <span className="font-bold text-red-secondary">
              {
                ' cách dùng từ lóng hơn là tình trạng sức khỏe cột sống thực sự.'
              }
            </span>
          </motion.p>
        </div>
        <motion.div
          initial={{
            transform: 'translateX(50%)',
          }}
          whileInView={{
            transform: 'translateX(0)',
            transition: {
              duration: 0.5,
              ease: 'easeInOut',
            },
          }}
          className="absolute -right-[8%] bottom-0 max-w-[238px] md:-right-[22%] md:max-w-[550px]"
        >
          <img
            alt="section2_mascot"
            src="/assets/images/section2_mascot.webp"
          />
        </motion.div>
      </div>
    </div>
  );
}

export default SectionTwo;
