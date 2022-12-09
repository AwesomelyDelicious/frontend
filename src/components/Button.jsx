import React from "react";

function Button(props) {
  return (
    <div>
      <button
        // onClick={() => {
        //   navigate(/*"/singup페이지 삽입"*/);
        // }}
        class="h-14 w-52 bg-buttonBg rounded-full"
      >
        로그인
      </button>
    </div>
  );
}

export default Button;
