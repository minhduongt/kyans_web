function Masonry({ mainImages = [], images = [], alt }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex gap-3">
        <div className="max-w-[140px] md:max-w-[364px]">
          <img alt={`Main Image`} src={mainImages[0]} />
        </div>
        <div className="flex flex-col gap-3">
          {mainImages.slice(1).map((image, key) => (
            <div key={key} className="max-w-[140px] md:max-w-[184px]">
              <img alt={`${alt}_${key}`} src={image} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-wrap gap-3">
        {images.map((image, key) => (
          <div key={key} className="max-w-[140px] md:max-w-[184px]">
            <img alt={`${alt}_${key}`} src={image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Masonry;
