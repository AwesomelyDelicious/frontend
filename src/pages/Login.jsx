import React, { useState } from "react";
import Background from "../components/Background.jsx";
import Button from "../components/Button.jsx";
import ModalButton from "../components/ModalButton.jsx";

function Login(props) {
    let [inputs, setInputs] = useState({ id: "", password: "" });
    const { id, password } = inputs; //객체에서 값들을 추출해서 새로운 상수로 선언해 주는 것
    const onChangeInput = (e) => {
        setInputs({ ...inputs, [e.target.name]: e.target.value });
        console.log(inputs);
    }
    return (
        <div>
            <ModalButton></ModalButton>
            <input type="text" name="id" value={id} placeholder="아이디를 입력하세요" class="border-solid border-2" onChange={onChangeInput} />
            <input type="password" name="password" value={password} placeholder="비밀번호를 입력하세요" class="border-solid border-2" onChange={onChangeInput} />
            <Button inputs={inputs}></Button>

        </div>
    );
}

export default Login;


// onChange={(e) => {
//     console.log(e.target.value);
// }} 