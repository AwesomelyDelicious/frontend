import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import MainModalButton from "../components/MainModalButton";

function Root(props) {
  const [modal, setModal] = useState(true);
  const changeModal = () => {
    setModal(!modal);
  };
  return (
    <div className="relative">
      <MainModalButton
        modal={modal}
        changeModal={changeModal}
      ></MainModalButton>
      {modal && (
        <div className="absolute z-10 flex flex-col w-[500px] h-[962px] bg-yellow-200">
          <Outlet></Outlet>
        </div>
      )}
    </div>
  );
}

export default Root;
