import React from "react";
import SearchBar from "../SearchBar";
import KakaoMap from "./KakaoMap";
import AddListModal from "../AddListModal/AddListModal";
import UpdateListModal from "../AddListModal/UpdateListModal";

function KaKaoMapSection(props) {
  return (
    <div className="relative">
      <SearchBar></SearchBar>
      <AddListModal></AddListModal>
      <UpdateListModal></UpdateListModal>
      <KakaoMap></KakaoMap>
    </div>
  );
}

export default KaKaoMapSection;
