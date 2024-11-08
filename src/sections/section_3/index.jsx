import Section3Card from '@/components/section/section3/Card';
import Section3Title from '@/components/section/section3/Section3Title';
import { motion } from 'framer-motion';

function SectionThree() {
  return (
    <div className="relative mt-[300px] flex h-[1800px]">
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
      <div className="relative z-10 m-8 w-1/2">
        <div className="max-h-[650px] max-w-[650px]">
          <img alt="section3 logo" src="/assets/images/section3_logo.webp" />
        </div>
        <div className="relative bottom-8 max-h-[375px] max-w-[850px] scale-[1.1]">
          <img alt="steps" src="/assets/images/section3_steps.webp" />
        </div>
      </div>
      <div className="relative z-10 w-1/2 pt-4">
        <div className="relative mt-[10%] rounded-bl-[85px] rounded-tr-[85px] border-[1px] border-solid border-red-primary p-12">
          <Section3Title
            label={'Sứ mệnh'}
            className="absolute left-10 top-0 -translate-y-1/2"
          />
          <p className="mt-4 text-justify font-inter text-[22px] leading-[26.5px]">
            Chiến dịch nhằm nâng cao nhận thức cho nhóm tuổi 18-24 về tầm quan
            trọng của việc phòng ngừa bệnh cột sống, từ đó giảm lo lắng và thúc
            đẩy chăm sóc sức khỏe cột sống một cách chủ động trong cộng đồng.
          </p>
        </div>
        <div className="pt-[10%]">
          <Section3Title label={'Giá trị cốt lõi'} className={'mb-8 ml-10'} />
          <div className="flex flex-col gap-3">
            <div className="flex w-full gap-3">
              <Section3Card
                title={'Nhận Thức & Giáo Dục'}
                label={
                  'Cam kết cung cấp thông tin dễ hiểu, giúp giới trẻ hiểu rõ tầm quan trọng của việc phòng ngừa và chăm sóc sức khỏe cột sống.'
                }
              />
              <Section3Card
                titleClassName={'!text-extraSmall'}
                title={'Chủ động Chăm sóc Sức khỏe'}
                label={
                  'Khuyến khích thói quen sinh hoạt lành mạnh và các biện pháp phòng ngừa chủ động.'
                }
              />
            </div>
            <div className="flex w-full gap-3">
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
      <div className="absolute -left-[20%] bottom-[8%] m-10 max-h-[782px] max-w-[861px]">
        <img alt="section3 logo" src="/assets/images/section3_doc.webp" />
      </div>
    </div>
  );
}

export default SectionThree;
