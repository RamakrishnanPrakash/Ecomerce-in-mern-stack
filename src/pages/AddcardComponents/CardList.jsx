import { useState, useEffect, useContext } from "react";
import { fetchAddCardItem } from "../js/addCard.js";
import { toast, ToastContainer } from "react-toastify";
import { TrashIcon } from "../../assets/Icons/Icons";
import { data } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext.jsx";
import axios from "axios";
import { formatCurrency } from "../js/addCard.js";
export const CardList = ({
  selectedIndex,
  setSelectedIndex,
  setSelectedCard,
  selectedCard,
}) => {
  const storeContext = useContext(StoreContext);
  const URL = storeContext.URL;
  const [cardItem, setCardItem] = useState([]);

  const handleClick = (index) => {
    setSelectedCard([cardItem[index]]);
    setSelectedIndex(index);
  };

  useEffect(() => {
    fetchAddCardItem(URL).then((res) => {
      console.log(res);
      if (res.data.success) {
        toast.success(res.data.msg);
        console.log(res.data.mahal);
        setCardItem(res.data.mahal);

        setSelectedCard([res.data.mahal[0]]);
      } else {
        toast.error(res.msg);
      }
    });
  }, []);

  console.log(cardItem);

  const removeCard = async (mahalId) => {
    try {
      const responce = await axios.post(
        `${URL}/api/card/removeCard`,
        { card: mahalId },
        {
          withCredentials: true,
        }
      );

      if (responce.data.success) {
        setCardItem(responce.data.cardItem);
        storeContext.setCardLen(responce.data.cardItem.length);

        toast.success(responce.data.msg);
      }
      console.log(responce);
    } catch (error) {
      if (error) toast.error("Try again later");
      else toast.error("Error has been occured");
    }
  };

  return (
    <div className="w-[100vw] lg:w-[70%] h-auto flex items-start justify-center flex-col ">
      {cardItem.length > 0
        ? cardItem.map((data, index) => (
            <div
              key={index}
              className={`w-[80%] py-1 text-center md:text-justify flex-col h-auto mx-auto md:w-[90%] md:mx-auto md:h-[130px] my-3
                    shadow-lg rounded-xl shadow-gray-800 overflow-hidden flex items-center justify-evenly md:flex-row cursor-pointer ${
                      selectedIndex === index ? "bg-[#ca70ac6c]" : "bg-white"
                    }`}
              onClick={() => handleClick(index)}>
              {/* Image container */}
              <div className="w-[100px] h-[100px] md:w-[100px] md:h-[100px] overflow-hidden rounded-full bg-white shadow-lg shadow-gray-800">
                <img
                  src={data.mahalimage ? data.mahalimage : ""}
                  className="w-full h-full cursor-pointer rounded-full"
                  id="sliderImage"
                />
              </div>
              <div className="w-[200px] lg:w-[350px]">
                <h1 className="my-1 ml-2 text-lg font-bold text-pink-500">
                  {data.mahalname ? data.mahalname.trim(" ") : ""}
                </h1>
                <p className="my-1 ml-2 text-md font-medium text-gray-700">
                  Perday: {formatCurrency(data.amount)}.0
                </p>
                <p className="my-1 ml-2 text-md font-medium text-gray-700">
                  {data.distic}
                </p>
                <p className="my-1 ml-2 text-md font-medium text-gray-500">
                  Added Date:
                  {new Date(data.addDate).toLocaleDateString("en-GB")}
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="py-1 px-2 rounded-md bg-red-500
               text-white font-bold text-lg flex flex-grow items-center gap-1"
                  onClick={() => removeCard(data._id)}>
                  <p>remove</p>{" "}
                  <p>
                    <TrashIcon style={"size-6 text-white"}></TrashIcon>
                  </p>
                </button>

                <button className="py-1 px-2 rounded-md bg-green-400 text-white font-bold text-lg">
                  Explore
                </button>
              </div>
            </div>
          ))
        : new Array(10).map((_, index) => (
            <div className="min-w-[80%] min-h-[200px] mx-auto my-2">{""}</div>
          ))}
    </div>
  );
};
