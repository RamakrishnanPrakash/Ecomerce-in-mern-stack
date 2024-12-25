import { useContext, useRef, useState } from "react";
import {
  NonVegFoodIcon,
  Veg_NonvegFood_Icon,
  VegFoodIcon,
} from "../../../assets/Icons/Icons";

import { FillterContext } from "../../../context/FillterContext";

export const FoodOption = () => {
  const foodList = [
    {
      htmlFor: "food",
      name: "food",
      id: "food",
      content: "Veg-Food",
      value: "veg_food",
      icon: (
        <VegFoodIcon
          style={"text-2xl text-green-300 hover:text-white cursor-pointer"}
          id={"food"}
        />
      ),
    },

    {
      htmlFor: "food-2",
      name: "food",
      id: "food-2",
      content: "NonVeg-Food",
      value: "non_veg_food",
      icon: (
        <NonVegFoodIcon
          style={"text-xl text-green-300 hover:text-white cursor-pointer"}
          id={"food-2"}
        />
      ),
    },

    {
      htmlFor: "food-3",
      name: "food",
      id: "food-3",
      content: "Veg & NonVeg Food",
      value: "",
      icon: (
        <Veg_NonvegFood_Icon
          style={"text-xl text-green-300 hover:text-white cursor-pointer"}
          id={"food-3"}
        />
      ),
    },
  ];

  const filter = useContext(FillterContext);
  const getOption = (e, state) => {
    console.log("e.target.value", e.target.value);
    setbgAdd(e.target.value);
    filter.setFoodChoice(e.target.value);
  };

  //this state variable set background color in the radio button component
  const [bgAdd, setbgAdd] = useState("");

  return (
    <div className=" w-full">
      <p className="ml-2 text-lg p-1 pr-2 mb-1 text-gray-100 border-b-2  border-gray-50">
        Select meals:
      </p>
      {foodList.map((food) => (
        <div>
          <label
            htmlFor={food.htmlFor}
            className={
              bgAdd == food.value
                ? "cursor-pointer w-full flex items-center justify-between hover:text-green-300 mb-1 p-2 rounded-xl bg-pink-600 transition-all delay-[85ms]"
                : "cursor-pointer w-full flex items-center justify-between hover:text-green-300 mb-1 p-2 rounded-xl bg-gray-800 transition-all delay-[60ms] "
            }>
            <p className="">
              {" "}
              <input
                type="radio"
                name={food.name}
                id={food.id}
                value={food.value}
                onChange={(e) => getOption(e)}
              />
              {"  " + food.content}
            </p>
            <span className="text-right mr-3">{food.icon}</span>
          </label>
        </div>
      ))}
    </div>
  );
};
