import React from "react";

function MainModalButton({ changeModal }) {
  return (
    <button
      className="absolute z-40 w-14 h-14 rounded-full top-[10px] left-[225px] bg-buttonBg"
      onClick={changeModal}
    >버튼</button>
  );
}

export default MainModalButton;
