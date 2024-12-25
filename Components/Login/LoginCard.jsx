import { useContext, useState } from "react";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";

import {
  XiconSolid,
  ContactIcon,
  PasswordIcon,
  EyeSlashIcon,
  EyeIcon,
} from "../../assets/Icons/Icons";
import { ToastContainer, toast } from "react-toastify";

export const LoginCard = ({
  passwordIcon,
  setPasswordIcon,
  setRegisterOrLogin,
  removeLoginPage,
}) => {
  const URL = "http://localhost:2000";
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const storeContext = useContext(StoreContext);

  const handleClick = async () => {
    console.log(loginData);
    if (loginData.email.length == 0 || !loginData) {
      toast.error("Please Enter Your Email");
      return;
    }
    if (loginData.password.length == 0 || !loginData) {
      toast.error("Please Enter Your Password");
      return;
    }

    if (loginData) {
      try {
        const responce = await axios.post(`${URL}/api/user/login`, loginData, {
          withCredentials: true,
        });
        if (responce) {
          console.log(responce);
          responce.config.withCredentials = true;
          storeContext.setUserDetails(responce.data.userData);

          toast.success(responce.data.msg || "Login successfully");

          removeLoginPage(false);
          storeContext.setCookie(true);
        }
        return;
      } catch (error) {
        console.log(error);
        if (error.response) {
          // Server-side error
          toast.error(error.response.data.msg || "Login Failed");
        } else {
          // Network or other error
          toast.error("An error occurred. Please try again.");
        }
      }
    }
  };
  return (
    <div className="min-w-[400px] p-8 py-3 shadow-lg bg-white shadow-gray-700 rounded-xl relative ">
      <div
        className="absolute top-3 right-3"
        onClick={() => removeLoginPage(false)}>
        <XiconSolid
          style={`size-8 p-[1px]  cursor-pointer font-bold
                   rounded-full border-0 bg-pink-500 text-white  
                  hover:text-gray-700 hover:border-gray-700 hover:bg-transparent  hover:border-2 hover:duration-200 `}></XiconSolid>
      </div>
      <div>
        <h1 className="text-4xl text-pink-500 font-bold pb-4 border-b-2 border-gray-700 ">
          Login
        </h1>
        <div
          className="flex gap-1 items-center bg-white p-1 px-2 shadow-lg
             shadow-gray-700 rounded-xl my-4 hover:shadow-green-400 hover:duration-700">
          <ContactIcon style={"size-6 text-gray-500"}></ContactIcon>
          <input
            type="text"
            placeholder="Enter Email"
            className="bg-transparent p-1 pl-2 border-0 outline-0 text-lg
                 text-pink-500 font-bold cursor-pointer"
            onChange={(event) =>
              setLoginData((prev) => ({ ...prev, email: event.target.value }))
            }
            value={loginData.email}
          />
        </div>
        <div
          className="flex gap-1 items-center bg-white p-1 px-2 shadow-lg
             shadow-gray-700 rounded-xl my-4  hover:shadow-green-400 hover:duration-700">
          <PasswordIcon style={"size-6 text-gray-500"}></PasswordIcon>

          {!passwordIcon ? (
            <input
              type="password"
              placeholder="Enter Password"
              className="bg-transparent p-1 pl-2 border-0 outline-0 text-lg
                 text-pink-500 font-bold cursor-pointer"
              onChange={(event) =>
                setLoginData((prev) => ({
                  ...prev,
                  password: event.target.value,
                }))
              }
              value={loginData.password}
            />
          ) : (
            <input
              type="text"
              placeholder="Enter Password"
              className="bg-transparent p-1 pl-2 border-0 outline-0 text-lg
                 text-pink-500 font-bold cursor-pointer"
              onChange={(event) =>
                setLoginData((prev) => ({
                  ...prev,
                  password: event.target.value,
                }))
              }
              value={loginData.password}
            />
          )}
          {!passwordIcon ? (
            <a onClick={() => setPasswordIcon(true)} className="cursor-pointer">
              <EyeSlashIcon style={"size-6 text-gray-500"}></EyeSlashIcon>
            </a>
          ) : (
            <a
              onClick={() => setPasswordIcon(false)}
              className="cursor-pointer">
              <EyeIcon style={"size-6 text-gray-500"}></EyeIcon>
            </a>
          )}
        </div>
        <div className=" w-full">
          <button
            className="w-full mb-3 mx-auto text-lg font-bold bg-pink-500 rounded-lg
          text-white  px-3 py-2 text-center"
            onClick={() => handleClick()}>
            Login
          </button>
        </div>
        <div>
          <h6
            className="text-gray-500 cursor-pointer hover:text-pink-500 ml-1"
            onClick={() => setRegisterOrLogin(false)}>
            Create have an account?
          </h6>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
