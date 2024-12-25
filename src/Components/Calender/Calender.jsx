import React, { useState } from "react";
import { LeftArrowIcon, RightArrowIcon, Xicon } from "../../assets/Icons/Icons";
import { MonthSeclect } from "./MonthSeclect";
import { YearSelector } from "./YearSelector";

export const Calender = ({ removeCalender, setRemoveCalender }) => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [leftBtn, setLeftBtn] = useState(false);
  const [rightBtn, setRightBtn] = useState(false);
  const Month = [
    "January",
    "February",
    "March",
    "Aprill",
    "May",
    "June",
    "July",
    "August",
    "Semptember",
    "October",
    "November",
    "December",
  ];
  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const year = Array.from(
    { length: 10 },
    (_, i) => new Date().getFullYear() + i
  );
  // console.log(year);

  const daysInMonth = () => {
    const dayArray = [];
    const firstDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth(),
      1
    );
    const lastDate = new Date(
      selectedDate.getFullYear(),
      selectedDate.getMonth() + 1,
      0
    );
    // console.log("FirstDate:" + firstDate);
    // console.log("LastDate:" + lastDate);

    for (let i = 0; i < firstDate.getDay(); i++) dayArray.push(null);
    for (let j = 1; j <= lastDate.getDate(); j++) {
      dayArray.push(
        new Date(selectedDate.getFullYear(), selectedDate.getMonth(), j)
      );
    }
    // console.log("DayArray:" + dayArray);
    return dayArray;
  };

  const leftHandleClick = () => {
    const currDate = new Date();
    if (currDate.getMonth() < selectedDate.getMonth()) setLeftBtn(true);
    if (currDate.getMonth() > selectedDate.getMonth()) {
      setLeftBtn(false);
      setSelectedDate(
        new Date(selectedDate.getFullYear(), selectedDate.getMonth() - 1, 1)
      );
    }
  };
  const rightHandleClick = () => {
    setSelectedDate(
      new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 1)
    );
  };

  console.log(selectedDate);

  return (
    <div
      className={
        removeCalender
          ? `block w-[100vw] h-[100vh] fixed z-20 top-0 left-0 backdrop-blur-3xl bg-trasparent`
          : "hidden"
      }>
      <div className="w-full h-full flex mt-[80px] md:mt-5 justify-center items-start">
        <div className="w-[80%] md:w-[700px] min-h-[500px] bg-slate-100 p-3 rounded-md shadow-xl shadow-gray-800">
          <div className="w-full bg-pink-600 pt-2  text-center relative px-3">
            <div className="absolute top-1 right-3">
              {" "}
              <h1 onClick={() => setRemoveCalender(false)}>
                <Xicon style={"size-8 text-white cursor-pointer"} />
              </h1>
            </div>{" "}
            <a className="text-center text-xl font-bold  text-white pb-1 border-b-2 border-white font-sans">
              {selectedDate.getDate() > 10
                ? `${selectedDate.getDate()} `
                : `0${selectedDate.getDate()}`}
              {`/${
                Month[selectedDate.getMonth()]
              }/${selectedDate.getFullYear()}`}
            </a>
          </div>
          <div className="bg-pink-600 p-2 text-white font-bold">
            <div className="flex items-center justify-between">
              <h1 className="text-xl">Venumahal</h1>

              <p className="text-md font-light">Pick your Booking Date</p>
            </div>
            <div className="flex items-center justify-between mt-1 ">
              <div className=" hidden md:block p-1">
                <button
                  className="outline-0 border-0"
                  disabled={leftBtn}
                  onClick={leftHandleClick}>
                  <LeftArrowIcon
                    style={
                      "size-8 bg-white text-pink-500 p-1 rounded-full cursor-pointer shadow-md shadow-gray-800"
                    }
                  />
                </button>
              </div>
              <div>
                <MonthSeclect
                  option={Month}
                  setSelectedDate={setSelectedDate}
                  selectedDate={selectedDate}
                />
              </div>
              <div>
                <YearSelector
                  option={year}
                  setSelectedDate={setSelectedDate}
                  selectedDate={selectedDate}
                />
              </div>
              <div className=" block md:hidden p-1">
                <button
                  className="outline-0 border-0"
                  disabled={leftBtn}
                  onClick={leftHandleClick}>
                  <LeftArrowIcon
                    style={
                      "size-8 bg-white text-pink-500 p-1 rounded-full cursor-pointer shadow-md shadow-gray-800"
                    }
                  />
                </button>
              </div>
              <div className="p-1">
                <button
                  className="outline-0 border-0"
                  onClick={rightHandleClick}>
                  <RightArrowIcon
                    style={
                      "size-8 bg-white text-pink-500 p-1 rounded-full cursor-pointer shadow-md shadow-gray-800"
                    }
                  />
                </button>
              </div>
            </div>
          </div>
          <div className=" w-full grid grid-cols-7 bg-pink-600 mb-3 ">
            {daysOfWeek.map((days, index) => (
              <div
                className="text-center p-1 font-bold text-lg text-white"
                key={index}>
                {days}
              </div>
            ))}
          </div>

          <div
            className="grid grid-cols-7 text-center gap-2
          ">
            {daysInMonth().map((date, index) =>
              date ? (
                <div
                  className={
                    (selectedDate.getDate() == date.getDate()) &
                    (selectedDate.getMonth() == date.getMonth()) &
                    (selectedDate.getFullYear() == date.getFullYear())
                      ? `py-1 w-50px] sm:w-auto  md:py-3 text-lg font-bold md:text-2xl md:font-bold text-white bg-pink-600  border-2 *
                 border-gray-500 cursor-pointer rounded-md hover:bg-pink-600 hover:text-white hover:border-0`
                      : `py-1 w-[50px] sm:w-auto  md:py-3 text-lg font-bold md:text-2xl md:font-bold bg-white text-pink-600 border-2 *
                 border-gray-500 cursor-pointer rounded-md hover:bg-pink-600 hover:text-white hover:border-0`
                  }
                  onClick={() => setSelectedDate(date)}>
                  {date.getDate()}
                </div>
              ) : (
                <div className="bg-pink-200"></div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
