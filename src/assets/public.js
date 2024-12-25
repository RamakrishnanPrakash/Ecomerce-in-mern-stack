import Home from "./Images/Home.jpg";
import Home2 from "./Images/1.jpg";
import Home3 from "./Images/2.jpg";
import Home4 from "./Images/3.jpg";
import Home5 from "./Images/4.jpg";
import email from "./Images/email.png";
import veg from "./Images/veg.png";
import profile from "./Images/profile.png";

const images = [
  {
    id: 1,
    image: Home,
  },
  {
    id: 2,
    image: Home2,
  },

  {
    id: 3,
    image: Home3,
  },

  {
    id: 4,
    image: Home4,
  },

  {
    id: 5,
    image: Home5,
  },
];
export default images;

export const emailImage = {
  image: email,
  des: "This email subscription",
};

export const vegImage = {
  image: veg,
  des: "This is food image",
};

export const profileImg = {
  images: profile,
  des: "This is profile image",
};

let district = [
  "Ariyalur       ",
  "Chengalpattu   ",
  "Chennai        ",
  "Coimbatore     ",
  "Cuddalore      ",
  "Dharmapuri     ",
  "Dindigul       ",
  "Erode          ",
  "Kallakurichi   ",
  "Kancheepuram   ",
  "Karur          ",
  "Krishnagiri    ",
  "Madurai        ",
  "Mayiladuthurai ",
  "Nagapattinam   ",
  "Kanniyakumari  ",
  "Namakkal       ",
  "Perambalur     ",
  "Pudukottai     ",
  "Ramanathapuram ",
  "Ranipet        ",
  "Salem          ",
  "Sivagangai     ",
  "Tenkasi        ",
  "Thanjavur      ",
  "Theni          ",
  "Thiruvallur    ",
  "Thiruvarur     ",
  "Thoothukudi    ",
  "Trichirappalli ",
  "Thirunelveli   ",
  "Tirupathur     ",
  "Tiruppur       ",
  "Tiruvannamalai ",
  "NilgirisUdagamandalam",
  "Vellore",
  "Viluppuram",
  "Virudhunagar",
];

//convert to object and data lowercase
let districtList1 = [];
district.forEach((data, index) => {
  districtList1.push({
    id: index + 1,
    data: data.toLowerCase(),
  });
});

export const districtList = [...districtList1];
