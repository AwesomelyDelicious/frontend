import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Logout from "../components/Logout";

function Login(props) {
  let [inputs, setInputs] = useState({ id: "", password: "" });
  const { id, password } = inputs; //객체에서 값들을 추출해서 새로운 상수로 선언해 주는 것
  const onChangeInput = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(inputs);
  };
  return (
    <div>
      <input
        type="text"
        name="id"
        value={id}
        placeholder="아이디를 입력하세요"
        class="border-solid border-2"
        onChange={onChangeInput}
      />
      <input
        type="password"
        name="password"
        value={password}
        placeholder="비밀번호를 입력하세요"
        class="border-solid border-2"
        onChange={onChangeInput}
      />
      <Button inputs={inputs}></Button>
      <Link to="/signUp"> 회원가입하러가기 </Link>
    </div>
  );
}

export default Login;
