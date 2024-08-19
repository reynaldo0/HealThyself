const SwiperButton = ({number = 1}) => {
  return (
    <div className="w-full h-[50px] rounded-[42px] bg-baby-light flex gap-4 items-center justify-between py-4 px-2">
      <div className="size-[35px] rounded-full bg-white relative flex justify-center items-center">
        <p className="text-baby-normal font-bold text-2xl absolute">{number}</p>
      </div>
      <p className="text-white font-bold text-2xl pr-2">Bulan</p>
    </div>
  );
};

export default SwiperButton;
