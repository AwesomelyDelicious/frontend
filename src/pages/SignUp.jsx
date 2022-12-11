import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
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

    navigate("/myPage");
  };

  return (
    <div className="mt-14">
      <h1>SING UP</h1>
      <section>
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
      <button onClick={postInfo}>회원가입</button>
    </div>
  );
}

export default SignUp;
