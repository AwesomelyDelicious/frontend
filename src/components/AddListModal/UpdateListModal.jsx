import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { deleteUserList, getUserInfo, updateUserList } from "../../apis/apis";
import {
  ClickModalStateRecoil,
  ClickUserListInfo,
  UserIdRecoil,
  UserInfoRecoil,
} from "../../recoil/inputRecoil";

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
      <div className="absolute bottom-1/2  z-20 left-1/2 flex flex-col justify-center items-center p-2 bg-slate-200 w-72 h-72  ">
        <button
          className="bg-red-200 text-sm p-2"
          onClick={() => {
            setModal(false);
          }}
        >
          닫기
        </button>
        <div className="text-lg font-bold mt-2">수정 / 삭제</div>
        <section className="flex flex-col">
          <div>{info.restaurant_name}</div>

          <div>{info.star}</div>
        </section>
        <section className="flex flex-col">
          <input
            className="p-2"
            onChange={(e) => {
              setInfo({ ...info, memo: e.target.value });
            }}
            type="text"
            placeholder="메모"
            value={info.memo}
          />
        </section>
        <div className="flex mt-3">
          <button className="mr-2 p-2 bg-blue-500" onClick={updateList}>
            수정
          </button>
          <button className="ml-2 p-2 bg-red-500" onClick={deleteList}>
            삭제
          </button>
        </div>
      </div>
    )
  );
}

export default UpdateListModal;
