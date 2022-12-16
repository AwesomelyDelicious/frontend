import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Button(props) {
  const navigate = useNavigate();
  return (
    <div>
      <button
        onClick={() => {
          axios
            .post(
              "/api/v1/authentication", {
              email: props.inputs.email, password: "1234"
            }
            )
            .then((respone) => {
              if (respone.status === 200) {
                navigate('/myPage');
              }
            }
            )
            .catch((error) => {
              navigate('/');
            })
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
