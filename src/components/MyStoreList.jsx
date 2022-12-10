import React from "react";
import { useState } from "react";
import Store from "./Store";

function MyStoreList(props) {
  let [items, setItmes] = useState([{ name: "육꼬" }, { name: "시여사" }]);

  return (
    <div>
      <ul>
        {items.map((item) => (
          <Store item={item}></Store>
        ))}
      </ul>
    </div>
  );
}

export default MyStoreList;
