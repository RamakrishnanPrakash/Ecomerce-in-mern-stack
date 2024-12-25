import { useContext, useEffect, useState } from "react";
import { ContactIcon, UserIcon, XiconSolid } from "../../assets/Icons/Icons";
import { profileImg } from "../../assets/public";
import { CameraIcon } from "../../assets/Icons/Icons";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";
export const Profile = ({ profileCard, setProfileCard, removeLoginPage }) => {
  const [profileImage, setProfileImg] = useState(profileImg.images);
  const [file, setFile] = useState(null);
  const [profileInfo, setProfileInfo] = useState({
    name: "",
    email: "",
    imgUrl: "",
    createdAt: "",
    updatedAt: "",
    address: {
      city: "",
      country: "",
      state: "",
      street: "",
      zipCode: "",
    },
  });
  const storeContext = useContext(StoreContext);
  const URL = storeContext.URL;
  const showLoginPage = () => {
    removeLoginPage(true);
    setProfileCard(false);
  };
  const handleFileChange = async (e) => {
    console.log(e.target.files[0]);
    const selectedFile = e.target.files[0];

    if (!selectedFile) {
      toast.error("Please select your profile image!");
      return;
    }

    // Update state
    setFile(selectedFile);

    const formData = new FormData();
    formData.append("image", selectedFile);

    // Debugging formData
    for (let pair of formData.entries()) {
      console.log(`${pair[0]}: ${pair[1]}`);
    }

    try {
      const response = await axios.post(`${URL}/api/profile/img`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true, // Include cookies if needed
      });

      if (response.data.success) {
        // Update profile information
        setProfileInfo((prev) => ({
          ...prev,
          imgUrl: response.data.img,
        }));

        toast.success("Image uploaded successfully!");
      } else {
        toast.error("Failed to upload image. Please try again.");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      toast.error("Image upload failed.");
    }
  };

  // if (file) {
  //   const filePath = URL.createObjectURL(file);
  //   console.log(filePath);
  //   setProfileImg(filePath); //filepath store temporarly
  // }

  const logout = () => {
    document.cookie = `user=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    storeContext.setCookie(false);
    setProfileCard(false);
    window.location.reload();
  };

  //if user login fetch our details

  useEffect(() => {
    const getProfileInfo = async () => {
      if (storeContext.cookie == true) {
        const responce = await axios.post(
          `${URL}/api/profile/info`,
          {},
          { withCredentials: true }
        );
        console.log(responce);
        if (responce.data.success) {
          setProfileInfo((prev) => ({
            ...prev,
            name: responce.data.info.username,
            email: responce.data.info.email,
            imgUrl: responce.data.info.imageUrl,
            createdAt: responce.data.info.createdAt,
            updatedAt: responce.data.info.updatedAt,
            address: {
              ...prev.address,
              city: responce.data.info.address.city,
              country: responce.data.info.address.country,
              state: responce.data.info.address.state,
              street: responce.data.info.address.street,
              zipCode: responce.data.info.address.zipCode,
            },
          }));
        }
      }
      return;
    };

    getProfileInfo();
  }, [storeContext.cookie]);
  console.log(profileInfo);
  return (
    <>
      {!storeContext.cookie ? (
        <div
          className={
            profileCard
              ? `block fixed top-[70px] min-w-[200px]  right-9 z-20
     bg-white shadow-lg shadow-gray-600 p-5 rounded-lg duration-1000 ease-in-out`
              : `hidden duration-1000`
          }>
          <div className="w-full flex items-center flex-col gap-3 relative ">
            <div
              className="absolute top-0 right-0"
              onClick={() => setProfileCard(false)}>
              <XiconSolid
                style={`size-5 p-[1px]  cursor-pointer text-gray-700 `}></XiconSolid>
            </div>
            <UserIcon
              style={
                "size-12 text-white p-1 shadow-lg shadow-gray-600  border-2 border-gray-700 bg-pink-500 rounded-full"
              }></UserIcon>
            <h1 className="my-1 text-lg text-pink-500 font-bold">
              Hey! Guys..
            </h1>
            <button
              className="border-0 outline-0 py-1 px-3 rounded-lg bg-pink-500 text-white"
              onClick={() => showLoginPage()}>
              Login
            </button>
          </div>
        </div>
      ) : (
        <div
          className={
            profileCard
              ? `block fixed top-[70px] min-w-[350px]  right-9 z-20
   bg-white shadow-lg shadow-gray-600 p-5 rounded-lg rounded-tl-[20px] duration-1000 ease-in-out`
              : `hidden duration-1000`
          }>
          <div
            className="w-full flex justify-end"
            onClick={() => setProfileCard(false)}>
            <XiconSolid
              style={
                "size-6 text-pink-500 cursor-pointer rounded-full duration-600 hover:bg-pink-500 hover:text-white "
              }
            />
          </div>

          <div className="w-full p-2">
            <div className="w-full flex items-center justify-center">
              <div className="bg-pink-500 rounded-full shadow-lg shadow-gray-700 relative w-[100px] h-[100px]">
                <div className=" absolute -bottom-1 -right-2 bg-white cursor-pointer overflow-hidden rounded-full p-2 shadow-lg shadow-gray-800">
                  <CameraIcon style={"size-8 text-pink-500 cursor-pointer "} />
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileChange(e)}
                    className="absolute inset-0 opacity-0 cursor-pointer text-[1px]   bg-slate-500"
                  />
                </div>
                <img
                  src={
                    profileInfo.imgUrl !== ""
                      ? `${URL}/uploads/${profileInfo.imgUrl}`
                      : profileImage
                  }
                  alt={profileImg.des}
                  className="w-full h-full rounded-full bg-cover bg-center"
                />
              </div>
            </div>
            <div className="w-full">
              <h1 className="mt-2 text-xl text-gray-800 font-bold text-center">
                Hey!! {profileInfo.name}
              </h1>
              <h6 className="mt-2 text-lg text-gray-500 font-bold text-center">
                {profileInfo.email}
              </h6>
              <p className="mt-2 text-md text-gray-500 font-bold text-center">
                createdAt:
                {new Date(profileInfo.createdAt).toLocaleDateString("en-GB")}
              </p>
              <p
                className="mt-2 text-md text-white bg-pink-500 py-2 cursor-pointer rounded-md shadow-lg
               shadow-gray-700 px-2 font-bold text-center"
                onClick={logout}>
                Logout
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
