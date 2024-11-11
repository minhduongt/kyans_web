function SectionTwo() {
  return (
    <div className="relative flex h-[1125px] flex-col bg-[rgba(255,255,255,0.45)]">
      <h1 className="absolute top-0 ml-[2%] h-fit w-fit -translate-y-1/2 rounded-[45px] bg-red-primary px-8 py-4 font-orenji text-extraSmall text-white md:text-h2">
        Thực trạng truyền thông
      </h1>
      <div className="flex h-full w-full items-center justify-center gap-6 pt-[80px]">
        <div className="relative flex h-full max-h-[540px] w-full max-w-[430px] items-center justify-center bg-[url('/assets/images/section2_pin.webp')]">
          <p className="p-9 text-justify font-inter text-mobile leading-[32px] md:text-[27px]">
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
        </div>
        <div className="relative top-[80px] flex h-full max-h-[540px] w-full max-w-[430px] items-center justify-center bg-[url('/assets/images/section2_pin.webp')]">
          <p className="p-6 text-justify font-inter text-mobile leading-[32px] md:text-[27px]">
            Trong hơn 4.000 cuộc thảo luận, nhóm Gen Z thường sử dụng
            <span className="font-bold text-red-primary">
              {` thuật ngữ
            "cột sống" thay thế cho "cuộc sống"`}
            </span>
            , thể hiện những khía cạnh khiến họ cảm thấy bất ổn.
          </p>
        </div>
        <div className="relative flex h-full max-h-[540px] w-full max-w-[430px] items-center justify-center bg-[url('/assets/images/section2_pin.webp')]">
          <p className="p-9 text-justify font-inter text-mobile leading-[32px] md:text-[27px]">
            {`Áp lực từ tiền bạc, tình yêu và công việc là những chủ đề chiếm 73%
            nội dung về cảm giác căng thẳng và "quá tải" của Gen Z.`}
            <span className="font-bold text-red-primary">
              {' Đau lưng thực tế chỉ chiếm 9% các cuộc thảo luận.'}
            </span>
          </p>
        </div>
      </div>
      <div className="relative right-[5%] mx-auto mt-[200px] flex h-full max-h-[345px] w-fit flex-col items-center justify-center rounded-t-[45px] bg-yellow-light pl-[12%] pr-[15%]">
        <div className="max-w-[650px]">
          <h1 className="font-orenji text-small text-red-primary md:text-[50px]">
            Có thể là...
          </h1>
          <p className="text-justify text-extraSmall leading-[43px] md:text-4xl">
            Giới trẻ quan tâm nhiều hơn đến
            <span className="font-bold text-red-secondary">
              {
                ' cách dùng từ lóng hơn là tình trạng sức khỏe cột sống thực sự.'
              }
            </span>
          </p>
        </div>
        <div className="absolute -right-[22%] bottom-0 max-w-[238px] md:max-w-[550px]">
          <img
            alt="section2_mascot"
            src="/assets/images/section2_mascot.webp"
          />
        </div>
      </div>
    </div>
  );
}

export default SectionTwo;
