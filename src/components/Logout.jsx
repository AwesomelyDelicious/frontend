import React from "react";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import {
  KakaoMapRecoil,
  KeywordRecoil,
  UserIdRecoil,
  UserInfoRecoil,
} from "../recoil/inputRecoil";

function Logout(props) {
  //유저에 대한 정보 없애기 리코일로 관리하기
  const [map, setMap] = useRecoilState(KakaoMapRecoil);
  const [userId, setUserId] = useRecoilState(UserIdRecoil);
  const [userInfo, setUserInfo] = useRecoilState(UserInfoRecoil);
  const [keyword, setKeyword] = useRecoilState(KeywordRecoil);
  const navigate = useNavigate();

  const reset = () => {
    setKeyword("kakao 스페이스닷원");
    setUserId("");
    setUserInfo({ email: "미정", nick_name: "미정띠", restaurant_list: [] });
    navigate("/");
  };
  return (
    <div
      className="mt-4 text-center underline underline-offset-2 text-textgray"
      onClick={reset}
    >
      로그아웃 하기
    </div>
  );
}

export default Logout;
