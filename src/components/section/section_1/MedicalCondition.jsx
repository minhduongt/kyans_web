function MedicalCondition() {
  return (
    <div className="l-[125px] h-[633px] w-[1247px]">
      <div className="rounded-t-lg bg-red-600 px-5 py-2 text-center text-xl text-white">
        Thực trạng y tế
      </div>
      <div className="mx-auto mt-5 max-w-[800px] rounded-lg bg-white p-8 shadow-md">
        {/* Hàng đầu tiên */}
        <div className="grid grid-cols-5 items-start">
          {/* Cột 1 */}
          <div className="flex justify-center border-r border-gray-300 pr-2">
            <p className="text-center">
              Mỗi năm, Việt Nam có khoảng{' '}
              <span className="font-bold text-red-600">31.000 bệnh nhân</span>{' '}
              cần được phẫu thuật điều trị thoái hóa cột sống.
            </p>
          </div>

          {/* Thanh chắn dọc giữa cột 1 và cột 2 */}
          <div className="flex items-start justify-center">
            <div className="mx-2 h-full border-l border-gray-300"></div>
          </div>

          {/* Cột 2 */}
          <div className="flex justify-center border-r border-gray-300 pr-2">
            <p className="text-center">
              Vẹo cột sống vô căn ở tuổi vị thành niên thường bắt đầu từ độ tuổi{' '}
              <span className="font-bold text-red-600">10-18</span>, chiếm{' '}
              <span className="font-bold text-red-600">85%</span> các trường hợp
              cần điều trị.
            </p>
          </div>

          {/* Thanh chắn dọc giữa cột 2 và cột 3 */}
          <div className="flex items-start justify-center">
            <div className="mx-2 h-full border-l border-gray-300"></div>
          </div>

          {/* Cột 3 */}
          <div className="flex justify-center">
            <p className="text-center">
              Khoảng{' '}
              <span className="font-bold text-red-600">
                35% người dân Việt Nam
              </span>{' '}
              (hơn 34 triệu dân) mắc thoái hóa cột sống, trong đó{' '}
              <span className="font-bold text-red-600">30%</span> ở độ tuổi
              25-45 (hơn 10 triệu người).
            </p>
          </div>
        </div>

        {/* Hàng thứ hai */}
        <div className="mt-4 grid grid-cols-5 items-start">
          {/* Cột 1 */}
          <div className="flex justify-center border-r border-gray-300 pr-2">
            <p className="mt-4 text-center">
              Theo Cục Y tế Dự phòng từ Bộ Y tế, ít nhất{' '}
              <span className="font-bold text-red-600">
                30% người trưởng thành
              </span>{' '}
              thiếu hoạt động thể chất đủ mức.
            </p>
          </div>

          {/* Thanh chắn dọc giữa cột 1 và cột 2 */}
          <div className="flex items-start justify-center">
            <div className="mx-2 h-full border-l border-gray-300"></div>
          </div>

          {/* Cột 2 */}
          <div className="flex justify-center border-r border-gray-300 pr-2">
            <p className="text-center">
              Hầu hết giới trẻ hiện nay ngồi sử dụng điện thoại hoặc máy tính
              trong tư thế sai, với đầu nghiêng ra khỏi trục cơ thể.
            </p>
          </div>

          {/* Thanh chắn dọc giữa cột 2 và cột 3 */}
          <div className="flex items-start justify-center">
            <div className="mx-2 h-full border-l border-gray-300"></div>
          </div>

          {/* Cột 3 */}
          <div className="flex justify-center">
            <p className="text-center">
              Họ ngần ngại thay đổi thói quen{' '}
              <span className="font-bold text-red-600">không lành mạnh</span>{' '}
              hoặc chỉ tìm đến bác sĩ khi tình trạng xấu đi và ảnh hưởng đến khả
              năng vận động.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicalCondition;
