import { Navbar } from "../Components/Navbar/Navbar";
import { Wallframe } from "../Components/Wallframe";
import { Scrollbar } from "../Components/Horizantal/Scrollbar";
import "./fontFamily.css";
import { Product } from "../Components/ProductComponent/Product";
import FillterContextProvider from "../context/FillterContext";
import { EmailSubscription } from "../Components/EmailSubscription/EmailSubscription";
import { Fooder } from "../Components/Fooder/Fooder";
import { CopyRight } from "../Components/Copyright/CopyRight";
import { LoginPage } from "../Components/Login/LoginPage";
import { Profile } from "../Components/Profile/Profile";
// import { ToastContainer, toast } from "react-toastify";

export const Home = ({
  profileCard,
  setProfileCard,
  removeLoginPage,
  loginPage,
}) => {
  return (
    <div>
      <Navbar
        profileCard={profileCard}
        setProfileCard={setProfileCard}
        removeLoginPage={removeLoginPage}
        loginPage={loginPage}></Navbar>
      <Wallframe></Wallframe>
      <Scrollbar></Scrollbar>
      <FillterContextProvider>
        {" "}
        <Product></Product>
      </FillterContextProvider>
      <EmailSubscription></EmailSubscription>
      <Fooder></Fooder>
      <CopyRight></CopyRight>
      {/* <ToastContainer></ToastContainer> */}
    </div>
  );
};
