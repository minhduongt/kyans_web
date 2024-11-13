function Contact() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-around pt-4 md:flex-row md:items-start md:justify-between md:pt-0">
      <img
        alt="white logo"
        src="/assets/images/logo_white.webp"
        className="max-w-[224px] md:max-w-[375px]"
      />
      <div className="flex max-w-[330px] flex-col gap-4 md:mr-[10%]">
        <p className="mb-2 w-fit self-center rounded-[45px] bg-white px-6 py-1 font-inter text-mobile font-[500] text-[#C2540E] md:self-auto md:rounded-md md:px-1 md:py-0 md:text-small">
          Thông tin liên hệ
        </p>
        <a href="mailto:kyansunitour@gmail.com">
          <p className="font-inter text-mobile text-white md:text-extraSmall">
            Email: kyansunitour@gmail.com
          </p>
        </a>
        <a href="tel:0819541013">
          <p className="font-inter text-mobile text-white md:text-extraSmall">
            Phone: 0819-541-014
          </p>
        </a>
        <a href="https://maps.app.goo.gl/3S14UB3hdy3UEzT79">
          <p className="flex gap-2 font-inter text-mobile text-white md:text-extraSmall">
            <span>Address: </span>
            <span>
              Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ Đức, Hồ
              Chí Minh
            </span>
          </p>
        </a>
      </div>
    </div>
  );
}

export default Contact;
