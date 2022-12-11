import React from "react";

function Store({ item }) {
  return (
    <div className="flex">
      <div>아이콘--</div>
      <div>{item.restaurant_name}</div>
    </div>
  );
}

export default Store;
