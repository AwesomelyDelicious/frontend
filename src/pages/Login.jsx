import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";

function Login(props) {
  let [inputs, setInputs] = useState({ email: "", password: "" });
  const { email, password } = inputs; //객체에서 값들을 추출해서 새로운 상수로 선언해 주는 것
  const onChangeInput = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(inputs);
  };
  return (
    <div className="mt-32">
      <input
        type="text"
        name="email"
        value={email}
        placeholder="이메일을 입력하세요"
        className="border-solid border-2 ml-12 mb-1"
        onChange={onChangeInput}
      />
      <input
        type="password"
        name="password"
        value={password}
        placeholder="비밀번호를 입력하세요"
        class="border-solid border-2 ml-12"
        onChange={onChangeInput}
      />
      <Button inputs={inputs}></Button>
      <Link to="/signUp">
        <h3 className="ml-16 underline underline-offset-2 text-textgray">회원이 아니신가요?</h3>
      </Link>
    </div>
  );
}

export default Login;
