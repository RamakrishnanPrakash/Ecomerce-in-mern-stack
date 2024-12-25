import { useFormAction, useLocation } from "react-router-dom";
import { LoginPage } from "../Components/Login/LoginPage";
import { Navbar } from "../Components/Navbar/Navbar";
import { Profile } from "../Components/Profile/Profile";
import { StoreContext } from "../context/StoreContext";
import { useContext, useEffect, useRef, useState } from "react";
import ProductRating, {
  ProductInfoRating,
} from "../Components/ProductComponent/ProductRating";
import { Fooder } from "../Components/Fooder/Fooder";
import { CopyRight } from "../Components/Copyright/CopyRight";
import { Service } from "../Components/ServiceOffered/Service";
import { ProductCard } from "../Components/ProductComponent/ProductCard";
import { Calender } from "../Components/Calender/Calender";
import { ToastContainer, toast } from "react-toastify";
import { formatCurrency } from "./js/addCard.js";
import axios from "axios";
export const BookingPage = ({
  profileCard,
  setProfileCard,
  loginPage,
  removeLoginPage,
}) => {
  const storeContext = useContext(StoreContext);
  const URL = storeContext.URL;
  const districtName = useLocation();
  const { mahal } = districtName.state; //get default district
  const [particularMahal, setParticularMaha] = useState([mahal]);
  const [sideMahal, setSideMahal] = useState([]);
  const [removeCalender, setRemoveCalender] = useState(false);
  const [district, setDistrict] = useState(particularMahal[0].district);

  //change the bootom image to selected image
  const changeImage = (data) => {
    console.log(data);
    const changeMahal = sideMahal.filter((datas) => datas._id == data);
    console.log(changeMahal);
    setParticularMaha([...changeMahal]);
  };

  //get limit=3 district data to append the boottom image

  useEffect(() => {
    const getLimitMahal = async () => {
      const responce = await axios.post(
        `${URL}/api/mahal/limitmahal`,
        {
          district: district,
        },
        { withCredentials: true }
      );
      console.log("Responce", responce);
      if (responce.data.success) {
        setSideMahal(responce.data.mahalList);
      }
    };
    getLimitMahal();
  }, [district]);
  // Automatically scrolls to top whenever pathname changes
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  console.log("ParticularMahal", particularMahal);
  return (
    <>
      <div className="w-[100%] h-auto overflow-x-hidden">
        <div className="relative w-full h-[80px]">
          <Navbar
            profileCard={profileCard}
            setProfileCard={setProfileCard}
            loginPage={loginPage}
            removeLoginPage={removeLoginPage}
          />
        </div>

        <div
          className=" container mx-auto rounded-lg min-h-auto shadow-lg shadow-gray-900
         bg-white  flex items-center   justify-center flex-wrap mt-4  gap-5  w-[100vw] description-appear ">
          {/* image */}
          <div className="p-2 px-0 ">
            <div className="bg-white rounded-md shadow-lg shadow-gray-900 overflow-hidden">
              <div className=" w-[400px] h-[300px] overflow-hidden ">
                <img
                  src={particularMahal[0].mahalimage}
                  className="  w-[400px] h-[350px] rounded-sm  "
                  id="sliderImage"
                />
              </div>
            </div>
            <div
              className=" w-[400px] h-[150px] bg-white  mt-2 
            flex gap-1 flex-row items-center justify-center p-1">
              {sideMahal.map((data) => (
                <div
                  className=" flex-1 h-full bg-white overflow-hidden rounded-sm
                 cursor-pointer"
                  onClick={() => changeImage(data._id)}>
                  <img
                    src={data.mahalimage}
                    className="w-full h-full"
                    id="sliderImage"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* product sescription */}
          <div className="p-2 px-0 w-[600px] shadow-inner ">
            <div className=" w-full   flex  flex-row items-center justify-between">
              <p className="bg-green-500 p-1 rounded-lg w-[150px] text-white text-center">
                Wedding mahal
              </p>
              <div className="flex flex-row">
                <ProductInfoRating
                  num={particularMahal[0].rating}
                  style={"w-full size-8 text-green-500 "}
                />
              </div>
            </div>

            <h1 className="mt-3 text-3xl font-bold text-pink-500">
              {particularMahal[0].mahalname}{" "}
              <a className="text-lg text-pink-500">/{particularMahal[0].Ac}</a>
            </h1>
            <h1 className=" mt-3 text-xl ml-1 font-bold text-gray-800">
              {particularMahal[0].city}
            </h1>

            <h1 className=" mt-3 text-lg ml-1 font-bold text-gray-800">
              {particularMahal[0].distic}
            </h1>
            <h1 className="mt-3 text-3xl font-bold text-pink-500">
              RS. {formatCurrency(particularMahal[0].amount)}{" "}
              <a>
                <strike className="text-lg text-gray-800">
                  RS. {formatCurrency(particularMahal[0].amount + 5000)}.00
                </strike>
              </a>
            </h1>

            <p className="p-1 min-h-[100px] mt-2 lg:p-0">
              We Bring To You The Best Coz You Deserve The Best.{" "}
              {particularMahal[0].mahalname} And Events Brings to You the Most
              Elegant Banquet Hall in
              {" " + particularMahal[0].distic} that Not Only Caters to Your
              Needs to the Fullest but also Watches Out for the Minutest Details
              that Make Your Event Memorable and Gorgeously Beautiful. Located
              in the {particularMahal[0].city}.
            </p>

            <div className="flex gap-3">
              <button
                className="border-0 outline-0 px-4 py-2 font-bold text-lg text-center
               bg-pink-700 text-white rounded-lg mt-5 availablity-btn"
                onClick={() => setRemoveCalender(true)}>
                Check avalablity
              </button>
              <button
                className="border-0 outline-0 px-4 py-2 font-bold text-lg
               text-center bg-green-500 text-white rounded-lg mt-5 booknow-btn">
                Book now
              </button>
            </div>
          </div>
        </div>

        {/* service offered section */}

        <Service particularMahal={particularMahal} />
        <div className="container mx-auto p-2">{/* <ProductCard /> */}</div>
        <Fooder />
        <CopyRight />

        {/* fixed position content here */}
        <div className="">
          <Calender
            removeCalender={removeCalender}
            setRemoveCalender={setRemoveCalender}
          />
        </div>
      </div>

      <ToastContainer />
    </>
  );
};
