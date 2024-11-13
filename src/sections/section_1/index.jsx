import PrimaryButton from '@/components/element/PrimaryButton';
import '@/styles/sections/Section1.scss';
import { motion } from 'framer-motion';

function SectionOne() {
  return (
    <div className="relative h-[1500px] pb-[200px]">
      <motion.div
        initial={{
          opacity: 0,
          left: '-10%',
          transform: 'scale(2)',
        }}
        whileInView={{
          opacity: 1,
          left: 0,
          transform: 'scale(1)',
          transition: {
            duration: 1,
            ease: 'easeInOut',
          },
        }}
        viewport={{ once: true }}
        className="absolute -top-[1%] left-0 z-[2] hidden max-w-[622px] md:block"
      >
        <img alt="section1_glass" src={'/assets/images/section1_glass.webp'} />
      </motion.div>
      <div className="mt-6 flex justify-center">
        <PrimaryButton
          className={'max-w-fit whitespace-nowrap px-[8%] py-[2%]'}
          onClick={() =>
            window
              .open('https://www.facebook.com/kyansunitour', '_blank')
              .focus()
          }
          label={'Nội dung Truyền thông'}
        />
      </div>
      <div className="flex h-full w-full flex-col justify-center px-[5vw]">
        <div className="flex flex-col items-end gap-[180px] md:gap-[100px]">
          <div className="relative w-full md:w-[95%]">
            <div className="flex min-h-[43px] w-full max-w-[200px] items-center justify-center rounded-t-[30px] bg-red-primary md:max-w-[490px] md:rounded-t-[45px]">
              <h1 className="text-center font-orenji text-small text-white md:text-h2">
                Thực trạng y tế
              </h1>
            </div>
            <div className="flex h-[750px] flex-col gap-14 rounded-b-[45px] rounded-tr-[45px] bg-yellow-light pt-10 md:h-[600px] md:justify-center md:gap-[15%] md:pt-0">
              <motion.div
                initial={{
                  opacity: 0,
                  transform: 'scale(1.2) rotate(15deg)',
                }}
                whileInView={{
                  opacity: 1,

                  transform: 'scale(1)',
                  transition: {
                    duration: 1,
                    ease: 'easeInOut',
                  },
                }}
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center gap-14 md:mx-10 md:flex-row md:gap-0"
              >
                <div className="statistic_paragraph">
                  <p className="h-fit w-fit max-w-[310px] text-justify font-inter text-mobile leading-[17px] md:max-w-[320px] md:text-medium md:leading-[29px]">
                    Mỗi năm, Việt Nam có khoảng
                    <span className="font-bold text-red-secondary">
                      {' 31.000 bệnh nhân '}
                    </span>
                    cần được phẫu thuật điều trị thoái hóa cột sống.
                  </p>
                </div>
                <div className="statistic_paragraph">
                  <p className="h-fit w-fit max-w-[310px] text-justify font-inter text-mobile leading-[17px] md:max-w-[320px] md:p-2 md:text-medium md:leading-[29px]">
                    Vẹo cột sống vô căn ở tuổi vị thành niên thường bắt đầu từ
                    <span className="font-bold text-red-secondary">
                      {' độ tuổi 10-18, chiếm 85% '}
                    </span>
                    các trường hợp cần điều trị.
                  </p>
                </div>
                <div className="statistic_paragraph">
                  <p className="h-fit w-fit max-w-[310px] text-justify font-inter text-mobile leading-[17px] md:max-w-[320px] md:p-2 md:text-medium md:leading-[29px]">
                    Khoảng
                    <span className="font-bold text-red-secondary">
                      {' 35% người dân Việt Nam (hơn 34 triệu dân) '}
                    </span>
                    mắc thoái hóa cột sống, trong đó
                    <span className="font-bold text-red-secondary">
                      {' 30% ở độ tuổi 25-45 (hơn 10 triệu người). '}
                    </span>
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0,
                  transform: 'scale(1.2) rotate(-15deg)',
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
                viewport={{ once: true }}
                className="flex flex-col items-center justify-center gap-14 md:mx-10 md:flex-row md:gap-0"
              >
                <div className="statistic_paragraph">
                  <p className="h-fit w-fit max-w-[310px] text-justify font-inter text-mobile leading-[17px] md:max-w-[320px] md:text-medium md:leading-[29px]">
                    Theo Cục Y tế Dự phòng từ Bộ Y tế, ít nhất
                    <span className="font-bold text-red-secondary">
                      {' 30% người trưởng thành '}
                    </span>{' '}
                    thiếu hoạt động thể chất đủ mức.
                  </p>
                </div>
                <div className="statistic_paragraph">
                  <p className="h-fit w-fit max-w-[310px] text-justify font-inter text-mobile leading-[17px] md:max-w-[320px] md:p-2 md:text-medium md:leading-[29px]">
                    Hầu hết giới trẻ hiện nay ngồi sử dụng điện thoại hoặc máy
                    tính trong
                    <span className="font-bold text-red-secondary">
                      {' tư thế sai, với đầu nghiêng ra khỏi trục cơ thể'}.
                    </span>
                  </p>
                </div>
                <div className="statistic_paragraph">
                  <p className="h-fit w-fit max-w-[310px] text-justify font-inter text-mobile leading-[17px] md:max-w-[320px] md:p-1 md:text-medium md:leading-[29px]">
                    Họ
                    <span className="font-bold text-red-secondary">
                      {' ngần ngại thay đổi thói quen không lành mạnh '}
                    </span>{' '}
                    hoặc chỉ tìm đến bác sĩ khi tình trạng xấu đi và ảnh hưởng
                    đến khả năng vận động.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{
                  opacity: 0.1,
                  right: '-15%',
                }}
                whileInView={{
                  opacity: 1,
                  right: '-8%',
                  transition: {
                    duration: 1,
                    delay: 0.8,
                    ease: 'easeInOut',
                  },
                }}
                viewport={{ once: true }}
                className="absolute -bottom-[20%] -right-[9%] max-w-[365px] -translate-x-[7%] md:-bottom-[7%] md:-right-[8%]"
              >
                <img
                  alt="section1_mascot"
                  src={'/assets/images/section1_mascot.webp'}
                />
              </motion.div>
            </div>
          </div>
          <div className="relative flex h-[120px] w-[85%] flex-col items-center justify-center rounded-r-[45px] bg-yellow-light md:h-[240px] md:w-[95%]">
            <motion.div
              initial={{
                transform: 'scale(0.3) ',
              }}
              whileInView={{
                transform: 'scale(1)',
                transition: {
                  duration: 1,
                  ease: 'easeInOut',
                },
              }}
              viewport={{ once: true }}
              className="absolute -left-[23%] max-w-[140px] -translate-x-[10%] md:-left-[10%] md:max-w-[248px]"
            >
              <img
                alt="confused_mascot"
                src={'/assets/images/section1_shockMascot.webp'}
              />
            </motion.div>
            <div className="pl-[10%]">
              <motion.h1
                initial={{
                  opacity: 0,
                  transform: 'scale(3) ',
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
                viewport={{ once: true }}
                className="relative font-orenji text-[18px] text-red-primary md:right-[110px] md:text-[50px]"
              >
                Đặc biệt hơn...
              </motion.h1>
              <motion.p
                initial={{
                  opacity: 0,
                  transform: 'scale(2) ',
                }}
                whileInView={{
                  opacity: 1,
                  transform: 'scale(1)',
                  transition: {
                    duration: 1,
                    delay: 1,
                    ease: 'easeInOut',
                  },
                }}
                viewport={{ once: true }}
                className="max-w-[240px] text-justify text-mobile leading-[17px] md:max-w-[750px] md:text-[32px] md:leading-[38px]"
              >
                Nhiều người từ chối phẫu thuật chủ yếu vì
                <span className="font-bold text-red-primary">
                  {' lo ngại biến chứng '}
                </span>
                sau này, như
                <span className="font-bold text-red-secondary">
                  {' yếu cơ, tê liệt'}
                </span>
                .
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
