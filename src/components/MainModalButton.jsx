import React from "react";

function MainModalButton({ changeModal, modal }) {
  return (
    <button
      className={`absolute z-40 w-14 h-14 rounded-full  top-[10px] ${
        modal ? "left-[225px]" : "left-2"
      }   bg-buttonBg`}
      onClick={changeModal}
    >
      버튼
    </button>
  );
}

export default MainModalButton;
