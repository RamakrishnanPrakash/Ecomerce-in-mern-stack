import { useContext, useState } from "react";
import { FillterContext } from "../../../context/FillterContext";
export const Acfilter = () => {
  const filterContext = useContext(FillterContext);

  console.log(filterContext);

  const changeBtnColor = () => {
    filterContext.setAcBtn(!filterContext.acBtn);
    filterContext.setNonAcBtn(!filterContext.nonAcBtn);
  };
  return (
    <div className="w-full bg-slate-800 p-1 mt-1 rounded-lg text-white">
      <p className="ml-2 text-lg p-1 pr-2 mb-1 text-gray-100 border-b-2  border-gray-50">
        Choose AC or Non-Ac
      </p>
      <div className="w-full flex items-center justify-evenly my-2 p-1 gap-1 ">
        <p
          className={
            filterContext.acBtn
              ? `w-[150px]  bg-pink-600 font-bold rounded-lg text-center py-2 px-1 cursor-pointer`
              : `w-[150px] bg-green-300 text-gray-800 font-bold rounded-lg text-center py-2 px-1 cursor-pointer`
          }
          onClick={() => changeBtnColor()}>
          AC
        </p>
        <p
          className={
            filterContext.nonAcBtn
              ? `w-[150px]  bg-pink-600 font-bold rounded-lg text-center py-2 px-1 cursor-pointer`
              : `w-[150px] bg-green-300 text-gray-800 font-bold rounded-lg text-center py-2 px-1 cursor-pointer`
          }
          onClick={changeBtnColor}>
          Non-AC
        </p>
      </div>
    </div>
  );
};
