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
      <button className="relative">
        <MdOutlineBookmarkAdd className="absolute z-40 w-8 h-8 mt-2 ml-2 text-orange-600"></MdOutlineBookmarkAdd>

        <div className="h-[45px] w-[350px] pl-3 pt-2 mb-[20px] border-solid border-2 rounded-2xl shadow-lg bg-white text-center font-bold align-middle hover:border-orange-600">
          {restaurant.restaurant_name}
        </div>
      </button>
    </div>
  );
}

export default Store;
