import React from "react";
import Logout from "./Logout";
import Store from "./Store";
import { v4 as uuidv4 } from "uuid";

function MyStoreList({ userInfo }) {
  // console.log("aaa");
  // console.log(userRestaurantList);
  return (
    <div className="mt-14 flex justify-center items-center flex-col">
      <h1 className="text-lg font-bold mb-3">
        {userInfo.nick_name}님 어서오세요!
      </h1>
      <div className="text-s mb-4">맛집 리스트 목록</div>
      <ul className="overflow-y-scroll overflow-hidden h-48">
        {userInfo.restaurant_list.map((restaurant) => (
          <Store key={uuidv4()} restaurant={restaurant}></Store>
        ))}
      </ul>
      <Logout></Logout>
    </div>
  );
}

export default MyStoreList;
