import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { async } from "q";
import { useRecoilState } from "recoil";
import { UserIdRecoil } from "../recoil/inputRecoil";

function Button(props) {
  const navigate = useNavigate();

  return (
    <div>
      <button
        onClick={() => {
          (async () => {
            await axios
              .post("/api/v1/authentication", {
                email: props.inputs.email,
                password: props.inputs.password,
              })
              .then((respone) => {
                if (respone.status === 200) {
                  navigate("/myPage");
                }
              })
              .catch((error) => {
                alert("일치하지 않습니다.");
                navigate("/");
              });
          })();
        }}
        className="h-12 w-40 bg-buttonBg rounded-full mt-6 ml-14"
      >
        로그인
      </button>
    </div>
  );
}

export default Button;
//   props.inputs = true ? navigate(/*"/list페이지 삽입"* : 로그인페이지 화면 띄우기/);
