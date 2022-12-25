import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { async } from "q";
import { useRecoilState } from "recoil";
import { UserIdRecoil } from "../recoil/inputRecoil";

function Button(props) {
  const navigate = useNavigate();
  const [userId, setUserId] = useRecoilState(UserIdRecoil);

  return (
    <div className="place-content-around">
      <div className="h-12 w-40 mt-6 bg-buttonBg rounded-full"
        onClick={() => {
          (async () => {
            await axios
              .post("/api/v1/authentication", {
                email: props.inputs.email,
                password: props.inputs.password,
              })
              .then((respone) => {
                console.log(respone.data.id);
                setUserId(respone.data.id);
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
      >
        <span className="">로그인</span>
      </div>
    </div>
  );
}

export default Button;
