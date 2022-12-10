import React from "react";
import SearchBar from "../SearchBar";
import KakaoMap from "./KakaoMap";
import AddListModal from "../AddListModal/AddListModal";

function KaKaoMapSection(props) {
  return (
    <div className="relative">
      <SearchBar></SearchBar>
      <AddListModal></AddListModal>
      <KakaoMap></KakaoMap>
    </div>
  );
}

export default KaKaoMapSection;
