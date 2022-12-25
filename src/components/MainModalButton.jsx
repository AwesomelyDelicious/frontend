import React from "react";
import { BsFillSkipStartFill, BsFillSkipEndFill } from "react-icons/bs";

function MainModalButton({ changeModal, modal }) {
  return (
    <button
      className={`absolute z-40 w-14 h-14 rounded-full  top-[30px] ${modal ? "left-[420px]" : "left-[20px]"
        }   bg-buttonBg`}
      onClick={changeModal}
    >
      <BsFillSkipStartFill className="w-full h-12"></BsFillSkipStartFill>
    </button>
  );
}

export default MainModalButton;
