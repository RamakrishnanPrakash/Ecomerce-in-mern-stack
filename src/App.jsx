import React from "react";
// import { Navbar } from "./Components/Navbar/Navbar";
// import { Wallframe } from "./Components/Wallframe";
// import { Scrollbar } from "./Components/Horizantal/Scrollbar";
import { Home } from "./pages/Home";
import { BookingPage } from "./pages/BookingPage";
import { useState, useContext, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./app.css";
import { AddCard } from "./pages/AddCard";
import { StoreContext } from "./context/StoreContext";
import axios from "axios";

const App = () => {
  // const URL =  "http://localhost:2000/";

  const [profileCard, setProfileCard] = useState(false);
  const [loginPage, removeLoginPage] = useState(false);
  const storeContext = useContext(StoreContext);
  const URL = storeContext.URL;

  useEffect(() => {
    const checkCookie = (name) => {
      const cookies = document.cookie.split("; ");
      return cookies.some((cookie) => cookie.startsWith(`${name}=`));
    };

    storeContext.setCookie(checkCookie("user"));
    console.log("Cookie", storeContext.cookie);
  }, [storeContext.cookie]);
  console.log("Cookie", storeContext.cookie);
  useEffect(() => {
    const getLen = async () => {
      if (storeContext.cookie == true) {
        const responce = await axios.get(`${URL}/api/card//totalCard`, {
          withCredentials: true,
        });
        if (responce.data.success) {
          storeContext.setCardLen(responce.data.length);
        }
      }
    };
    getLen();
  }, [storeContext.cookie]);
  // Accessing the "myCookie" value

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                profileCard={profileCard}
                setProfileCard={setProfileCard}
                loginPage={loginPage}
                removeLoginPage={removeLoginPage}></Home>
            }
          />
          <Route
            path="explore/"
            element={
              <BookingPage
                profileCard={profileCard}
                setProfileCard={setProfileCard}
                loginPage={loginPage}
                removeLoginPage={removeLoginPage}></BookingPage>
            }
          />
          <Route
            path="/addCard"
            element={
              <AddCard
                profileCard={profileCard}
                setProfileCard={setProfileCard}
                loginPage={loginPage}
                removeLoginPage={removeLoginPage}></AddCard>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
