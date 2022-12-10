import React from "react";
import axios from "axios";

function Button(props) {
  return (
    <div>
      <button
        onClick={() => {
<<<<<<< HEAD
          axios
            .get(
              "https://gist.githubusercontent.com/wisdomyeon/12b92d5029678ac253a6b9c3268dba54/raw/7019daef49b6aace0fbe4c49213bb7c67db0e07c/MiniProject_login.json"
            )
            .then((respone) => {
              if (respone.status === 200) {
                console.log("로그인 성공");
              } else {
                console.log("실패");
              }
            });
=======
          axios.get('https://gist.githubusercontent.com/wisdomyeon/12b92d5029678ac253a6b9c3268dba54/raw/7019daef49b6aace0fbe4c49213bb7c67db0e07c/MiniProject_login.json')
            .then((respone) => {
              if (respone.status === 200) {
                console.log('로그인 성공');
              } else {
                console.log('실패');
              }
            })
>>>>>>> cc889869534c1a863afb0749be56ee01a75daa78
        }}
        class="h-14 w-52 bg-buttonBg rounded-full"
      >
        로그인
      </button>
<<<<<<< HEAD
    </div>
=======
    </div >
>>>>>>> cc889869534c1a863afb0749be56ee01a75daa78
  );
}

export default Button;
<<<<<<< HEAD
//   props.inputs = true ? navigate(/*"/list페이지 삽입"* : 로그인페이지 화면 띄우기/);
=======
//   props.inputs = true ? navigate(/*"/list페이지 삽입"* : 로그인페이지 화면 띄우기/);
>>>>>>> cc889869534c1a863afb0749be56ee01a75daa78
