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
        <p className="font-spaceGrotesk text-extraSmall text-white">
          Email:kyansunitour@gmail.com
        </p>
        <p className="font-spaceGrotesk text-extraSmall text-white">
          Phone: 555-567-8901
        </p>
        <p className="font-spaceGrotesk text-extraSmall text-white">
          Address: 1234 Main St Moonstone City, Stardust State 12345
        </p>
      </div>
    </div>
  );
}

export default Contact;
