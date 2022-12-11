import React, { useEffect } from "react";
import { useState } from "react";
import { getUserRestaurant_list } from "../apis/apis";
import Logout from "./Logout";
import Store from "./Store";

function MyStoreList({ userInfo }) {
  // console.log("aaa");
  // console.log(userRestaurantList);
  return (
    <div className="mt-14">
      <h1>{userInfo.nick_name}님 어서오세요!</h1>
      <div>맛집 리스트 목록</div>
      <ul>
        {userInfo.restaurant_list.map((restaurant) => (
          <Store restaurant={restaurant}></Store>
        ))}
      </ul>
      <Logout></Logout>
    </div>
  );
}

export default MyStoreList;
