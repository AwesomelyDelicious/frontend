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
  const [star, setStar] = useState("");
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

    setMemo("");
    setModal(false);
  };

  const starClick = (star) => {
    for (let i in star) {
      console.log(star[i]);
    }
  }

  return (
    modal && (
      <div className="absolute bottom-1/2  z-20 left-1/2 flex flex-col justify-center items-center  bg-white w-[330px] h-[400px] shadow-lg ">
        <button
          className="text-lg p-2 float-right rounded-full bg-buttonBg"
          onClick={() => {
            setModal(false);
          }}
        >
          <HiXMark className="text-white"></HiXMark>
        </button>
        <div className="text-lg font-bold mt-1 mb-2">찜하기</div>
        <section className="flex flex-col">
          <div className="h-[30px] w-[280px] p-1 mb-[10px] rounded-2xl text-center bg-slate-50 shadow-md">
            {info.content}
          </div>
          <div className="h-[30px] w-[280px] p-1 mb-[10px] rounded-2xl text-center bg-slate-50 shadow-md">
            {info.adress}
          </div>
          <ul className="grid grid-cols-5 p-2 mb-[10px] bg-lime-500/50 shadow-md">
            {[0, 0, 0, 0, 0].map((v, i) => (
              <li
                onClick={() => {
                  setStar(i + 1);
                }}
                key={i + 1}
                className={`${i + 1 <= star ? "text-red-500" : false
                  } flex justify-center items-center flex-col`}
              >
                <FiStar />
              </li>
            ))}
          </ul>
          <input
            className="h-[100px] w-[280px] border border-slate-300 text-center"
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
