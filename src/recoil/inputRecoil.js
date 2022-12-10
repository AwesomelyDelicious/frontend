import { atom } from "recoil";

export const SearchInputRecoil = atom({
  key: "SearchInputRecoil",
  default: "",
});
export const KeywordRecoil = atom({
  key: "KeywordRecoil",
  default: "",
});

export const KakaoInfoRecoil = atom({
  key: "KakaoInfoRecoil",
  default: {
    content: "검색 안함",
    position: { lat: 0, lng: 0 },
    adress: "주소 아직",
  },
});

export const KakaoMarkersRecoil = atom({
  key: "KakaoMarkersRecoil",
  default: [],
});

export const KakaoMapRecoil = atom({
  key: "KakaoMapRecoil",
  default: "",
});

export const AdressRecoil = atom({
  key: "AdressRecoil",
  default: "",
});

export const ModalStateRecoil = atom({
  key: "ModalStateRecoil",
  default: false,
});