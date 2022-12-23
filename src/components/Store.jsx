import React from "react";
import { useRecoilState } from "recoil";
import {
  ClickModalStateRecoil,
  ClickUserListInfo,
} from "../recoil/inputRecoil";
import { MdOutlineBookmarkAdd } from "react-icons/md";
function Store({ restaurant }) {
  const [info, setInfo] = useRecoilState(ClickUserListInfo);
  const [modal, setModal] = useRecoilState(ClickModalStateRecoil);

  const onClick = () => {
    setInfo({ ...restaurant });
    setModal(true);
    console.log(info);
  };

  return (
    <div onClick={onClick} className="flex">
      <button className="text-2xl text-orange-600">
        <MdOutlineBookmarkAdd></MdOutlineBookmarkAdd>
      </button>
      <div>{restaurant.restaurant_name}</div>
    </div>
  );
}

export default Store;
