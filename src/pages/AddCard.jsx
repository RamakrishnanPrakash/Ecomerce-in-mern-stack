import React, { memo, useContext, useEffect, useState } from "react";
import { Navbar } from "../Components/Navbar/Navbar";
import { SideArrow, TrashIcon } from "../assets/Icons/Icons";
import { Fooder } from "../Components/Fooder/Fooder";
import { CopyRight } from "../Components/Copyright/CopyRight";
import { ProductInfoRating } from "../Components/ProductComponent/ProductRating";
import { StoreContext } from "../context/StoreContext";
import { LoginPage } from "../Components/Login/LoginPage";
import { StaticLoginPage } from "../Components/Login/StaticLoginPage";
import { fetchAddCardItem } from "./js/addCard";
import { toast, ToastContainer } from "react-toastify";
import { data } from "react-router-dom";
import { CardList } from "./AddcardComponents/CardList";

export const AddCard = ({
  profileCard,
  setProfileCard,
  loginPage,
  removeLoginPage,
}) => {
  const storeContext = useContext(StoreContext);

  const [addCardData, setAddCardData] = useState([
    {
      id: 1,
      mahalname: "Vettri Krishnan Mahal",
      city: "West Mambalam",
      distic: "Chennai",
      rating: 4.8,
      Ac: "Ac",
      budjet: "2,25,000",
      amount: 225000,
      indoor: "600-900",
      mahalimage:
        "https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/380/167/new_medium/ss20230328-16890-hgpp41.jpg?1679993641",
      color: "#860306",
    },
    {
      id: 2,
      mahalname: "Hyath Mahal",
      city: "Broadway",
      distic: "Chennai",
      rating: 4.8,
      Ac: "Ac",
      budjet: "85,000",
      amount: 85000,
      indoor: "400-500",
      mahalimage:
        "https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/573/923/new_medium/ss20230425-4044-aiad0k.JPG?1682398420",
      color: "#4f3fcc",
    },
    {
      id: 4,
      mahalname: "Murugan Hall",
      city: "Madipakkam",
      distic: "Chennai",
      rating: 4.5,
      Ac: "Ac",
      budjet: "1,30,000",
      amount: 130000,
      indoor: "450-975",
      mahalimage:
        "https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/258/323/new_medium/ss20230323-24949-hgvbsj.jpg?1679593973",
      color: "#382a70",
    },
    {
      id: 7,
      mahalname: "Sri Hariharan Marriage Hall",
      city: "Nanganallur",
      distic: "Chennai",
      rating: 4.6,
      Ac: "Ac",
      budjet: "50,000",
      amount: 50000,
      indoor: "125-200",
      mahalimage:
        "https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/488/045/new_medium/mini_magick20230806-15732-1tak6sm.jpg?1691325389",
    },
    {
      id: 8,
      mahalname: "Jk Mahaal",
      city: "Nanganallur",
      distic: "Chennai",
      rating: 4.8,
      Ac: "Ac",
      budjet: "2,36,500",
      amount: 236500,
      indoor: "700-1050",
      mahalimage:
        "https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/572/453/new_medium/ss20230425-4181-w7vnq3.JPG?1682398370",
    },
    {
      id: 9,
      mahalname: "Pragathamani Mahal",
      city: "Gangadarapuram",
      distic: "Thanjavur",
      rating: 4.4,
      Ac: "A/c",
      budjet: "25,000",
      amount: 25000,
      indoor: "1000-1500",
      mahalimage:
        "https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/997/573/new_medium/ss20230607-13853-4eas9z.jpg?1686168639",
    },
    {
      id: 10,
      mahalname: "Ushodhaya Csp Gardenss",
      city: "Madhavaram Milk Colony",
      distic: "Chennai",
      rating: 4.8,
      Ac: "Non-Ac",
      budjet: " 1,75,000",
      amount: 175000,
      indoor: "500-700",
      mahalimage:
        "https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/007/755/441/new_large/pp-IMG_20230612_211959.jpg?1696683169",
    },
    {
      id: 11,
      mahalname: "Aj Mahal Convention Hall",
      city: "Royapuram",
      distic: "Chennai",
      rating: 4.8,
      Ac: "AC",
      budjet: "1,50,000",
      amount: 150000,
      indoor: "400-600",
      mahalimage:
        "https://img.weddingbazaar.com/shaadisaga_production/photos/pictures/006/385/977/new_large/ss20230328-16890-czyjwf.jpg?1679993788",
    },
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [selectedCard, setSelectedCard] = useState([]);

  const [cookie, setCookie] = useState(false);

  const formatCurrency = (currency) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(currency);
  };

  const URL = "http://localhost:2000";

  // useEffect(() => {
  //   // Function to get a specific cookie by name
  //   const getCookie = (name) => {
  //     const value = `; ${document.cookie}`;
  //     const parts = value.split(`; ${name}=`);
  //     if (parts.length === 2) {
  //       return true;
  //     }

  //     return false;
  //   };

  //   // Accessing the "myCookie" value
  //   const myCookie = getCookie("user");
  //   console.log(myCookie);
  //   setCookie(myCookie);
  // }, [cookie]);

  // useEffect(() => {
  //   storeContext.setCardLen(storeContext.cardLen);
  // }, []);

  //Insert,remove from user db code here

  // console.log(CSS.supports("position", "sticky"));
  return (
    <>
      <div className="w-full h-auto">
        <div className="relative w-full h-[80px]">
          <Navbar
            profileCard={profileCard}
            setProfileCard={setProfileCard}
            loginPage={loginPage}
            removeLoginPage={removeLoginPage}
          />
        </div>

        <div className="w-full h-auto mx-auto relative bg-white shadow-2xl shadow-gray-800 rounded-xl flex justify-evenly ">
          {/* First scroll card container */}
          {/* 
          <CardItem /> */}
          <CardList
            selectedIndex={selectedIndex}
            setSelectedIndex={setSelectedIndex}
            setSelectedCard={setSelectedCard}
            selectedCard={selectedCard}
          />

          <div className="  h-auto min-w-[350px] p-1 hidden lg:block lg:h-[450px] lg:sticky lg:top-32 lg:right-2 mb-2 bg-white shadow-lg shadow-gray-800 rounded-md overflow-hidden">
            {selectedCard.length > 0 ? (
              selectedCard.map((data) => (
                <div className="w-full h-full flex flex-col">
                  <div className="w-[140px] h-[140px] mx-auto bg-white mt-1 rounded-full overflow-hidden border-2 border-pink-600 ">
                    <img
                      src={data.mahalimage}
                      className="w-full h-full rounded-full p-1"
                    />
                  </div>

                  <div className="flex items-center justify-center flex-col">
                    <h5 className="text-[20px] text-pink-500 font-bold my-1 text-center">
                      {data.mahalname}
                    </h5>
                    <p className="text-md text-gray-700 font-bold mb-1 text-center">
                      {`${data.city},${data.district}`}
                    </p>
                  </div>
                  <a
                    className="my-1 text-xl w-[200px] mx-auto text-pink-500 font-bold border-b-2 border-b-gray-700 text-center
                ">
                    Service offered
                  </a>
                  <div className="">
                    {data.foodprice.vegprice > 0 ||
                    data.foodprice.veg_and_nonveg > 0 ? (
                      <div className="flex justify-between mb-1 px-3  py-1 border-b-2  border-gray-400">
                        <p className="text-md font-bold text-gray-600">
                          Veg Food
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
                          Non Veg Food
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
                    <div className="flex justify-between  px-3 py-1 ">
                      <p className="text-md font-bold text-gray-600">Todal</p>
                      <p className="text-md font-bold text-pink-500">
                        {formatCurrency(
                          data.foodprice.vegprice +
                            data.foodprice.non_veg_price +
                            data.amount
                        )}
                      </p>
                    </div>
                  </div>
                  <button className="w-[80%] py-2 text-lg px-3  mx-auto bg-pink-600 text-white font-bold rounded-md">
                    Book now
                  </button>
                </div>
              ))
            ) : (
              <></>
            )}
          </div>
        </div>

        <div className="w-full h-[400px] relative my-3">
          <div className="w-full h-full bg-white absolute top-0 left-0 z-10">
            <div className="container mx-auto">
              <Fooder></Fooder>
              <CopyRight />
            </div>
          </div>
        </div>
      </div>

      <div
        className="bg-pink-500 relative z-10
        ">
        {" "}
      </div>
    </>
  );
};
