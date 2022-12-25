import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { deleteUserList, getUserInfo, updateUserList } from "../../apis/apis";
import {
  ClickModalStateRecoil,
  ClickUserListInfo,
  UserIdRecoil,
  UserInfoRecoil,
} from "../../recoil/inputRecoil";
import { HiXMark } from "react-icons/hi2";

function UpdateListModal(props) {
  const [modal, setModal] = useRecoilState(ClickModalStateRecoil);
  const [info, setInfo] = useRecoilState(ClickUserListInfo);
  const [userInfo, setUserInfo] = useRecoilState(UserInfoRecoil);
  const [userId, setUserId] = useRecoilState(UserIdRecoil);

  // const [memo, setMemo] = useState(info.memo);

  const deleteList = () => {
    (async () => {
      await deleteUserList(info.id);
      let a = await getUserInfo(userId);
      console.log(a);
      setUserInfo({ ...a });
    })();
  };

  const updateList = () => {
    (async () => {
      await updateUserList(info.id, { memo: info.memo, star: info.star });
      let a = await getUserInfo(userId);
      console.log("new new");
      console.log(a);
      setUserInfo({ ...a });
    })();
  };

  return (
    modal && (
      <div className="absolute bottom-1/2  z-20 left-1/2 flex flex-col justify-center items-center p-2 bg-white w-[300px] h-[380px] shadow-lg ">
        <button
          className="text-lg p-2 bg-red-200 "
          onClick={() => {
            setModal(false);
          }}
        >
          <HiXMark></HiXMark>
        </button>
        <div className="text-lg font-bold mt-2">수정 / 삭제</div>
        <section className="flex flex-col">
          <div className="h-10 w-12 p-1 rounded-xl border-red-700">{info.restaurant_name}</div>
          <div>{info.star}</div>
        </section>
        <section className="flex flex-col">
          <input
            className=" h-40 text-center rounded-xl bg-slate-50"
            onChange={(e) => {
              setInfo({ ...info, memo: e.target.value });
            }}
            type="text"
            placeholder="메모"
            value={info.memo}
          />
        </section>
        <div className="flex mt-3">
          <button className="mr-2 p-2 text-white bg-blue-500" onClick={updateList}>
            수정
          </button>
          <button className="ml-2 p-2 text-white bg-red-500" onClick={deleteList}>
            삭제
          </button>
        </div>
      </div>
    )
  );
}

export default UpdateListModal;
