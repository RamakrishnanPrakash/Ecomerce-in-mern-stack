export const Addcard = () => {
  return (
    <div className="w-[30%] h-[90vh] relative">
      {/* Particular Image Container start */}
      <div
        className=" hidden w-[400px] h-[480px] mx-auto bg-white shadow-lg 
    shadow-gray-800 rounded-lg z-10  lg:block lg:fixed top-[50%] right-[70px] -translate-y-[50%]">
        <div className="w-full h-[250px] overflow-hidden mx-auto my-2 rounded-lg shadow-lg shadow-gray-700 ">
          <img
            src={addCardData[0]?.mahalimage}
            className="w-full h-[250px]"
            id="sliderImage"
          />
        </div>
        <div className="relative w-[400px] ">
          <div className="absolute top-[35px] -right-20  z-10">
            <ProductInfoRating
              num={addCardData[0].rating}
              style={"size-6 text-green-500"}
            />
          </div>
          <h1 className="ml-2 text-xl font-bold text-pink-500 mt-4 mb-2">
            {addCardData[0].mahalname}
          </h1>
          <h6 className="ml-2 text-lg my-1 text-gray-700 font-bold">
            {addCardData[0].city}
          </h6>
          <p className="ml-2 text-lg my-1 text-gray-700 font-bold">
            {" "}
            {addCardData[0].distic}
          </p>
          <p className="ml-2 text-lg my-1 text-gray-700 font-bold">
            {addCardData[0].budjet}
          </p>
        </div>
        <div
          className="w-full flex  items-center  ml-2 gap-2
      ">
          <div className="bg-green-500 rounded-lg text-white">
            <button className="outline-0 text-lg py-1 px-2 border-0 cursor-pointer">
              Check Available
            </button>
          </div>
          <div className="bg-pink-500 rounded-lg text-white">
            <button className="outline-0 text-lg py-1 px-2 border-0 cursor-pointer">
              Book now
            </button>
          </div>
        </div>
      </div>
      {/* Particular Image Container end */}
    </div>
  );
};
