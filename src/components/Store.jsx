import React from "react";

function Store({ item }) {
  return (
    <div className="flex">
      <div>아이콘</div>
      <div>{item.name}</div>
    </div>
  );
}

export default Store;
