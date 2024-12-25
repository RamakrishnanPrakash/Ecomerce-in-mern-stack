import React, { useState } from "react";
import { ProductHeading } from "./ProductHeading";
import { ProductCard } from "./ProductCard";
import { Sidebar } from "./Sidebar";

export const ProductChild = () => {
  return (
    <div className=" relative md:flex container mx-auto">
      <div className="w-full   h-screen ">
        <ProductHeading></ProductHeading>
        <ProductCard></ProductCard>
      </div>
    </div>
  );
};
