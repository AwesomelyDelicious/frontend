import React, { useState } from "react";
import { useRecoilState } from "recoil";
import {
  KakaoInfoRecoil,
  ModalStateRecoil,
  UserIdRecoil,
  UserInfoRecoil,
} from "../../recoil/inputRecoil";
import axios from "axios";
import { getUserInfo, postUserInfo } from "../../apis/apis";
import { HiXMark } from "react-icons/hi2";
import { FiStar } from "react-icons/fi";


function AddListModal(props) {
  const [info, setInfo] = useRecoilState(KakaoInfoRecoil);
  const [modal, setModal] = useRecoilState(ModalStateRecoil);
  const [memo, setMemo] = useState("");
  const [star, setStar] = useState();

  const [userId, setUserId] = useRecoilState(UserIdRecoil);
  const [userInfo, setUserInfo] = useRecoilState(UserInfoRecoil);

  const onChangeMemo = (e) => {
    setMemo(() => e.target.value);
  };

  const addList = () => {
    (async () => {
      await postUserInfo({
        restaurant_name: info.content,
        user_id: userId,
        x: info.position.lat,
        y: info.position.lng,
        star_count: star,
        memo: memo,
      });

      let a = await getUserInfo(userId);
      setUserInfo({ ...a });
    })();
  };

  return (
    modal && (
      <div className="absolute bottom-1/2  z-20 left-1/2 flex flex-col justify-center items-center  bg-white w-[330px] h-[400px] shadow-lg ">
        <button
          className="text-lg p-2 float-right rounded-full bg-buttonBg"
          onClick={() => {
            setModal(false);
          }}
        >
          <HiXMark></HiXMark>
        </button>
        <div className="text-lg font-bold mt-1 mb-2">찜하기</div>
        <section className="h-50% w-60 flex flex-col justify-center items-center">
          <div className="h-[30px] w-[280px] p-1 mb-[10px] rounded-2xl text-center bg-slate-50 shadow-md">{info.content}</div>
          <div className="h-[30px] w-[280px] p-1 mb-[10px] rounded-2xl text-center bg-slate-50 shadow-md">{info.adress}</div>
          <div className="inline mb-[10px] bg-lime-500/50 shadow-md">
            <FiStar>{star}</FiStar>
            <FiStar>{star}</FiStar>
            <FiStar>{star}</FiStar>
          </div>
        </section>
        <section className="flex flex-col">
          <input
            className="h-[96px] w-[280px] border border-slate-300 text-center"
            onChange={onChangeMemo}
            type="text"
            placeholder="메모"
            value={memo}
          />
        </section>
        <button className="rounded-2xl text-white bg-blue-300 mt-3 p-2 " onClick={addList}>

          등록
        </button>
      </div>
    )
  );
}

export default AddListModal;
