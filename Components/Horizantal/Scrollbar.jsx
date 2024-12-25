import data from "../../assets/mostViewed.json";
import { useRef, useState } from "react";
import "./Scrollbar.css";
import {
  HeartIcon,
  RightArrowIcon,
  LeftArrowIcon,
} from "../../assets/Icons/Icons";

export const RatingsComponent = (props) => {
  const ratingArray = Array(Math.floor(props.num)).fill(0);

  return (
    <>
      <div className=" w-[250px] h-8 flex ">
        {ratingArray.map((data, index) => (
          <a key={index}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 inline text-red-400">
              <path
                fillRule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        ))}

        {props.num % 1 == 0 ? (
          ""
        ) : (
          <a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6 inline text-red-400">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </a>
        )}

        <a className="ml-4 mt-1 text-red-300 ">{props.num}</a>
      </div>
    </>
  );
};

export const ColorComponent = ({ data }) => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  n = "#" + n.slice(0, 6);

  const myStyle = {
    backgroundColor: n,
  };
  const myFontColor = {
    color: n,
  };

  return (
    <div className="image  min-w-[270px]   h-96 rounded-xl text-black ">
      <div className={`h-full w-full bg-white`}>
        <div className=" h-full w-full ">
          <div className=" h-[180px] w-full relative  overflow-hidden">
            <div className=" absolute top-3 right-3">
              {/*  */}
              <HeartIcon
                style={"size-7 text-pink-500 cursor-pointer"}></HeartIcon>
            </div>

            <h4
              className="absolute top-3 left-3 text-lg cursor-pointer text-white px-3 py-1 rounded-lg  "
              style={myStyle}>
              Explore now
            </h4>
            <img
              src={data.mahalimage}
              alt=""
              className="h-[180px] w-full  text-center cursor-pointer"
              id="card"
            />
          </div>
          <h1 className="mt-4 ml-4 roboto-black text-xl">{data.mahalname}</h1>
          <h5 className=" ml-4  text-lg">Rp {data.budjet}.00</h5>
          <a className=" mt-2 ml-4 text-gray-400">
            <strike>Rp {data.amount + 1000}.00</strike>
          </a>
          <a className="mt-2 ml-4 bg-green-300 text-white p-1 rounded-lg">
            save upto 20%
          </a>
          <div className="mt-2 ml-4">
            <RatingsComponent num={data.rating}></RatingsComponent>
          </div>
          <div className="w-full flex justify-center mt-1 text-white">
            <div
              className="w-3/4 h-9 rounded-lg mx-auto px-3 py-2 text-center flex justify-center gap-[3px] cursor-pointer"
              style={myStyle}>
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
              <span className="sour-gummy -mt-1"> Add Card</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const Scrollbar = () => {
  const scrollImageRef = useRef(null);

  function testing(shift) {
    scrollImageRef.current.scrollBy({
      left: shift,
      behavior: "smooth",
    });
    console.log(scrollImageRef.current.scrollLeft);
  }

  // const URL = "http://localhost:5173/";

  // console.log(`bg-[${randomHexColorCode()}]`);
  return (
    <div className="container h-96  mx-auto  mt-5 horizontal-appear ">
      <h2 className="font-bold text-3xl text-[#a90073] mb-2 text-center">
        Most viewed venue
      </h2>

      <h1 className="w-full border-b-2 border-blue-950 mb-3"></h1>

      <div
        className="w-full h-full  slider-container relative 
         ">
        <button
          className="mx-3 bg-lime-300  rounded-full absolute left-0  z-10
             top-1/2 -translate-y-1/2 p-4  
        left cursor-pointer
             hover:bg-[#ff00ae]
             duration-700 "
          onClick={() => testing(-100)}>
          {" "}
          {/*  */}
          <LeftArrowIcon
            style={"size-6  text-black hover:text-white"}></LeftArrowIcon>
        </button>

        <div
          className="scroll-image px-8 py-3 h-full rounded-xl"
          ref={scrollImageRef}>
          {data.mostViewed.map((data) => (
            <ColorComponent data={data}></ColorComponent>
          ))}
        </div>

        <button
          className="mx-3 bg-lime-300  rounded-full
            absolute right-0 top-1/2 -translate-y-1/2 p-4 right
           hover:bg-[#ff00ae] duration-700"
          onClick={() => testing(100)}>
          <RightArrowIcon
            style={"size-6  text-black hover:text-white"}></RightArrowIcon>
        </button>
      </div>
    </div>
  );
};
