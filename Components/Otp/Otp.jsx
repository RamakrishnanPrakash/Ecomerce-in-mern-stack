import { useRef, useState, useEffect, useContext } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import { RotateBtn } from "../RotateBtn/RotateBtn";
import { inputValidator } from "../Login/inputValidator";
import { StoreContext } from "../../context/StoreContext";

export const Otp = ({
  inputData,
  emailToken,
  setEmailToken,
  removeLoginPage,
  setInputData,
}) => {
  const [otp, setOtp] = useState(Array(6).fill(""));
  const inputRef = useRef([]);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds
  const [isResendDisabled, setIsResendDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const storeContext = useContext(StoreContext);

  const URL = "http://localhost:2000";

  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);

      return () => clearInterval(timer); // Cleanup interval on component unmount
    } else {
      setIsResendDisabled(false); // Enable resend button when timer ends
    }
  }, [timeLeft]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(minutes).padStart(2, "0")}:${String(secs).padStart(
      2,
      "0"
    )}`;
  };

  const handleResendOTP = async () => {
    setTimeLeft(300); // Reset timer to 5 minutes
    setIsResendDisabled(true); // Disable resend button again
    // Trigger resend OTP logic here

    const { username, email, password } = inputData;
    try {
      const responce = await axios.post(`${URL}/api/user/generateOtp`, {
        username: username,
        email: email,
        password: password,
      });

      if (responce.data.success) {
        console.log(responce.data);
        setLoading(false);
        setSendOtpBtn(false);
        setEmailToken(emailToken);
        toast.success(responce.data.msg);
      }
    } catch (error) {}
  };

  const handleVerifyOtp = async () => {
    setLoading(true);
    inputValidator(URL, inputData);
    const { username, password, email } = inputData;
    console.log("Input Data:", inputData);
    console.log("OTP entered:", otp.join("").trim());

    // Check if the OTP and input data are valid
    if (Object.keys(inputData).length > 0 && otp.join("").trim().length === 6) {
      try {
        const response = await axios.post(
          `${URL}/api/user/register`,
          {
            username,
            email,
            password,
            otp: otp.join("").trim(),
          },
          {
            withCredentials: true,
            headers: {
              authorization: `${emailToken}`,
              "Content-Type": "application/json",
            },
          }
        );

        if (response.data.success) {
          setOtp(Array(6).fill(""));
          setInputData({
            username: "",
            email: "",
            password: "",
            cpassword: "",
          });
          storeContext.setUserDetails(response.data.userData);
          toast.success(response.data.msg || "Registration was successful");

          setTimeout(() => {
            removeLoginPage(false);
          }, 2000);
        }
      } catch (error) {
        toast.error(
          error.response
            ? error.response.data.msg
            : error.message || "An unknown error occurred"
        );
      } finally {
        setLoading(false); // Ensure loading state is reset
      }
    } else {
      toast.error("Input data is empty or OTP is invalid");
    }
  };

  const handleChange = (e, index) => {
    const { value } = e.target;
    const num = [...otp];
    num[index] = value;
    setOtp(num);
    // console.log(otp);
    if (index < otp.length - 1) {
      inputRef.current[index + 1].focus();
    }
    if (value == "" && index > 0) {
      inputRef.current[index - 1].focus();
    }
  };
  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && otp[index] === "") {
      // Move focus to previous input on backspace if current input is empty
      if (index > 0) {
        inputs.current[index - 1].focus();
      }
    }
  };

  return (
    <div className="">
      <div
        className={
          isResendDisabled
            ? "flex  justify-between w-full items-center"
            : "hidden"
        }>
        <div className="my-3 flex gap-2 items-center justify-between w-[80%] ">
          {otp.map((_, index) => (
            <input
              key={index}
              type="text"
              value={otp[index]}
              className="w-[40px] h-[40px] md:w-[50px] md:h-[50px]  shadow-xl  outline-0 
               shadow-gray-700 text-2xl text-gray-600  border-2 border-pink-500 bg-transparent text-center p-1 font-bold rounded-md"
              maxLength={1}
              ref={(el) => (inputRef.current[index] = el)}
              onChange={(e) => handleChange(e, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              disabled={!isResendDisabled}
            />
          ))}
        </div>
        <div>
          <h5 className="text-lg font-bold text-gray-700">
            {formatTime(timeLeft)}
          </h5>
        </div>
      </div>
      {isResendDisabled ? (
        <button
          className=" w-full  text-white text-lg my-1 font-bold bg-pink-500 rounded-lg"
          onClick={handleVerifyOtp}>
          {loading ? (
            <RotateBtn />
          ) : (
            <p className="px-6 py-4 text-center">Verify One Time Password</p>
          )}
        </button>
      ) : (
        <button
          className=" w-full  text-white text-lg my-1 font-bold
        bg-green-500 rounded-lg"
          onClick={() => {
            handleResendOTP(inputData);
          }}>
          {loading ? (
            <RotateBtn />
          ) : (
            <p className="px-6 py-4 text-center">Resend Otp</p>
          )}
        </button>
      )}
    </div>
  );
};
