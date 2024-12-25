import { useState } from "react";
import { LeftArrowIcon } from "../../assets/Icons/Icons";

export const YearSelector = ({ option, setSelectedDate, selectedDate }) => {
  // const [optionData, setOptionData] = useState(new Date().getFullYear());
  const [position, setPostion] = useState(false);

  const handleClick = (data, index) => {
    // setOptionData(data);
    setPostion(false);
    setSelectedDate(new Date(data, selectedDate.getMonth(), 1));
  };
  // console.log(option);
  return (
    <div className="w-auto relative text-white ">
      <div className="w-[100px] md:w-[170px]  bg-transparent  rounded-lg shadow-md shadow-gray-700  p-1 h-[30px] flex items-center justify-between border-2 border-white">
        <h1 className=" text-xl font-bold">{selectedDate.getFullYear()}</h1>
        <h1
          className="-rotate-90 cursor-pointer"
          onClick={() => setPostion(!position)}>
          <LeftArrowIcon style={"size-6"} />
        </h1>
      </div>
      <div
        className={
          position
            ? `absolute top-[30px] left-0 z-10  h-[150px] select-webkit
       bg-white shadow-lg shadow-gray-500 text-gray-800 w-full overflow-y-scroll`
            : "hidden"
        }>
        {option.map((data, index) => (
          <p
            className="text-md py-[2px] px-[4px] pl-3
             hover:bg-pink-600 hover:text-white cursor-pointer"
            key={index}
            onClick={() => handleClick(data, index)}>
            {data}
          </p>
        ))}
      </div>
    </div>
  );
};
