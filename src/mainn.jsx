import car from "./assets/car.png";
import pppp from "./assets/pppp.png";
import mmm from "./assets/mmm.png";
import ffff from "./assets/ffff.png";
import ccc from "./assets/ccc.png";
const Mainn = () => {
  return (
    <section className="px-[130px]">
      <div className="grid grid-cols-1 rounded-lg md:grid-cols-3">
        <div className="bg-[#46C578] !p-6 md:col-span-1 rounded-lg">
          <h1 className="text-[#FFFFFF] text-[32px] !py-5">
            Всегда свежие молочные продукты
          </h1>
          <p className="text-[#FFFFFFBF] text-[18px]">
            Только качественные товары, за которыми мы всегда следим
          </p>
          <button className="border text-[18px] text-[#FFFFFF] !px-4 !py-2 !mt-[150px] text-center rounded-lg">
            Подробнее
          </button>
        </div>
        <div className="bg-[#DEDEDE] flex items-center justify-center w-full md:col-span-2 rounded-lg">
          <img src={car} alt="" />
        </div>
      </div>

      <div className="!py-4 gap-3 grid grid-cols-1 md:grid-cols-4">
        <div className="bg-[#FA6A6A] flex flex-col justify-between items-center rounded-lg !p-2">
          <img src={pppp} alt="" />
          <div>
            {" "}
            <h3 className="text-[#FFFFFF] text-[24px] ">Горячие блюда</h3>
            <p className="text-[#FFFFFFBF] text-[18px]">
              Вкуснейшие блюда из 4 ресторанов
            </p>
          </div>
        </div>

        <div className="bg-[#7BB0FF] flex flex-col items-center rounded-lg !p-2">
          <img src={mmm} alt="" />
          <h3 className="text-[#FFFFFF] text-[24px] ">Новинки</h3>
          <p className="text-[#FFFFFFBF] text-[18px]">Новые позиции</p>
        </div>

        <div className="bg-[#8470FF] flex flex-col items-center rounded-lg !p-2">
          <img src={ffff} alt="" />
          <h3 className="text-[#FFFFFF] text-[24px] ">Акции</h3>
          <p className="text-[#FFFFFFBF] text-[18px]">Лучшие цены</p>
        </div>

        <div className="bg-[#FDC352] flex flex-col items-center justify-between rounded-lg !p-2">
          <img className="w-screen" src={ccc} alt="" />
          <div>
            <h3 className="text-[#FFFFFF] text-[24px] ">Комплекты</h3>
            <p className="text-[#FFFFFFBF] text-[18px]">Все в одном</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Mainn;
