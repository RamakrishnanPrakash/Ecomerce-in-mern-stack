import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const FillterContext = createContext(null);

const FillterContextProvider = (props) => {
  const [foodChoice, setFoodChoice] = useState("veg_nonveg_food");
  const [districtChoice, setDistrictChioce] = useState("all");
  const [acBtn, setAcBtn] = useState(true);
  const [nonAcBtn, setNonAcBtn] = useState(false);
  const [min, setMin] = useState(10000);
  const [max, setMax] = useState(200000);

  const URL = "http://localhost:2000";
  const [listAllMahal, setListAllMahal] = useState([]);

  const fetchMahalData = async () => {
    const responce = await axios.get(`${URL}/api/mahal/listmahal`);
    if (responce.data.success) {
      setListAllMahal(responce.data.listMahal);
      return responce.data.listMahal;
    }
  };

  //this use effect default fetch api from list all mahal

  //this use effect function filter the list of mahal data in filter choice
  useEffect(() => {
    // First, fetch the data
    const fetchData = async () => {
      const raw = await fetchMahalData();

      // Fetch data once
      // console.log(listAllMahal);
      let filteredData = [...raw];

      // // Filter by district if not "all"
      if (districtChoice !== "all") {
        filteredData = filteredData.filter(
          (mahal) => mahal.district === districtChoice
        );
      } else {
        await fetchMahalData();
      }

      // Filter by food choice
      if (foodChoice === "veg_food") {
        filteredData = filteredData.filter((mahal) => mahal.foodtype.vegfood);
      } else if (foodChoice === "non_veg_food") {
        filteredData = filteredData.filter(
          (mahal) => mahal.foodtype.non_veg_food
        );
      } else {
        // If no specific food choice, include all that have any valid food type
        filteredData = filteredData.filter(
          (mahal) =>
            mahal.foodprice.vegprice > 0 &&
            mahal.foodprice.non_veg_price > 0 &&
            mahal.foodprice.veg_and_nonveg > 0
        );
      }

      filteredData = filteredData.filter((mahal) =>
        acBtn ? mahal.ac : !mahal.ac
      );

      if (min > 0) {
        filteredData = filteredData.filter((mahal) => mahal.amount > min);
      }
      if (max < 200000) {
        filteredData = filteredData.filter((mahal) => mahal.amount < max);
      }
      // Update the state with filtered data
      console.log(filteredData);
      setListAllMahal(filteredData);
    };

    fetchData();
  }, [districtChoice, foodChoice, acBtn, min, max]);

  const fillterContextValue = {
    foodChoice,
    setFoodChoice,
    districtChoice,
    setDistrictChioce,
    acBtn,
    nonAcBtn,
    setAcBtn,
    setNonAcBtn,
    min,
    max,
    setMin,
    setMax,
    listAllMahal,
  };

  return (
    <FillterContext.Provider value={fillterContextValue}>
      {props.children}
    </FillterContext.Provider>
  );
};

export default FillterContextProvider;
