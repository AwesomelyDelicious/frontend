import axios from "axios";

export const getUserRestaurant_list = async () => {
  let userInfo = await axios
    .get("/api/v1/1")
    .then((res) => res.data)
    .catch((e) => new Error(e));
  return userInfo;
};
