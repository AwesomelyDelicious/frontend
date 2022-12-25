import React from "react";
import { TfiAngleDoubleRight } from "react-icons/tfi";

function MainModalButton({ changeModal, modal }) {
  return (
    <button
      className={`absolute z-40 w-14 h-14 rounded-full top-[30px] ${modal ? "left-[420px]" : "left-[20px]"
        }   bg-buttonBg`}
      onClick={changeModal}
    >
      <TfiAngleDoubleRight className="w-16 h-8"></TfiAngleDoubleRight>
    </button>
  );
}

export default MainModalButton;
