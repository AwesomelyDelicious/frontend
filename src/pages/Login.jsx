import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import CommonInput from "../components/common/CommonInput";

function Login(props) {
  let [inputs, setInputs] = useState({ email: "", password: "" });
  const { email, password } = inputs; //객체에서 값들을 추출해서 새로운 상수로 선언해 주는 것
  const onChangeInput = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(inputs);
  };
  return (
    <div className="flex h-full justify-center items-center flex-col">
      <h1 className="pb-6 font-bold text-5xl">LOGIN</h1>
      <section className="">
        <CommonInput
          type="text"
          name="email"
          value={email}
          onChange={onChangeInput}>
        </CommonInput>
        <CommonInput
          type="password"
          name="password"
          value={password}
          onChange={onChangeInput}
        ></CommonInput>
        <Button inputs={inputs}></Button>
        <Link to="/signUp">
          <h3 className="mt-2 text-center underline underline-offset-2 text-textgray">회원이 아니신가요?</h3>
        </Link>
      </section>
    </div >
  );
}

export default Login;
