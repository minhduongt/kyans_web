function Masonry({ mainImages = [], images = [], alt }) {
  return (
    <div className="flex flex-col gap-2 lg:gap-3">
      <div className="flex justify-evenly gap-2 lg:justify-center lg:gap-3">
        <div className="w-full max-w-[240px] sm:max-w-[400px] lg:max-w-[370px]">
          <img alt={`Main Image`} src={mainImages[0]} />
        </div>
        <div className="flex flex-col gap-2 lg:gap-3">
          {mainImages.slice(1).map((image, key) => (
            <div
              key={key}
              className="max-w-full md:max-w-full lg:max-w-[184px]"
            >
              <img alt={`${alt}_${key}`} src={image} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap justify-evenly gap-2 lg:gap-3">
        {images.map((image, key) => (
          <div key={key} className="max-w-[48%] lg:max-w-[184px]">
            <img alt={`${alt}_${key}`} src={image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Masonry;
