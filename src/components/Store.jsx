import React from "react";

function Store({ restaurant }) {
  return (
    <div className="flex">
      <div>아이콘--</div>
      <div>{restaurant.restaurantName}</div>
    </div>
  );
}

export default Store;
