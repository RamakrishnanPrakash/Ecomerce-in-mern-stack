import { useContext, useState } from "react";
import { SearchIcon } from "../../../assets/Icons/Icons";
import { StoreContext } from "../../../context/StoreContext";
import { FillterContext } from "../../../context/FillterContext";

export const Searchbox = () => {
  const districtContext = useContext(StoreContext);
  const filterDataContext = useContext(FillterContext);
  const [district, setDistrict] = useState(null);
  const [districtName, setDistrictName] = useState([
    ...districtContext.districtList,
  ]);

  const [filterDistrict, setFilterDistrict] = useState([]);
  const [appear, setAppear] = useState(false);

  const findDistrict = (e) => {
    if (e.target.value == "") {
      filterDataContext.setDistrictChioce("all");
    }
    setDistrict(e.target.value);
    const filterDistricts = districtName.filter((item) => {
      return item.data.includes(e.target.value.toLowerCase());
    });

    //filter district
    setFilterDistrict([...filterDistricts]);
    if (e.target.value.length == 0) setAppear(false);
    else setAppear(true);
  };

  //this function set distric in like thanjavur or Chennai
  const DisappearWindow = (data) => {
    setDistrict(data.trim());
    filterDataContext.setDistrictChioce(
      data.trim().charAt(0).toUpperCase() + data.trim().slice(1)
    );
    setAppear(false);
  };

  const DistrictName = ({ data }) => {
    return (
      <>
        {data.map((data) => (
          <p
            className="ml-4 px-2 py-1 cursor-pointer hover:bg-lime-300 hover:text-gray-900"
            onClick={() => DisappearWindow(data.data.trim())}>
            {data.data.charAt(0).toUpperCase() + data.data.slice(1).trim()}
          </p>
        ))}
      </>
    );
  };

  return (
    <div className=" mt-6">
      <div className="flex  w-full bg-gray-800 p-1 rounded-lg ">
        <input
          type="text"
          placeholder="Enter your District:"
          className="w-[90%] bg-transparent text-white border-0 outline-0
          pl-2 cursor-pointer p-1 text-lg"
          value={
            district ? district.charAt(0).toUpperCase() + district.slice(1) : ""
          }
          onChange={(e) => findDistrict(e)}
        />
        <a>
          <SearchIcon
            style={"size-8 text-white p-1 cursor-pointer"}></SearchIcon>
        </a>
      </div>
      <div
        className={
          appear
            ? `max-h-32  searchbox overflow-y-scroll py-1 bg-white
       text-gray-900 rounded-lg shadow-lg shadow-gray-700   `
            : "hidden"
        }>
        {filterDistrict.length > 0 ? (
          <DistrictName data={filterDistrict} />
        ) : (
          <p
            className="ml-4 px-2 py-1 cursor-pointer hover:bg-lime-300 hover:text-gray-900"
            onClick={() => DisappearWindow("")}>
            District not found
          </p>
        )}
      </div>
    </div>
  );
};
