import { useState } from "react";
import images from "../assets/public.js";
import { ImageSlider } from "./ImageSlide/ImageSlider.jsx";

export const Wallframe = () => {
  const [bgImage, setBgImage] = useState(images[0].image); //setImage
  const [imageIndex, setImageIndex] = useState(images[0].id); //manage image array index

  const [disablePrevBtn, setDisablePrevBtn] = useState(false); //prev button able or disable
  const [disableNextBtn, setDisableNextBtn] = useState(false); //next button able or disable
  //set background image dynamically
  const myStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)) ,url(${bgImage})`,
    top: 0,
  };

  //Go to previous image
  const prevImage = () => {
    if (imageIndex < 0) {
      setDisablePrevBtn(true);
      setImageIndex(1);
      return;
    }
    setDisableNextBtn(false);
    setImageIndex(imageIndex - 1);
    setBgImage(images[imageIndex].image);
    console.log(imageIndex + "Ram");
    return;
  };

  //Go to next image
  const nextImage = () => {
    if (imageIndex == images.length) {
      setDisableNextBtn(true);
      setImageIndex(images.length - 2);
      return;
    }
    setDisablePrevBtn(false);
    setImageIndex(imageIndex + 1);
    setBgImage(images[imageIndex].image);
    console.log(imageIndex + "Ram");
    return;
  };
  return (
    <div
      className=" h-[80vh] sm:h-[80vh] rounded-none  container mx-auto wallframe relative  
       bg-no-repeat bg-center bg-cover overflow-hidden  sm:rounded-3xl sm:my-3 sm:mt-[5.5rem] loading-appear
         "
      style={myStyle}>
      {/* <img src={bgImage} alt="" className="w-full h-full" /> */}
      <div className=" absolute top-0 bottom-0 z-10 container text-white p-12  lg:flex flex-col h-full justify-center">
        <h1
          className="  text-2xl font-extrabold mt-6 md:text-5xl text-[#ff00ae]"
          id="h1">
          Tamilnadu Largest Wedding{" "}
        </h1>
        <h2 className=" text-xl font-bold my-2 md:text-3xl     " id="h2">
          Venue Booking Platform
        </h2>
        <h3 className="text-lg mb-5 px-1 text-white/90 " id="h3">
          Everything you need to plan your event
        </h3>
        <div className="flex btn  w-[180px] mb-10 p-3 cursor-pointer text-lg text-center rounded-xl  duration-700 hover:font-bold  hover:duration-700  hover:bg-transparent ">
          <button className="text-center w-full" id="btn1">
            Explore now
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 mt-[3px] ">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>

        <div className=" " id="btn2">
          <button
            className="mx-3 bg-lime-300 p-3 rounded-full hover:bg-[#ff00ae] duration-700 "
            onClick={() => prevImage()}
            disabled={disablePrevBtn ? true : false}>
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="size-6  text-black hover:text-white">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 19.5 8.25 12l7.5-7.5"
              />
            </svg>
          </button>

          <button
            className="mx-3 bg-lime-300 p-3 rounded-full
           hover:bg-[#ff00ae] duration-700"
            onClick={() => nextImage()}
            disabled={disableNextBtn ? true : false}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="size-6  text-black hover:text-white">
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m8.25 4.5 7.5 7.5-7.5 7.5"
              />
            </svg>
          </button>
        </div>
      </div>

      <ImageSlider
        propsImage={[...images]}
        setImg={setBgImage}
        setImageIndex={setImageIndex}></ImageSlider>
    </div>
  );
};
