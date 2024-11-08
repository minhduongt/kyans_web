import PrimaryButton from '@/components/element/PrimaryButton';
import '@/styles/sections/Section1.scss';

function SectionOne() {
  return (
    <div className="relative h-[1500px] pb-[200px]">
      <div className="absolute -top-[1%] left-0 z-[2] max-w-[622px]">
        <img alt="confused_mascot" src={'/assets/images/section1_glass.webp'} />
      </div>
      <div className="mt-6 flex justify-center">
        <PrimaryButton
          className={'max-w-fit whitespace-nowrap'}
          onClick={() =>
            window
              .open('https://www.facebook.com/kyansunitour', '_blank')
              .focus()
          }
          label={'Nội dung Truyền thông'}
        />
      </div>
      <div className="flex h-full w-full flex-col justify-center px-[5vw]">
        <div className="flex flex-col items-end gap-[100px]">
          <div className="relative w-[95%]">
            <div className="w-full max-w-[490px] rounded-t-[45px] bg-red-primary">
              <h1 className="text-center font-orenji text-h2 text-white">
                Thực trạng y tế
              </h1>
            </div>
            <div className="flex h-[600px] flex-col justify-center gap-[15%] rounded-b-[45px] rounded-tr-[45px] bg-yellow-light">
              <div className="flex items-center justify-center gap-8">
                <div className="statistic_paragraph flex min-h-[186px] items-center pr-8">
                  <p className="h-fit w-fit max-w-[320px] text-justify font-inter text-medium leading-[29px]">
                    Mỗi năm, Việt Nam có khoảng
                    <span className="font-bold text-red-secondary">
                      {' 31.000 bệnh nhân '}
                    </span>
                    cần được phẫu thuật điều trị thoái hóa cột sống.
                  </p>
                </div>
                <div className="statistic_paragraph min-h-[186px] pr-8">
                  <p className="h-fit w-fit max-w-[320px] p-2 text-justify font-inter text-medium leading-[29px]">
                    Vẹo cột sống vô căn ở tuổi vị thành niên thường bắt đầu từ
                    <span className="font-bold text-red-secondary">
                      {' độ tuổi 10-18, chiếm 85% '}
                    </span>
                    các trường hợp cần điều trị.
                  </p>
                </div>
                <div className="statistic_paragraph min-h-[186px] pr-8">
                  <p className="h-fit w-fit max-w-[320px] p-2 text-justify font-inter text-medium leading-[29px]">
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
              </div>
              <div className="flex items-center justify-center gap-8">
                <div className="statistic_paragraph min-h-[186px] pr-8">
                  <p className="h-fit w-fit max-w-[320px] text-justify font-inter text-medium leading-[29px]">
                    Theo Cục Y tế Dự phòng từ Bộ Y tế, ít nhất
                    <span className="font-bold text-red-secondary">
                      {' 30% người trưởng thành '}
                    </span>{' '}
                    thiếu hoạt động thể chất đủ mức.
                  </p>
                </div>
                <div className="statistic_paragraph min-h-[186px] pr-8">
                  <p className="h-fit w-fit max-w-[320px] p-2 text-justify font-inter text-medium leading-[29px]">
                    Hầu hết giới trẻ hiện nay ngồi sử dụng điện thoại hoặc máy
                    tính trong
                    <span className="font-bold text-red-secondary">
                      {' tư thế sai, với đầu nghiêng ra khỏi trục cơ thể'}.
                    </span>
                  </p>
                </div>
                <div className="statistic_paragraph min-h-[186px] pr-8">
                  <p className="h-fit w-fit max-w-[320px] p-1 text-justify font-inter text-medium leading-[29px]">
                    Họ
                    <span className="font-bold text-red-secondary">
                      {' ngần ngại thay đổi thói quen không lành mạnh '}
                    </span>{' '}
                    hoặc chỉ tìm đến bác sĩ khi tình trạng xấu đi và ảnh hưởng
                    đến khả năng vận động.
                  </p>
                </div>
              </div>
              <div className="absolute -bottom-[7%] -right-[7%] max-w-[365px] -translate-x-[7%]">
                <img
                  alt="section1_mascot"
                  src={'/assets/images/section1_mascot.webp'}
                />
              </div>
            </div>
          </div>
          <div className="relative flex h-[240px] w-[95%] flex-col items-center justify-center rounded-r-[45px] bg-yellow-light">
            <div className="absolute -left-[10%] max-w-[248px] -translate-x-[10%]">
              <img
                alt="confused_mascot"
                src={'/assets/images/section1_shockMascot.webp'}
              />
            </div>
            <div className="pl-[10%]">
              <h1 className="relative right-[110px] font-orenji text-[50px] text-red-primary">
                Đặc biệt hơn...
              </h1>
              <p className="max-w-[750px] text-justify text-[32px] leading-[38px]">
                Nhiều người từ chối phẫu thuật chủ yếu vì
                <span className="font-bold text-red-primary">
                  {' lo ngại biến chứng '}
                </span>
                sau này, như
                <span className="font-bold text-red-secondary">
                  {' yếu cơ, tê liệt'}
                </span>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionOne;
