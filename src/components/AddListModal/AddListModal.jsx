import React, { useState } from "react";
import { useRecoilState } from "recoil";
import {
  KakaoInfoRecoil,
  ModalStateRecoil,
  UserIdRecoil,
  UserInfoRecoil,
} from "../../recoil/inputRecoil";
import axios from "axios";
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
    async function getUserInfo() {
      let data = await axios.get(`/api/v1/user?id=${userId}`).then((res) => {
        console.log("getUserInfo 함수 get 결과 :");
        console.log(res.data);
        setUserInfo({ ...res.data });
        return res.data;
      });

      return data;
    }
    getUserInfo();
  };

  return (
    modal && (
      <div className="absolute z-20 right-1 flex flex-col justify-center items-center p-2 bg-slate-200 w-72 h-72  ">
        <button
          onClick={() => {
            setModal(false);
          }}
        >
          닫기
        </button>
        <div>찜하기</div>
        <section className="flex flex-col">
          <div>{info.content}</div>
          <div>{info.adress}</div>
          <div>{star}</div>
        </section>
        <section className="flex flex-col">
          <input
            onChange={onChangeMemo}
            type="text"
            placeholder="메모"
            value={memo}
          />
          <button onClick={addList}>등록</button>
        </section>
      </div>
    )
  );
}

export default AddListModal;
