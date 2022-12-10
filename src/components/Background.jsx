import React, { useState } from "react";
import Button from "./Button";

function Background(props) {
  let [inputs, setInputs] = useState({ id: "", password: "" });
  const { id, password } = inputs; //객체에서 값들을 추출해서 새로운 상수로 선언해 주는 것
  const onChangeInput = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
    console.log(inputs);
  };
  return (
    <div>
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
      </div>
    </div>
  );
}

export default Background;
