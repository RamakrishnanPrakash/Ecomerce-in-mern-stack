import { Filter, Xicon } from "../../assets/Icons/Icons";
import { Searchbox } from "../ProductComponent/FilterComponents/Searchbox";
import { Acfilter } from "./FilterComponents/Acfilter";
import { FoodOption } from "./FilterComponents/FoodOption";
import { RangeSlide } from "./FilterComponents/RangeSlider/RangeSlide";

export const Sidebar = ({ fillterCard, setFillterCard }) => {
  return (
    <div
      className={
        fillterCard
          ? ` fixed  max-h-[100vh] top-[80px]  sm:top-[70px] -left-[500px]   lg:w-[25%] lg:max-h-[95vh] z-10  
    lg:sticky lg:top-0 lg:left-0 md:p-2 bg-white overflow-y-scroll py-4 sideBar duration-1000`
          : ` fixed  max-h-[100vh] top-[80px]  sm:top-[70px] left-0   lg:w-[25%] lg:max-h-[95vh] z-10  
    lg:sticky lg:top-0 lg:left-0 md:p-2 bg-white overflow-y-scroll py-4 sideBar duration-1000 `
      }>
      <div className="w-[370px] h-full  py-5 px-9  sm:w-[400px] md:w-[400px] lg:w-full lg:h-full z-10 lg:p-0 bg-white">
        <div className="container mx-auto  flex justify-between p-2 -my-2 rounded-lg items-center border-2 border-gray-800 ">
          <h2 className="text-lg text-[#000] font-medium   ">Fillter</h2>
          <div>
            <Filter
              style={
                " hidden lg:block lg:size-6 lg:text-gray-700 lg:mr-2 lg:cursor-pointer"
              }></Filter>
            <p onClick={() => setFillterCard(true)}>
              {" "}
              <Xicon
                style={
                  " block size-7 text-pink-700 rounded-full  hover:text-white hover:bg-pink-700  mr-2 cursor-pointer  lg:hidden"
                }></Xicon>
            </p>
          </div>
        </div>
        <div className="w-full h-full flex flex-col gap-2 ">
          <Searchbox></Searchbox>

          <div className="w-full bg-gray-800 p-1 mt-1 rounded-lg text-white">
            <FoodOption></FoodOption>
          </div>
          <Acfilter></Acfilter>
          {/* <PriceFillter></PriceFillter> */}
          <RangeSlide></RangeSlide>
        </div>
      </div>
    </div>
  );
};
