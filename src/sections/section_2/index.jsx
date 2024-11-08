function SectionTwo() {
  return (
    <div className="relative h-[1125px] bg-[rgba(255,255,255,0.45)]">
      <h1 className="absolute top-0 ml-[2%] h-fit w-fit -translate-y-1/2 rounded-[45px] bg-red-primary px-8 py-4 font-orenji text-h2 text-white">
        Thực trạng truyền thông
      </h1>
      <div className="flex h-full max-h-fit w-full items-center justify-center gap-6 pt-[80px]">
        <div className="relative flex h-full max-h-[540px] w-full max-w-[430px] items-center justify-center bg-[url('/assets/images/section2_pin.webp')]">
          <p className="p-9 text-justify text-[27px] leading-[32px]">
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
          <p className="p-6 text-justify text-[27px] leading-[32px]">
            Trong hơn 4.000 cuộc thảo luận, nhóm Gen Z thường sử dụng
            <span className="font-bold text-red-primary">
              {` thuật ngữ
            "cột sống" thay thế cho "cuộc sống"`}
            </span>
            , thể hiện những khía cạnh khiến họ cảm thấy bất ổn.
          </p>
        </div>
        <div className="relative flex h-full max-h-[540px] w-full max-w-[430px] items-center justify-center bg-[url('/assets/images/section2_pin.webp')]">
          <p className="p-9 text-justify text-[27px] leading-[32px]">
            {`Áp lực từ tiền bạc, tình yêu và công việc là những chủ đề chiếm 73%
            nội dung về cảm giác căng thẳng và "quá tải" của Gen Z.`}
            <span className="font-bold text-red-primary">
              {' Đau lưng thực tế chỉ chiếm 9% các cuộc thảo luận.'}
            </span>
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 ml-[55px] flex h-full max-h-[345px] w-full max-w-[1049px] flex-col items-center justify-center rounded-[45px] bg-yellow-light">
        <div className="max-w-[650px]">
          <h1 className="font-orenji text-[50px] text-red-primary">
            Có thể là...
          </h1>
          <p className="text-justify text-4xl leading-[43px]">
            Giới trẻ quan tâm nhiều hơn đến
            <span className="font-bold text-red-primary">
              {
                ' cách dùng từ lóng hơn là tình trạng sức khỏe cột sống thực sự.'
              }
            </span>
          </p>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 max-h-[550px] max-w-[550px]">
        <img alt="partner_hoabien" src="/assets/images/section2_mascot.webp" />
      </div>
    </div>
  );
}

export default SectionTwo;
