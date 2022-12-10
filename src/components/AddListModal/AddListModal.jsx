import React from "react";
import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { KakaoInfoRecoil, ModalStateRecoil } from "../../recoil/inputRecoil";
function AddListModal(props) {
  const [info, setInfo] = useRecoilState(KakaoInfoRecoil);
  const [modal, setModal] = useRecoilState(ModalStateRecoil);
  return (
    modal && (
      <div className="flex flex-col justify-center items-center p-2 bg-slate-200 w-72 h-72">
        <div>찜하기</div>
        <section className="flex flex-col">
          <div>{info.content}</div>
          <div>{info.adress}</div>
          <div>별점 공간</div>
        </section>
        <section className="flex flex-col">
          <input type="text" placeholder="메모" />
          <button>등록</button>
        </section>
      </div>
    )
  );
}

export default AddListModal;
