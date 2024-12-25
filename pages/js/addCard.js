import axios from "axios";

const fetchAddCardItem = async (URL) => {
  try {
    const responce = await axios.get(`${URL}/api/card/userCard`, {
      withCredentials: true,
    });
    return responce;
  } catch (error) {
    console.log(error.message);
    return { success: false, msg: "Error has been ouccured" };
  }
};

const formatCurrency = (currency) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(currency);
};

export { fetchAddCardItem, formatCurrency };
