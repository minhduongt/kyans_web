import Section3Card from '@/components/section/section3/Card';
import Section3Title from '@/components/section/section3/Section3Title';
import { useMediaQuery } from '@uidotdev/usehooks';
import { motion } from 'framer-motion';

function SectionThree() {
  const isMobile = useMediaQuery('only screen and (max-width : 768px)');

  return (
    <div className="relative mt-[200px] h-[1600px] md:mt-[300px] md:h-[1800px]">
      {isMobile ? (
        <div className="absolute w-full">
          <motion.div
            // initial={{
            //   transform: 'rotateY(90deg)',
            // }}
            // whileInView={{
            //   transform: 'none',
            //   transition: {
            //     duration: 1,
            //     ease: 'easeInOut',
            //   },
            // }}
            // viewport={{ once: true }}
            className="w-full"
          >
            <img
              alt="notebook full"
              src="/assets/images/section3_mbg1.webp"
              className="h-full"
            />
          </motion.div>
          <motion.div
            // initial={{
            //   transform: 'rotateY(90deg)',
            // }}
            // whileInView={{
            //   transform: 'none',
            //   transition: {
            //     duration: 1,
            //     ease: 'easeInOut',
            //   },
            // }}
            // viewport={{ once: true }}
            className="relative -top-[120px] w-full"
          >
            <img
              alt="notebook full"
              src="/assets/images/section3_mbg2.webp"
              className="h-full"
            />
          </motion.div>
        </div>
      ) : (
        <motion.div
          initial={{
            transform: 'rotateY(90deg)',
          }}
          whileInView={{
            transform: 'none',
            transition: {
              duration: 1,
              ease: 'easeInOut',
            },
          }}
          viewport={{ once: true }}
          className="absolute -mt-[2%] h-full w-full"
        >
          <img
            alt="notebook full"
            src="/assets/images/section3_bg.webp"
            className="h-full"
          />
        </motion.div>
      )}
      <motion.div
        initial={
          isMobile
            ? {}
            : {
                opacity: 0,
              }
        }
        whileInView={
          isMobile
            ? {}
            : {
                opacity: 1,
                transition: {
                  duration: 1,
                  delay: 1,
                  ease: 'easeInOut',
                },
              }
        }
        viewport={{ once: true }}
        className="mt-10 flex flex-col pt-[4%] md:m-4 md:flex-row"
      >
        <div className="relative z-10 mt-10 flex w-full flex-col items-center md:mt-0 md:w-[52%]">
          <div className="max-w-[360px] md:max-w-[650px]">
            <img alt="section3 logo" src="/assets/images/section3_logo.webp" />
          </div>
          <div className="relative bottom-8 left-[5%] max-h-[375px] w-full max-w-[850px] scale-[1.1]">
            <img alt="steps" src="/assets/images/section3_steps.png" />
          </div>
        </div>
        <div className="relative z-10 mt-[30px] w-full px-5 md:mt-0 md:w-[48%] md:px-0">
          <div className="relative mt-[10%] rounded-bl-[30px] rounded-tr-[30px] border-[3px] border-solid border-[#AD1C1C5E] bg-[#FFFFFF5C] p-6 md:rounded-bl-[85px] md:rounded-tr-[85px] md:p-10">
            <Section3Title
              label={'Sứ mệnh'}
              className="absolute left-4 top-0 -translate-y-1/2 md:left-10"
            />
            <p className="mx-auto mt-4 max-w-[543px] text-justify font-inter text-smallMobile leading-[15px] md:text-[22px] md:leading-[26.5px]">
              Chiến dịch nhằm nâng cao nhận thức cho nhóm tuổi 18-24 về tầm quan
              trọng của việc phòng ngừa bệnh cột sống, từ đó giảm lo lắng và
              thúc đẩy chăm sóc sức khỏe cột sống một cách chủ động trong cộng
              đồng.
            </p>
          </div>
          <div className="pt-5 md:pt-[56px]">
            <Section3Title
              label={'Giá trị cốt lõi'}
              className={'mb-2 ml-4 md:mb-6 md:ml-10'}
            />
            <div className="flex flex-col gap-3 pt-4">
              <div className="flex w-full justify-evenly gap-[2%]">
                <Section3Card
                  title={'Nhận Thức & Giáo Dục'}
                  label={
                    'Cam kết cung cấp thông tin dễ hiểu, giúp giới trẻ hiểu rõ tầm quan trọng của việc phòng ngừa và chăm sóc sức khỏe cột sống.'
                  }
                />
                <Section3Card
                  titleClassName={'!text-[10px] md:!text-extraSmall'}
                  title={'Chủ động Chăm sóc Sức khỏe'}
                  label={
                    'Khuyến khích thói quen sinh hoạt lành mạnh và các biện pháp phòng ngừa chủ động.'
                  }
                />
              </div>
              <div className="flex w-full justify-evenly gap-[2%]">
                <Section3Card
                  title={'Đổi mới & Sáng tạo'}
                  label={
                    'Đổi mới cách tiếp cận, truyền tải thông tin sáng tạo để thu hút sự quan tâm của giới trẻ.'
                  }
                />
                <Section3Card
                  title={'Kết nối cộng đồng'}
                  label={
                    'Xây dựng cộng đồng đoàn kết qua các hoạt động chia sẻ, học hỏi và hỗ trợ lẫn nhau trong việc bảo vệ sức khỏe cột sống.'
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
      <motion.div
        initial={
          isMobile
            ? { opacity: 0, left: '-45%' }
            : {
                opacity: 0,
                left: '-30%',
              }
        }
        whileInView={
          isMobile
            ? {
                opacity: 1,
                left: '-30%',
                transition: {
                  duration: 1,
                  delay: 0.5,
                  ease: 'easeInOut',
                },
              }
            : {
                opacity: 1,
                left: '-18%',
                transition: {
                  duration: 1,
                  delay: 0.5,
                  ease: 'easeInOut',
                },
              }
        }
        viewport={{ once: true }}
        className="absolute -left-[30%] bottom-[130px] max-w-[300px] md:-left-[18%] md:bottom-0 md:max-w-[861px]"
      >
        <img alt="section3 logo" src="/assets/images/section3_doc.webp" />
      </motion.div>
    </div>
  );
}

export default SectionThree;
