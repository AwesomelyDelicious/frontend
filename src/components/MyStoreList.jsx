import React, { useEffect } from "react";
import { useState } from "react";
import { getUserRestaurant_list } from "../apis/apis";
import Store from "./Store";

function MyStoreList(props) {
  let [items, setItmes] = useState([]);

  useEffect(() => {
    let restaurant_list = getUserRestaurant_list();
    console.log("유즈이펙부분");
    console.log(restaurant_list);
    // setItmes([...restaurant_list]);
  }, []);

  return (
    <div>
      <h1>OOO님 어서오세요!</h1>
      <div>맛집 리스트 목록</div>
      <ul>
        {items.map((item) => (
          <Store item={item}></Store>
        ))}
      </ul>
      <div>로그아웃</div>
    </div>
  );
}

export default MyStoreList;
