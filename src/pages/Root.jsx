import React from "react";
import { Outlet } from "react-router-dom";

function Root(props) {
  return (
    <div className="flex flex-col w-72 h-96 bg-yellow-200">
      <div>아이콘 자리</div>
      <Outlet></Outlet>
    </div>
  );
}

export default Root;
