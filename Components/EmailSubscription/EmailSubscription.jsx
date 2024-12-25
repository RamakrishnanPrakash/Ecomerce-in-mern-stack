import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { Searchbox } from "../ProductComponent/FilterComponents/Searchbox";
import { SearchIcon } from "../../assets/Icons/Icons";

export const EmailSubscription = () => {
  const storeContext = useContext(StoreContext);
  return (
    <div
      className="container  min-h-[50vh] mx-auto mt-11 mb-4 rounded-3xl 
    p-2 flex items-center navbar email-container">
      <div className="w-full flex items-center flex-wrap justify-evenly gap-6 p-3">
        <div className=" text-center">
          <img
            src={storeContext.emailImage.image}
            alt={storeContext.emailImage.des}
            className="w-[300px] h-[300px]"
          />
        </div>
        <div>
          <h1 className="text-3xl ml-1 md:text-5xl font-bold text-white mb-1">
            Subscribe to our
          </h1>
          <h1 className="text-xl ml-1 lg:text-4xl font-bold text-white mb-2">
            {" "}
            News letter
          </h1>
          <h6 className="text-lg text-teal-50 mb-1">
            subscribe our news letter and stay updated
          </h6>
          <div className="flex items-center my-2 justify-between bg-teal-50 backdrop-blur-sm p-2 rounded-xl">
            <input
              type="text"
              className="bg-transparent border-0 outline-0 cursor-pointer pl-2 "
              placeholder="abc123@gmail.com"
            />
            <SearchIcon style={"size-6"}></SearchIcon>
          </div>
          <button
            className="  bg-green-300 p-2 px-3 text-lg font-bold rounded-lg duration-100 
          text-center cursor-pointer  my-2">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};
