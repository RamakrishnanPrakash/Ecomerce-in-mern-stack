import { createContext, useState, useEffect } from "react";
import { mostViewed } from "../assets/mostViewed.json";
import { districtList, emailImage } from "../assets/public.js";
import axios from "axios";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const URL = "http://localhost:2000";
  const [userDetails, setUserDetails] = useState({});
  const [cardLen, setCardLen] = useState(0);
  const [cookie, setCookie] = useState(false);

  const contextValue = {
    URL,
    mostViewed,
    districtList,
    emailImage,
    userDetails,
    setUserDetails,
    cardLen,
    setCardLen,
    cookie,
    setCookie,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
