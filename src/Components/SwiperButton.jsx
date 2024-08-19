const SwiperButton = ({number = 1}) => {
  return (
    <button className="w-full h-[50px] rounded-[42px] bg-baby-light hover:bg-baby-dark transition duration-300 flex gap-4 items-center justify-between py-4 px-2">
      <div className="size-[35px] rounded-full bg-white relative flex justify-center items-center">
        <p className="text-baby-normal font-bold text-2xl absolute">{number}</p>
      </div>
      <p className="text-white font-bold text-2xl pr-2">Bulan</p>
    </button>
  );
};

export default SwiperButton;
