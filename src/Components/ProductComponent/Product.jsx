import React, { useState } from "react";
import { ProductChild } from "./ProductChild";
import "./Layout.css";
import { ProductHeading } from "./ProductHeading";
import { ProductCard } from "./ProductCard";
import { Sidebar } from "./Sidebar";
import { LeftArrowIcon } from "../../assets/Icons/Icons";

export const Product = () => {
  const [fillterCard, setFillterCard] = useState(true);
  return (
    <section className="w-full h-auto mt-[9rem] mb-32  ">
      {/* <ProductChild></ProductChild> */}
      <div className="flex justify-center relative">
        <Sidebar
          fillterCard={fillterCard}
          setFillterCard={setFillterCard}></Sidebar>
        <div className="right-sidebar w-screen lg:w-[75%]  ">
          <div className=" flex gap-2 mb-2 ml-6 items-center lg:hidden">
            <p onClick={() => setFillterCard(false)}>
              {" "}
              <LeftArrowIcon
                style={`text-white size-12 font-bold bg-pink-700 p-2 rounded-full
                 hover:bg-gray-700 hover:text-white cursor-pointer`}></LeftArrowIcon>
            </p>
            <p
              className="text-lg font-bold bg-lime-300 p-2 rounded-lg border-gray-600
            ">
              Fillter your mahal !!
            </p>
          </div>
          <ProductHeading></ProductHeading>
          <ProductCard></ProductCard>
        </div>
      </div>
    </section>
  );
};
