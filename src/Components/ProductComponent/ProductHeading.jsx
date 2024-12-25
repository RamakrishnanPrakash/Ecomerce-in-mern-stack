import { useState } from "react";
import { LeftArrowIcon } from "../../assets/Icons/Icons";

export const ProductHeading = () => {
  const [sortBtn, setSortBtn] = useState(false);
  const [sortName, setSortName] = useState("Asscenting 1-10");

  const sorted = (bool, data) => {
    setSortName(data);
    setSortBtn(bool);
  };
  return (
    <div className=" w-[95vw] lg:w-[100%]  mx-auto px-3 py-2 border-2 border-neutral-400  rounded-lg flex items-center justify-between">
      <div>
        <h3 className="text-2xl font-bold sour-gummy ml-1">
          All Wedding Mahal
        </h3>
      </div>
      <div className="relative">
        <div
          className="flex gap-1 mr-6 cursor-pointer p-1"
          onClick={() => setSortBtn(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 text-neutral-400">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3 4.5h14.25M3 9h9.75M3 13.5h9.75m4.5-4.5v12m0 0-3.75-3.75M17.25 21 21 17.25"
            />
          </svg>
          <span className="text-neutral-400 ">Sorted by:</span>
          <p>{sortName}</p>
        </div>
        <div
          className={
            sortBtn
              ? "absolute top-6 left-0 bg-white w-full px-2 py-2 z-10"
              : "hidden"
          }>
          <p
            onClick={() => sorted(false, " Assending A-Z")}
            className="p-2 hover:bg-lime-300 text-sm cursor-pointer">
            Assending A-Z{" "}
          </p>
          <p
            onClick={() => sorted(false, " Decenting Z-A")}
            className="p-2 hover:bg-lime-300 text-sm cursor-pointer">
            Decenting Z-A
          </p>
          <p
            onClick={() => sorted(false, "Asscenting 1-10")}
            className="p-2 hover:bg-lime-300 text-sm cursor-pointer">
            Asscenting 1-10
          </p>
          <p
            onClick={() => sorted(false, "Decenting 1-10")}
            className="p-2 hover:bg-lime-300 text-sm cursor-pointer">
            Decenting 1-10
          </p>
        </div>
      </div>
    </div>
  );
};
