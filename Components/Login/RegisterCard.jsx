import { useEffect, useRef, useState } from "react";
import {
  XiconSolid,
  ContactIcon,
  MailIcon,
  PasswordIcon,
  EyeIcon,
  EyeSlashIcon,
  ConfirmPasswordIcon,
} from "../../assets/Icons/Icons";

import { Otp } from "../Otp/Otp";
import { ToastContainer, toast } from "react-toastify";
import { inputValidator } from "./inputValidator";
import "./reg.css";
import { RotateBtn } from "../RotateBtn/RotateBtn";
import axios from "axios";
export const RegisterCard = ({
  passwordIcon,
  setPasswordIcon,
  setRegisterOrLogin,
  removeLoginPage,
}) => {
  const [sendOtpBtn, setSendOtpBtn] = useState(true);
  const registerInputRef = useRef(null);
  let inputElements = [];
  const [loading, setLoading] = useState(false);
  const [emailToken, setEmailToken] = useState("");

  //Default data... create structure of form data
  const [inputData, setInputData] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: "",
  });
  //store input element ...
  useEffect(() => {
    inputElements = registerInputRef.current.querySelectorAll("input");
    console.log(inputElements);
  }, []);

  // Store input values ...
  const storeInputData = (e, names) => {
    const { name, value } = e.target;
    setInputData((prevState) => ({
      ...prevState,
      [name]: value.trim(),
    }));
  };
  // toast.success("Validation successful. Sending OTP...");

  //validate all data and get otp authentication
  const URL = "http://localhost:2000";
  let validData = false;
  const sendOtp = async () => {
    setLoading(true);
    validData = await inputValidator(URL, inputData);
    console.log(validData);

    // If all validations pass
    getOtpValidation();
    // Proceed with OTP sending logic here
  };
  const getOtpValidation = async () => {
    if (!validData) {
      setLoading(false);
      return;
    } else {
      const { username, email, password } = inputData;
      try {
        const responce = await axios.post(`${URL}/api/user/generateOtp`, {
          username: username,
          email: email,
          password: password,
        });

        if (responce.data.success) {
          setLoading(false);
          setSendOtpBtn(false);
          setEmailToken(responce.data.token);
          console.log(responce.data);
          toast.success(responce.data.msg);
        }
      } catch (error) {
        if (error) {
          toast.error(responce.data.msg);
        }
      }
    }
  };
  return (
    <div className=" w-[90%] h-auto sm:w-auto md:min-w-[460px] p-8 py-10 shadow-lg bg-white shadow-gray-700 rounded-xl relative">
      <div
        className="absolute top-3 right-3"
        onClick={() => removeLoginPage(false)}>
        <XiconSolid
          style={`size-7 p-[1px]  cursor-pointer font-bold
                   rounded-full border-0 bg-pink-500 text-white  
                  hover:text-gray-700 hover:border-gray-700 hover:bg-transparent  hover:border-2 hover:duration-200 `}></XiconSolid>
      </div>
      <div ref={registerInputRef}>
        <h1 className="text-2xl text-pink-500 font-bold pb-2 border-b-2 border-gray-700 ">
          Registration
        </h1>
        <div
          className=" w-[100%] flex gap-1 items-center bg-white p-1 px-2 shadow-lg
             shadow-gray-700 rounded-xl my-4 hover:shadow-green-400 hover:duration-700"
          id="username">
          <ContactIcon style={"size-6 text-gray-500"}></ContactIcon>
          <input
            type="text"
            placeholder="Username"
            className="bg-transparent p-1 pl-2 border-0 outline-0 text-lg
                 text-pink-500 font-bold cursor-pointer w-[90%]"
            name="username"
            value={storeInputData.username}
            onChange={(e) => storeInputData(e, "username")}
          />
        </div>
        <div
          className=" w-[100%] flex gap-1 items-center bg-white p-1 px-2 shadow-lg
             shadow-gray-700 rounded-xl my-4 hover:shadow-green-400 hover:duration-700">
          <MailIcon style={"size-6 text-gray-500"}></MailIcon>
          <input
            type="text"
            placeholder="Email"
            className="bg-transparent p-1 pl-2 border-0 outline-0 text-lg
                 text-pink-500 font-bold cursor-pointer w-[90%]"
            name="email"
            id="email"
            onChange={(e) => storeInputData(e, "email")}
            value={storeInputData.email}
          />
        </div>
        {/* start password section */}
        <div
          className=" w-[100%] flex gap-1 items-center bg-white p-1 px-2 shadow-lg justify-between
             shadow-gray-700 rounded-xl my-4  hover:shadow-green-400 hover:duration-700">
          <div className="w-[100%] flex items-center gap-1">
            <PasswordIcon style={"size-6 text-gray-500"}></PasswordIcon>

            {!passwordIcon ? (
              <input
                type="password"
                placeholder="Enter Password"
                className="bg-transparent p-1 pl-2 border-0 outline-0 text-lg
       text-pink-500 font-bold cursor-pointer w-[90%]"
                name="password"
                id="password"
                onChange={(e) => storeInputData(e, "password")}
                value={storeInputData.password}
              />
            ) : (
              <input
                type="text"
                placeholder="Enter Password"
                className="bg-transparent p-1 pl-2 border-0 outline-0 text-lg
       text-pink-500 font-bold cursor-pointer w-[90%]"
                name="password"
                id="password"
                onChange={(e) => storeInputData(e, "password")}
                value={storeInputData.password}
              />
            )}
          </div>
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
        {/* end password section */}

        {/* start  confirm password section */}
        <div
          className=" w-[100%] flex gap-1 items-center bg-white p-1 px-2 shadow-lg
             shadow-gray-700 rounded-xl my-4  hover:shadow-green-400 hover:duration-700">
          <div className="w-[100%] flex items-center gap-1">
            <ConfirmPasswordIcon
              style={"size-6 text-gray-500"}></ConfirmPasswordIcon>

            {!passwordIcon ? (
              <input
                type="password"
                placeholder="Enter Confirm Password"
                className="bg-transparent p-1 pl-2 border-0 outline-0 text-lg
                 text-pink-500 font-bold cursor-pointer w-[90%]"
                name="cpassword"
                id="cpassword"
                onChange={(e) => storeInputData(e, "cpassword")}
                value={storeInputData.cpassword}
              />
            ) : (
              <input
                type="text"
                placeholder="Enter Confirm Password"
                className="bg-transparent p-1 pl-2 border-0 outline-0 text-lg
                 text-pink-500 font-bold cursor-pointer w-[90%]"
                name="cpassword"
                id="cpassword"
                onChange={(e) => storeInputData(e, "cpassword")}
                value={storeInputData.cpassword}
              />
            )}
          </div>

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
        {/* end  confirm password section */}
        {sendOtpBtn ? (
          <button
            className="w-full mb-3 mx-auto text-lg font-bold bg-green-500 rounded-lg
           text-white   text-center"
            onClick={() => sendOtp()}>
            {loading ? (
              <RotateBtn />
            ) : (
              <p className="px-3 py-2 text-center">Send Otp</p>
            )}
          </button>
        ) : (
          <Otp
            inputData={inputData}
            emailToken={emailToken}
            setEmailToken={setEmailToken}
            removeLoginPage={removeLoginPage}
            setInputData={setInputData}
          />
        )}
        {/* <div className=" w-full">
           inputData={inputData}
            validData={validData}
            URL={URL}></Otp>
          <button
            className="w-full mb-3 mx-auto text-lg font-bold
           bg-pink-500 rounded-lg text-white  px-3 py-2 text-center"
            disabled={sendOtpBtn}>
            Register
          </button>
        </div> */}
        <div>
          <h6
            className="text-gray-500 cursor-pointer hover:text-pink-500 ml-1"
            onClick={() => setRegisterOrLogin(true)}>
            Already have an account?
          </h6>
        </div>
      </div>
      <ToastContainer className="custom-toast-container"></ToastContainer>
    </div>
  );
};
