import React from "react";
import {
  CollectionIcon,
  ContactIcon,
  FaceBookIcon,
  HomeIcon,
  InstagramIcon,
  LinkedinIcon,
  OrderIcon,
  WhatsappIcon,
} from "../../assets/Icons/Icons";

export const Fooder = () => {
  return (
    <div
      id="contact"
      className="container right-appear my-2 mx-auto rounded-2xl min-h-[50vh] bg-white shadow-lg shadow-gray-900 
    flex items-center justify-around flex-wrap gap-2 p-2 ">
      <div className="w-full lg:w-[400px] bg-slate-100 rounded-xl shadow-lg shadow-gray-900 p-5 ">
        <h1 className="text-2xl text-pink-600 font-bold mb-1 border-b-2 border-gray-900">
          VENUE MAHAL.com
        </h1>
        <p className="mb-1 text-lg text-gray-800 font-medium">
          122,Old bus stand
        </p>
        <p className="mb-1 text-lg text-gray-800 font-medium">
          Big Temple near ,Thanjavur-614614
        </p>
        <p className="mb-1 text-lg text-gray-800 font-medium">
          <strong>Phone:</strong> 9837892345
        </p>
        <p className="mb-1 text-lg text-gray-800 font-medium">
          <strong>Email:</strong>Venuemahal@gmail.com
        </p>
      </div>
      <div className="w-full lg:w-[400px] bg-slate-100 rounded-xl shadow-lg shadow-gray-900 p-5 px-7">
        <h4
          className="text-2xl text-pink-600 font-bold mb-1
         border-b-2 border-gray-900">
          Usefull Links
        </h4>
        <ul>
          <li className="flex gap-3">
            <a>
              <HomeIcon style={"size-6"}></HomeIcon>
            </a>
            <a href="" className="mb-1 text-lg text-gray-800 font-medium">
              Home
            </a>
          </li>
          <li className="flex gap-3">
            <a>
              <CollectionIcon style={"size-6"}></CollectionIcon>
            </a>
            <a href="" className="mb-1 text-lg text-gray-800 font-medium">
              Collection
            </a>
          </li>
          <li className="flex gap-3">
            <a>
              <OrderIcon style={"size-6"}></OrderIcon>
            </a>
            <a href="" className="mb-1 text-lg text-gray-800 font-medium">
              Order
            </a>
          </li>
          <li className="flex gap-3">
            <a className="mb-1 text-lg text-gray-800 font-medium">
              <ContactIcon style={"size-6"}></ContactIcon>
            </a>
            <a href="" className="mb-1 text-lg text-gray-800 font-medium">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="w-full lg:w-[400px] bg-slate-100 rounded-xl shadow-lg shadow-gray-900 p-5 ">
        <h1 className="text-2xl text-pink-600 font-bold mb-1 border-b-2 border-gray-900">
          Our Social Networks
        </h1>
        <h6 className="mb-1 text-lg text-gray-800 font-medium">
          watch out us on social media and if you wish support us!
        </h6>

        <div className="flex gap-3">
          <a>
            <InstagramIcon
              style={
                "text-xl py-2 cursor-pointer text-pink-700 hover:text-gray-700 hover:duration-700"
              }
              id={"social"}></InstagramIcon>
          </a>
          <a>
            <FaceBookIcon
              style={
                "text-xl py-2 cursor-pointer text-pink-700 hover:text-gray-700 hover:duration-700"
              }
              id={"social"}></FaceBookIcon>
          </a>
          <a>
            <LinkedinIcon
              style={
                "text-xl py-2 cursor-pointer text-pink-700 hover:text-gray-700 hover:duration-700"
              }
              id={"social"}></LinkedinIcon>
          </a>
          <a>
            <WhatsappIcon
              style={
                "text-xl py-2  cursor-pointer text-pink-700 hover:text-gray-700 hover:duration-700"
              }
              id={"social"}></WhatsappIcon>
          </a>
        </div>
      </div>
    </div>
  );
};
