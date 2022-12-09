import React, { useState } from "react";
import Button from "../components/Button.jsx";
import Background from "../components/Background.jsx";
import InputPublic from "../components/InputPublic.jsx";

function Login(props) {
  return (
    <div>
      <Background></Background>
      <InputPublic></InputPublic>
      <InputPublic></InputPublic>
      <Button></Button>
    </div>
  );
}

export default Login;
