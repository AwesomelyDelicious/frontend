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
    <div className="flex h-[80%] justify-center items-center flex-col">
      <h1 className="pb-6 font-bold text-5xl mb-[80px]">LOGIN</h1>
      <section className="grid place-items-center">
        <input
          className="h-[45px] w-[350px] pl-3 pb-1 mb-[20px] border-solid border-2 rounded-2xl shadow-lg outline-amber-400"
          type="email"
          name="email"
          placeholder="email"
          value={setInputs.email}
          onChange={onChangeInput}
        ></input>
        <input
          className="h-[45px] w-[350px] pl-3 pb-1 mb-[20px] border-solid border-2 rounded-2xl shadow-lg  outline-amber-400"
          type="password"
          name="password"
          placeholder="password"
          value={setInputs.password}
          onChange={onChangeInput}
        ></input>
        <Button inputs={inputs}></Button>
        <Link to="/signUp">
          <h3 className="mt-4 text-center underline underline-offset-2 text-textgray">
            회원이 아니신가요?
          </h3>
        </Link>
      </section>
    </div>
  );
}

export default Login;
