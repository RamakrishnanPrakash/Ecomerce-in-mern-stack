import { useState } from "react";

export const ImageSlider = (props) => {
  const [bgImage, setBgImage] = useState([...props.propsImage]);

  //renter image curiosial and manage image index,src
  const changeImage = (src, index) => {
    props.setImg(src);
    props.setImageIndex(index);
    let prevImage = bgImage[index];
    bgImage.splice(index, 1);
    console.log(bgImage);
    setBgImage([...bgImage, prevImage]);
    console.log(bgImage);
  };

  return (
    <div>
      <div
        className="container h-[150px] p-2 sm:h-[16rem]   absolute bottom-4 right-6 w-2/4 overflow-hidden 
      flex flex-row z-10 flex-shrink gap-3 backdrop-blur-lg bg-white/30 sm:p-5 rounded-2xl  ">
        {bgImage.map((item, index) => (
          <div className="w-56 ">
            <div className="w-[10rem] h-full overflow-hidden rounded-2xl duration-700">
              <img
                src={item.image}
                alt=""
                id="sliderImage"
                className="h-full w-[10rem] cursor-pointer rounded-2xl box-shadow "
                onClick={() => changeImage(item.image, index)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
