import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { getUserRestaurant_list } from "../apis/apis";
import CommonInput from "../components/common/CommonInput";
import { UserIdRecoil } from "../recoil/inputRecoil";

function SignUp(props) {
  const [userId, setUserId] = useRecoilState(UserIdRecoil);
  const [signInfo, setSignInfo] = useState({
    email: "",
    nickname: "",
    password: "",
    password_re: "",
  });

  const navigate = useNavigate();

  const updateSignInfo = (e) => {
    let { name, value } = e.target;

    setSignInfo((prev) => ({ ...prev, [name]: value }));
    console.log(signInfo);
  };

  const postInfo = () => {
    console.log(signInfo);

    async function postUserInfo() {
      let data = await axios.post("/api/v1/user/new", signInfo).then((res) => {
        console.log("postUserInfo 함수 post 결과 :");
        console.log(res.data);
        setUserId(res.data.id);
        return res.data;
      });

      return data;
    }
    postUserInfo();

    setSignInfo({
      email: "",
      nickname: "",
      password: "",
      password_re: "",
    });

    //회원가입 성공시

    navigate("/mypage");
  };

  return (
    <div className="flex h-[80%] justify-center items-center flex-col selection:mt-14">
      <h1 className="pb-6 font-bold text-5xl mb-[80px]">SING UP</h1>
      <section className="">
        <CommonInput
          value={signInfo.email}
          name="email"
          updateSignInfo={updateSignInfo}
        ></CommonInput>
        <CommonInput
          value={signInfo.nickname}
          name="nickname"
          updateSignInfo={updateSignInfo}
        ></CommonInput>
        <CommonInput
          value={signInfo.password}
          name="password"
          updateSignInfo={updateSignInfo}
        ></CommonInput>
        <CommonInput
          value={signInfo.password_re}
          name="password_re"
          updateSignInfo={updateSignInfo}
        ></CommonInput>
      </section>
      <button className="h-12 w-40 bg-buttonBg rounded-full mt-6" onClick={postInfo}>
        회원가입
      </button>
    </div>
  );
}

export default SignUp;
