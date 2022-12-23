import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { KakaoMapRecoil, KeywordRecoil } from "../recoil/inputRecoil";

function Logout(props) {
  //유저에 대한 정보 없애기 리코일로 관리하기
  const [map, setMap] = useRecoilState(KakaoMapRecoil);
  const navigate = useNavigate();

  const reset = () => {
    navigate("/");
  };
  return (
    <div className="text-sm mt-3" onClick={reset}>
      로그아웃 하기
    </div>
  );
}

export default Logout;
