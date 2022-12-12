import React from "react";
import Logout from "./Logout";
import Store from "./Store";
import { v4 as uuidv4 } from "uuid";

function MyStoreList({ userInfo }) {
  // console.log("aaa");
  // console.log(userRestaurantList);
  return (
    <div className="mt-14">
      <h1>{userInfo.nickName}님 어서오세요!</h1>
      <div>맛집 리스트 목록</div>
      <ul>
        {userInfo.restaurantList.map((restaurant) => (
          <Store key={uuidv4()} restaurant={restaurant}></Store>
        ))}
      </ul>
      <Logout></Logout>
    </div>
  );
}

export default MyStoreList;
