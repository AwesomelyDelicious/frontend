import React from "react";
import Logout from "./Logout";
import Store from "./Store";
import { v4 as uuidv4 } from "uuid";

function MyStoreList({ userInfo }) {
  // console.log("aaa");
  // console.log(userRestaurantList);
  return (
    <div className="relative">
      <div className="
        translate-y-40 flex justify-center items-center flex-col">
        <h1 className="pb-6 font-bold text-4xl mb-[80px]">
          {userInfo.nick_name}님 어서오세요!
        </h1>
        <div className="text-s mb-4 pb-4 font-bold text-2xl ">맛집 리스트 목록</div>
        <ul className="h-72 w-96 mb-3 overflow-y-scroll">
          {userInfo.restaurant_list.map((restaurant) => (
            <Store key={uuidv4()} restaurant={restaurant}></Store>
          ))}
        </ul>
        <Logout></Logout>
      </div>
    </div>
  );
}

export default MyStoreList;
