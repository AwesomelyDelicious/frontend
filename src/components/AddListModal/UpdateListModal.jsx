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
import { FiStar } from "react-icons/fi";

function UpdateListModal(props) {
  const [modal, setModal] = useRecoilState(ClickModalStateRecoil);
  const [info, setInfo] = useRecoilState(ClickUserListInfo);
  const [userInfo, setUserInfo] = useRecoilState(UserInfoRecoil);
  const [userId, setUserId] = useRecoilState(UserIdRecoil);
  // const [memo, setMemo] = useState(info.memo);
  console.log(info);

  const deleteList = () => {
    (async () => {
      try {
        console.log("ID => ", info.id);
        console.log(info);
        await deleteUserList(info.id);
        let a = await getUserInfo(userId);
        console.log("삭제하고 나서 데이터");
        console.log(a);
        setUserInfo({ ...a });
      } catch (error) {
        console.log(error);
      }
    })();
  };

  const updateList = () => {
    (async () => {
      await updateUserList(info.id, {
        memo: info.memo,
        star_count: info.star_count,
      });
      let a = await getUserInfo(userId);
      console.log("new new");
      console.log(a);
      setUserInfo({ ...a });
    })();
  };

  return (
    modal && (
      <div className="absolute bottom-1/2 z-20 left-1/2 flex flex-col justify-center items-center  bg-white w-[330px] h-[400px] shadow-lg ">
        <button
          className="text-lg p-2 float-right rounded-full bg-buttonBg"
          onClick={() => {
            setModal(false);
          }}
        >
          <HiXMark className="text-white"></HiXMark>
        </button>
        <div className="text-lg font-bold mt-1 mb-2">수정 / 삭제</div>
        <section className="flex flex-col">
          <div className="h-[30px] w-[280px] p-1 mb-[10px] rounded-2xl text-center bg-slate-50 shadow-md">
            {info.restaurant_name}
          </div>
          <div className="grid grid-cols-5 p-2 mb-[10px] bg-lime-500/50 shadow-md">
            {[0, 0, 0, 0, 0].map((v, i) => (
              <li
                onClick={() => {
                  setInfo({ ...info, star_count: i + 1 });
                }}
                key={i + 1}
                className={`${
                  i + 1 <= info.star_count ? "text-red-500" : false
                } flex justify-center items-center flex-col`}
              >
                <FiStar />
              </li>
            ))}
          </div>
          <input
            className="h-[100px] w-[280px] border border-slate-300 text-center"
            onChange={(e) => {
              setInfo({ ...info, memo: e.target.value });
            }}
            type="text"
            placeholder="메모"
            value={info.memo}
          />
        </section>
        <div className="flex mt-3">
          <button
            className="mr-2 p-2 rounded-2xl text-white bg-blue-500/75 shadow-md"
            onClick={() => {
              updateList();
              setModal(false);
            }}
          >
            수정
          </button>
          <button
            className="ml-2 p-2 rounded-2xl text-white bg-red-500/75 shadow-md"
            onClick={() => {
              deleteList();
              setModal(false);
            }}
          >
            삭제
          </button>
        </div>
      </div>
    )
  );
}

export default UpdateListModal;
