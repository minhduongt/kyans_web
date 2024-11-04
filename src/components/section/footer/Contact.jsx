function Contact() {
  return (
    <div className="relative flex w-full justify-between">
      <img
        alt="white logo"
        src="/assets/images/logo_white.webp"
        className="w-[375px]"
      />
      <div className="mr-[10%] flex max-w-[330px] flex-col gap-4">
        <p className="mb-2 w-fit rounded-md bg-white px-1 text-small font-[500] text-red-primary">
          Thông tin liên hệ
        </p>
        <a href="mailto:kyansunitour@gmail.com">
          <p className="font-spaceGrotesk text-extraSmall text-white">
            Email:kyansunitour@gmail.com
          </p>
        </a>
        <a href="tel:0819541013">
          <p className="font-spaceGrotesk text-extraSmall text-white">
            Phone: 0819-541-013
          </p>
        </a>
        <a href="https://maps.app.goo.gl/3S14UB3hdy3UEzT79">
          <p className="font-spaceGrotesk text-extraSmall text-white">
            Address: Lô E2a-7, Đường D1, Đ. D1, Long Thạnh Mỹ, Thành Phố Thủ
            Đức, Hồ Chí Minh
          </p>
        </a>
      </div>
    </div>
  );
}

export default Contact;
