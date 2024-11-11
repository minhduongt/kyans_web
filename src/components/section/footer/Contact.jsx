function Contact() {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-between md:flex-row md:items-start">
      <img
        alt="white logo"
        src="/assets/images/logo_white.webp"
        className="max-w-[224px] md:max-w-[375px]"
      />
      <div className="mr-[10%] flex max-w-[330px] flex-col gap-4">
        <p className="text-mobile mb-2 w-fit rounded-md bg-white px-1 font-[500] text-red-primary md:text-small">
          Thông tin liên hệ
        </p>
        <a href="mailto:kyansunitour@gmail.com">
          <p className="text-mobile font-spaceGrotesk text-white md:text-extraSmall">
            Email: kyansunitour@gmail.com
          </p>
        </a>
        <a href="tel:0819541013">
          <p className="text-mobile font-spaceGrotesk text-white md:text-extraSmall">
            Phone: 0819-541-013
          </p>
        </a>
        <a href="https://maps.app.goo.gl/3S14UB3hdy3UEzT79">
          <p className="text-mobile font-spaceGrotesk text-white md:text-extraSmall">
            Address: Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ
            Đức, Hồ Chí Minh
          </p>
        </a>
      </div>
    </div>
  );
}

export default Contact;
