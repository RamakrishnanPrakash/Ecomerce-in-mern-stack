import {
  BookIcon,
  MessageIcon,
  OtherInformationIcon,
  PolicyIcon,
} from "../../assets/Icons/Icons";
import { vegImage } from "../../assets/public";
import { ProductCard } from "../ProductComponent/ProductCard";
import { formatCurrency } from "../../pages/js/addCard";

export const Service = ({ particularMahal }) => {
  console.log(particularMahal);
  return (
    <div
      className=" container p-2 shadow-md h-[1600px] sm:h-[1800px] lg:h-[650px]  shadow-gray-800
     rounded-lg  m-3  mx-auto bg-opacity-95 ">
      <div className="flex gap-3 justify-center flex-wrap-reverse lg:flex-nowrap ">
        {particularMahal.map((data, index) => (
          <div className="div px-2 py-3 w-[75%] flex-wrap ">
            <h1 className="text-pink-500 text-2xl mb-2 pl-3 font-bold md:text-left text-center">
              Services offered{" "}
            </h1>{" "}
            <p className="text-md font-bold mb-1 py-2 rounded-lg bg-white shadow-md shadow-gray-700 px-3 text-gray-600 ">
              After booking, communicate any additional expenses to the vendor.
              Only pay the booking or advance amount.
            </p>
            <div className="bg-white rounded-md shadow-md shadow-gray-700">
              {data.foodprice.vegprice > 0 ||
              data.foodprice.veg_and_nonveg > 0 ? (
                <div className="flex justify-between mb-1 px-3  py-1 border-b-2  border-gray-400">
                  <p className="text-md font-bold text-gray-600">
                    Veg Food <a className="text-sm">(per plate)</a>
                  </p>

                  <p className="text-md font-bold text-pink-500">
                    {formatCurrency(data.foodprice.vegprice)}
                  </p>
                </div>
              ) : (
                <></>
              )}
              {data.foodprice.non_veg_price > 0 ||
              data.foodprice.veg_and_nonveg > 0 ? (
                <div className="flex justify-between mb-1 px-3 py-1 border-b-2  border-gray-400">
                  <p className="text-md font-bold text-gray-600">
                    Non Veg Food <a className="text-sm">(per plate)</a>
                  </p>
                  <p className="text-md font-bold text-pink-500">
                    {formatCurrency(data.foodprice.non_veg_price)}
                  </p>
                </div>
              ) : (
                <></>
              )}

              <div className="flex justify-between mb-1 px-3 py-1 border-b-2  border-gray-400">
                <p className="text-md font-bold text-gray-600">
                  Rendal Per Day
                </p>
                <p className="text-md font-bold text-pink-500">
                  {formatCurrency(data.amount)}
                </p>
              </div>
              <div className="flex justify-between mb-1 px-3 py-1 border-b-2  border-gray-400">
                <p className="text-md font-bold text-gray-600">Advance</p>
                <p className="text-md font-bold text-pink-500">
                  {formatCurrency(10000)}
                </p>
              </div>
              <div className="flex justify-between px-[2px] sm:px-3 py-1 ">
                <p className="text-sm sm:text-lg sm:font-bold text-gray-600">
                  Total
                </p>
                <p className="text-sm sm:text-lg sm:font-bold text-pink-500">
                  Food quantity +Other expenses+
                  {formatCurrency(data.amount - 10000)}
                </p>
              </div>
            </div>
          </div>
        ))}

        <div className="div px-2 py-3 w-full lg:w-[25%] flex items-center justify-center">
          <img
            src={vegImage.image}
            alt={vegImage.des}
            className="drop w-[200px] h-[200px]"
          />
        </div>
      </div>

      <div className="my-2 w-full h-[350px] flex items-center gap-3 justify-evenly flex-wrap ">
        <div
          className="bg-white w-full  mb-2 sm:w-[280px] h-[300px] rounded-lg cursor-pointer 
        hover:-translate-y-3 duration-700 shadow-lg shadow-gray-800 flex items-center justify-center gap-3">
          <div className="flex items-center justify-center flex-col gap-3 my-1">
            <h1 className="bg-pink-500 rounded-full  text-center">
              <MessageIcon style={"text-3xl  text-white p-3 px-4  "} />
            </h1>
            <h1 className="text-2xl font-bold text-green-500 space-x-1 ">
              {" "}
              Amenities
            </h1>
            <ul>
              <li className="flex items-center  gap-1 my-1">
                <a className="">
                  <BookIcon style={"size-6 text-pink-500"} />
                </a>
                <a className="text-lg font-bold text-gray-500">
                  2 Rooms available
                </a>
              </li>
              <li className="flex items-center  gap-1 my-1">
                <a className="">
                  <BookIcon style={"size-6 text-pink-500"} />
                </a>
                <a className="text-lg font-bold text-gray-500">2 AC Rooms</a>
              </li>
              <li className="flex items-center  gap-1 my-1">
                <a className="">
                  <BookIcon style={"size-6 text-pink-500"} />
                </a>
                <a className="text-lg font-bold text-gray-500">
                  Electricity Back-up
                </a>
              </li>
              <li className="flex items-center  gap-1 my-1">
                <a className="">
                  <BookIcon style={"size-6 text-pink-500"} />
                </a>
                <a className="text-lg font-bold text-gray-500">
                  Conference Center
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="bg-white w-full mb-2 sm:w-[280px] h-[300px] rounded-lg cursor-pointer
        hover:-translate-y-3 duration-700 shadow-lg shadow-gray-800 flex items-center justify-center">
          <div className="flex items-center justify-center flex-col gap-3">
            <h1 className="bg-pink-500 rounded-full  text-center">
              <PolicyIcon style={"text-3xl  text-white p-3 px-4  "} />
            </h1>
            <h1 className="text-2xl font-bold text-green-500 space-x-1 ">
              {" "}
              Policies
            </h1>
            <ul className="ml-3">
              <li className="flex items-center  gap-1 my-1">
                <a className="">
                  <BookIcon style={"size-6 text-pink-500"} />
                </a>
                <a className="text-lg font-bold text-gray-500">
                  cancellation policy - Depends upon situation
                </a>
              </li>

              <li className="flex items-center  gap-1 my-1">
                <a className="">
                  <BookIcon style={"size-6 text-pink-500"} />
                </a>
                <a className="text-lg font-bold text-gray-500">
                  50% payment on date
                </a>
              </li>
              <li className="flex items-center  gap-1 my-1">
                <a className="">
                  <BookIcon style={"size-6 text-pink-500"} />
                </a>
                <a className="text-lg font-bold text-gray-500">
                  50% payment on booking
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          className="bg-white w-full mb-2 sm:w-[280px] h-[300px] rounded-lg cursor-pointer
         hover:-translate-y-3 duration-700 shadow-lg shadow-gray-800 flex items-center justify-center">
          <div className="flex items-center justify-center flex-col gap-3">
            <h1 className="bg-pink-500 rounded-full  text-center">
              <OtherInformationIcon style={"text-3xl  text-white p-3 px-4  "} />
            </h1>
            <h1 className="text-2xl font-bold text-green-500 space-x-1 ">
              {" "}
              Other Information
            </h1>
            <ul
              className="flex items-start p-1  flex-col
            ">
              <li className="flex items-center gap-1 my-1">
                <a className="">
                  <BookIcon style={"size-6 text-pink-500"} />
                </a>
                <a className="text-lg font-bold text-gray-500">
                  Outside Decorators allowed
                </a>
              </li>

              <li className="flex items-center  gap-1 my-1">
                <a className="">
                  <BookIcon style={"size-6 text-pink-500"} />
                </a>
                <a className="text-lg font-bold text-gray-500">
                  Outside food allowed
                </a>
              </li>
              <li className="flex items-center  gap-1 my-1">
                <a className="">
                  <BookIcon style={"size-6 text-pink-500"} />
                </a>
                <a className="text-lg font-bold text-gray-500">
                  Outside DJ allowed
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
