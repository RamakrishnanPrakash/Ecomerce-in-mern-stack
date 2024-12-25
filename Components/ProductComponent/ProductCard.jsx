import { useContext, useEffect, useState } from "react";
import { FillterContext } from "../../context/FillterContext";
import { StoreContext } from "../../context/StoreContext";
import { RatingsComponent } from "../Horizantal/Scrollbar";
import ProductRating from "./ProductRating";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, Routes } from "react-router-dom";
import { BookingPage } from "../../pages/BookingPage";
import axios from "axios";

export const ProductCard = () => {
  const filterContext = useContext(FillterContext);
  const storeContext = useContext(StoreContext);
  const URL = storeContext.URL;

  //default set user isLogin true or false

  const [animeBtn, setAnimeBtn] = useState(false);
  //this function has add card in useraccount and animation

  const animationBtn = async (id, mahalname) => {
    console.log(id);

    const responce = await axios.post(
      `${URL}/api/card/addCard`,
      { card: id },
      { withCredentials: true }
    );
    console.log(responce);
    if (responce.data.success) {
      setAnimeBtn(id);
      toast.success(`${mahalname} added to your card 😎 `);
      storeContext.setCardLen(responce.data.length);
    }
    if (!responce.data.success) {
      toast.info(`${mahalname} already added 😎 `);
    }
  };

  return (
    <>
      <div className="w-full h-full flex justify-around flex-wrap gap-4 py-3 px-1">
        {filterContext.listAllMahal.length > 0 ? (
          filterContext.listAllMahal.map((data, index) => (
            <div
              className="card w-[180px] sm:w-[180px] sm:h-[280px]  md:w-[210px] md:h-[320px] bg-white rounded-lg  mb-2 shadow-xl
           shadow-gray-600 overflow-hidden block-appear">
              <div
                className="w-full h-[150px] overflow-hidden relative"
                key={index}>
                <img
                  src={data.mahalimage}
                  className="w-full h-[150px] cursor-pointer"
                  id="sliderImage"
                />

                {/* Book now button */}
                <div
                  className="absolute top-3 left-3 flex gap-2 bg-gray-800 text-white
         p-2 rounded-lg cursor-pointer hover:bg-lime-200">
                  <Link to={`explore/`} state={{ mahal: data }}>
                    Book now
                  </Link>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-6">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m12.75 15 3-3m0 0-3-3m3 3h-7.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </div>
                {/* Book now button close */}

                {/* favourite button */}

                <div className="absolute top-3 right-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="size-7 text-pink-500 bg-white p-1 rounded-full cursor-pointer">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                    />
                  </svg>
                </div>
              </div>
              <h6 className=" whitespace-nowrap text-center md:ml-1 md:text-left font-bold mt-1 overflow-hidden">
                {data.mahalname}
              </h6>
              <p className="text-center md:ml-1 md:text-left mt-1 ">
                Rp {data.budget}.00
              </p>
              <a className="hidden md:inline-block ml-1 mt-1 text-gray-600">
                <strike>Rp {data.amount + 2000}.0</strike>
              </a>
              <a className="hidden md:inline-block ml-1 mt-1 bg-emerald-300 p-1 rounded-xl">
                save 20%
              </a>
              <ProductRating
                num={data.rating}
                style={"size-4 inline text-red-400"}></ProductRating>
              <div
                className={
                  animeBtn == data.id
                    ? "w-[150px] flex gap-1 mx-auto bg-pink-800 text-white justify-center px-1  py-2 rounded-xl  cursor-pointer animation-btn"
                    : " w-[150px] flex gap-1 mx-auto bg-gray-800 text-white justify-center px-1 py-2 rounded-xl  cursor-pointer animation-btn"
                }
                onClick={() => animationBtn(data._id, data.mahalname)}>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                    />
                  </svg>
                </div>
                <div> Add Card</div>
              </div>
            </div>
          ))
        ) : (
          <div className="w-full flex items-center justify-center">
            <h1 className="text-lx text-pink-600 ">
              Wedding mahal has been loading...
            </h1>
          </div>
        )}
      </div>

      <ToastContainer></ToastContainer>
    </>
  );
};
