import { useContext } from "react";
import MultiRangeSlider from "./MultiRangeSlide";
import { FillterContext } from "../../../context/FillterContext";

export const PriceFillter = () => {
  const fillterContext = useContext(FillterContext);

  const show = (min, max) => {
    console.log(min, max);
    fillterContext.setMin(min + "");
    fillterContext.setMax(max + "");
  };
  return (
    <div className="bg-gray-800 mt-2 p-2 lg:p-2 rounded-lg text-white">
      <p className="text-center  md:text-md lg:text-lg ml-5">
        Scrooll your price
      </p>
      <div className="flex flex-col gap-2 xl:flex-row xl:items-center xl:gap-1 xl:justify-around mt-3">
        <p className="text-center text-lg bg-green-300 rounded-lg lg:p-2 text-gray-600 font-bold">
          Rp {new Intl.NumberFormat().format(fillterContext.min)}.00
        </p>{" "}
        <p className=" text-center text-lg bg-green-300 rounded-lg lg:p-2 text-gray-600 font-bold">
          Rp {new Intl.NumberFormat().format(fillterContext.max)}.00
        </p>
      </div>
      <div className="bg-gray-800 mt-2 p-5 rounded-lg flex">
        <MultiRangeSlider
          min={10000}
          max={200000}
          onChange={({ min, max }) => show(min, max)}></MultiRangeSlider>
      </div>
    </div>
  );
};
