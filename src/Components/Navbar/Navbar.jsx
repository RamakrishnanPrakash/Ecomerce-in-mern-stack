import { useContext, useState, useEffect } from "react";
import "./Navbar.css";
import { Xicon } from "../../assets/Icons/Icons";
import { Profile } from "../Profile/Profile";
import { LoginPage } from "../Login/LoginPage";
import { Link, NavLink } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { toast } from "react-toastify";
export const Navbar = ({
  profileCard,
  setProfileCard,
  removeLoginPage,
  loginPage,
}) => {
  const [menuIcon, setMenuIcon] = useState(true);
  const storeContext = useContext(StoreContext);
  const handleClick = () => {
    if (storeContext.cookie == false) {
      return toast.error("Please login your account");
    }
    if (storeContext.cardLen <= 0) {
      return toast.error("Please add your mahal card");
    }
    // storeContext.setCookie(false);
    // !storeContext.cookie ? toast.error("Please login your account") : "";
  };

  return (
    <>
      <section className="w-full bg-white fixed  top-0  z-20 left-[50%] translate-x-[-50%]">
        <section className=" navbar hidden sm:flex items-center justify-around  container bg-slate-300 p-1 m-auto mb-2 rounded-3xl ">
          <div className="logo flex items-center  gap-1  font-bold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-9 text-lime-100">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
              />
            </svg>

            <h2 className="text-lime-300 text-2xl">Venuemahal</h2>
          </div>

          <ul className="flex gap-3 text-white text-sm font-bold">
            <li>
              <NavLink
                to={"/"}
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-b-white cursor-pointer duration-700 hover:font-bold"
                    : "cursor-pointer duration-700 hover:font-bold"
                }>
                HOME
              </NavLink>
            </li>
            <li>
              <a
                href="#contact"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-b-white cursor-pointer duration-700 hover:font-bold"
                    : "cursor-pointer duration-700 hover:font-bold"
                }>
                CONTACT
              </a>
            </li>
            <li>
              <NavLink
                to="/order"
                className={({ isActive }) =>
                  isActive
                    ? "border-b-2 border-b-white cursor-pointer duration-700 hover:font-bold"
                    : "cursor-pointer duration-700 hover:font-bold"
                }>
                ORDER
              </NavLink>
            </li>
          </ul>

          <div className="login relative w-20 h-14 flex items-center ">
            <div className="right-side flex items-center justify-center gap-3">
              <a onClick={() => setProfileCard(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-7 text-white cursor-pointer">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </a>

              <Link
                to={
                  storeContext.cookie == true && !storeContext.cardLen <= 0
                    ? "/addCard"
                    : "/"
                }
                onClick={handleClick}>
                <div className="card  ">
                  <div className="card-logo relative ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-7 text-white cursor-pointer">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                      />
                    </svg>
                  </div>
                  <p className=" w-6 h-6 flex items-center justify-center  absolute top-0 right-0 p-1 bg-black text-lime-50 rounded-full">
                    {storeContext.cardLen}
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </section>
      <section className="  w-full bg-white fixed  top-0  z-20 left-[50%] translate-x-[-50%] ">
        <section className="navbar container h-20 flex items-center justify-between  bg-slate-300 p-2 px-3 m-auto    sticky z-50    sm:hidden ">
          <div className="logo  flex items-center gap-1 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-9 text-lime-100">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z"
              />
            </svg>

            <h2 className="text-lime-300 text-2xl">Venuemahal</h2>
          </div>
          <div className="login  flex items-center ">
            <div className="right-side flex items-center justify-center gap-3">
              <div onClick={() => setProfileCard(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="size-7 text-white cursor-pointer">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </div>

              <div className="card relative  w-11 ">
                <div className="card-logo relative ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-7 text-white cursor-pointer">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </div>
                <p className=" w-6 h-6 flex items-center justify-center  absolute top-0 right-0 p-1 bg-black text-lime-50 rounded-full">
                  {storeContext.cardLen}
                </p>
              </div>
              {menuIcon ? (
                <p
                  onClick={() => {
                    setMenuIcon(false);
                  }}>
                  {" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="size-7 text-white cursor-pointer">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  </svg>
                </p>
              ) : (
                <p onClick={() => setMenuIcon(true)}>
                  <Xicon style={"size-7 text-white cursor-pointer"}></Xicon>
                </p>
              )}
            </div>
          </div>
          <div
            className={
              menuIcon
                ? "fixed -top-96 left-0 duration-200  "
                : "fixed top-20 left-0 navbar w-full duration-1000 "
            }>
            <ul className=" w-3/4 flex flex-col gap-2 bg backdrop-blur-sm bg-white/40 p-3  mx-auto  mb-2 rounded-md  ">
              <li className=" font-bold duration-700 text-center text-white hover:text-yellow-200 duration-700 ">
                <a href="">Home</a>
              </li>
              <li className=" font-bold duration-700 text-center text-white hover:text-yellow-200 duration-700 ">
                <a href="">Collection</a>
              </li>
              <li className=" font-bold duration-700 text-center text-white hover:text-yellow-200 duration-700 ">
                <a href="">Order </a>
              </li>
              <li className=" font-bold duration-700 text-center text-white hover:text-yellow-200 duration-700">
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
        </section>
      </section>
      <Profile
        profileCard={profileCard}
        setProfileCard={setProfileCard}
        removeLoginPage={removeLoginPage}
      />
      <LoginPage loginPage={loginPage} removeLoginPage={removeLoginPage} />
    </>
  );
};
