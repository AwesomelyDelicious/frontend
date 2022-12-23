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
function AddListModal(props) {
  const [info, setInfo] = useRecoilState(KakaoInfoRecoil);
  const [modal, setModal] = useRecoilState(ModalStateRecoil);
  const [memo, setMemo] = useState("");
  const [star, setStar] = useState(0);

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
      <div className="absolute bottom-1/2  z-20 left-1/2 flex flex-col justify-center items-center p-2 bg-slate-200 w-72 h-72  ">
        <button
          className="bg-red-200 text-sm p-2"
          onClick={() => {
            setModal(false);
          }}
        >
          닫기
        </button>
        <div className="text-lg font-bold mt-2">찜하기</div>
        <section className="flex flex-col justify-center items-center">
          <div>{info.content}</div>
          <div>{info.adress}</div>
          <div>{star}</div>
        </section>
        <section className="flex flex-col">
          <input
            className="p-2"
            onChange={onChangeMemo}
            type="text"
            placeholder="메모"
            value={memo}
          />
        </section>
        <button className="bg-blue-300 mt-3 p-2 " onClick={addList}>
          등록
        </button>
      </div>
    )
  );
}

export default AddListModal;
