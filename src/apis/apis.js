import axios from "axios";

export const getUserRestaurant_list = async () => {
  let userInfo = await axios.get("/api/v1/1").then((res) => {
    console.log(res.data);
    return res.data;
  });
  return userInfo.restaurant_list;
};
