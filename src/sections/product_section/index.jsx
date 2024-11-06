function ProductSection() {
  return (
    <div className="mb-[400px]">
      <div className="flex bg-red-primary py-[10px]">
        <div className="max-w-[235px]">
          <img alt="mascot" src="/assets/images/side_mascot.webp" />
        </div>
        <div className="text-white">
          <p className="text-title">Animated Short Film</p>
          <h1 className="font-orenji text-h1">Khai mở Kỳ án &quot;S&quot;</h1>
        </div>
      </div>
      <div className="relative flex h-[800px] bg-yellow-light">
        <div className="absolute bottom-0 left-0 max-w-[668px]">
          <img alt="product mascot" src="/assets/images/product_mascot.webp" />
        </div>
        <div className="justify-self-end">
          <p className="max-w-[808px]">
            {`Cô Sô - một thám tử thuộc tổ chức THIO (Hiệp hội Điều tra Sức Khoẻ
            Xuyên thời gian) đến từ tương lai để điều tra các nguyên do dẫn đến
            thực trạng nhiều người trẻ Việt Nam đang mắc các bệnh liên quan đến
            cột sống. Nghe phong thanh đồn đoán, “Cô Sô tới nơi - Hung thủ tới
            số". Liệu vị “trùm cuối" này sẽ đối phó với kẻ chủ mưu và giải cứu
            những nạn nhân mắc bệnh cột sống như thế nào? Mời mọi người cùng theo
            chân Cô Sô trong nhiệm vụ đầu tiên!`}
          </p>
          <div className="h-[355px] w-[620px] rounded-[45px] border-[1px] border-black"></div>
        </div>
      </div>
    </div>
  );
}

export default ProductSection;
