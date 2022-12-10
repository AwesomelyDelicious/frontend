import React from "react";
import { MdOutlineBookmarkAdd } from "react-icons/md";
import { useRecoilState } from "recoil";
import { ModalStateRecoil } from "../recoil/inputRecoil";

function AddListButton(props) {
  const [modal, setModal] = useRecoilState(ModalStateRecoil);
  return (
    <button
      className="text-2xl text-orange-600"
      onClick={() => {
        setModal((prev) => !prev);
      }}
    >
      <MdOutlineBookmarkAdd></MdOutlineBookmarkAdd>
    </button>
  );
}

export default AddListButton;
