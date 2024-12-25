import { useContext, useState } from "react";
import "./RangeSlide.css";

import { FillterContext } from "../../../../context/FillterContext";

export const RangeSlide = () => {
  const [minValue, setMinValue] = useState(15000);
  const [maxvalue, setMaxValue] = useState(100000);
  const [actualMinvalue, setActualMinValue] = useState(minValue);
  const [actualMaxvalue, setActualMaxValue] = useState(maxvalue);

  const filterContext = useContext(FillterContext);

  console.log("Min:" + actualMinvalue);

  const maxHandle = (e) => {
    if (e.target.value <= actualMinvalue) {
      setActualMaxValue(actualMaxvalue);
      console.log("max", e.target.value);
      filterContext.setMax(Number(e.target.value));

      return;
    }
    setActualMaxValue(e.target.value);
    console.log("max", e.target.value);
    filterContext.setMax(Number(e.target.value));
  };

  const minHandle = (e) => {
    if (e.target.value >= actualMaxvalue) {
      setActualMinValue(actualMinvalue);
      filterContext.setMin(Number(e.target.value));

      return;
    }
    setActualMinValue(e.target.value);
    filterContext.setMin(Number(e.target.value));
  };
  const getBackgroundSize = () => {
    return {
      backgroundSize:
        Math.floor((actualMinvalue * 100) / maxvalue) - 7 + `% 100%`,
    };
  };
  const getBackgroundSizeMax = () => {
    return {
      backgroundSize:
        Math.floor((actualMaxvalue * 100) / maxvalue) - 7 + `% 100%`,
    };
  };

  return (
    <div className="w-full min-h-[250px] p-1 bg-gray-800 text-white rounded-lg flex items-center justify-center flex-col gap-3">
      <div className="flex items-center  justify-center gap-2 flex-col py-2">
        <h3 className="text-lg border-b-2 border-white my-1">
          Scroll your Comfortable price
        </h3>

        <p className="w-[250px] rounded-lg text-md font-medium p-1 outline-0 border-0 pl-2 text-white cursor-pointer">
          minimum price : ₹ {new Intl.NumberFormat().format(actualMinvalue)}.00
        </p>

        <input
          type="range"
          min={minValue}
          max={maxvalue}
          value={actualMinvalue}
          onChange={(e) => minHandle(e)}
          style={getBackgroundSize()}
          className="w-[250px] my-2"
          id="minSlider"
        />

        <p className="w-[250px] rounded-lg text-md font-medium p-1 outline-0 border-0 pl-2 text-white cursor-pointer">
          maximum price : ₹ {new Intl.NumberFormat().format(actualMaxvalue)}.00
        </p>

        <input
          type="range"
          min={minValue}
          max={maxvalue}
          onChange={(e) => maxHandle(e)}
          value={actualMaxvalue}
          style={getBackgroundSizeMax()}
          className="w-[250px] my-2"
          id="minSlider"
        />
      </div>
    </div>
  );
};
