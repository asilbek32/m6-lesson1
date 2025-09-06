import React from "react";
import logo from "./assets/com.png";
import search from "./assets/Search.png";

function Header() {
  return (
    <div>
      <div className="px-[130px] flex  items-center justify-between h-[80px] mb-[50px]">
        <div className="flex gap-6 items-center ">
          <img src={logo} alt="" className="w-[99px]" />
          <div className="flex flex-col gap-1">
            <p className="text-[#A7AED2]">Бесплатный звонок</p>
            <p>8 800 080 5011</p>
          </div>
        </div>
        <div className="flex justify-center gap-1 bg-[#F4F5FA] text-[#A7AED2] rounded-xl py-[14px] w-[300px]">
          <img src={search} alt="" />
          Поиск товаров
        </div>
        <div className="flex  gap-5 items-center">
          <div className="flex flex-col ">
            <p className="text-[#46C578]">ЕЦ-166/4</p>
            <p>Нур-Султан</p>
          </div>
          <div className="border-1 border-solid border-[#C0C2CB] px-[19px] py-[8px] rounded-4xl">
            Войти
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default Header;
