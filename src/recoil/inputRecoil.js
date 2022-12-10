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
  default: "",
});

export const KakaoMarkersRecoil = atom({
  key: "KakaoMarkersRecoil",
  default: [],
});

export const KakaoMapRecoil = atom({
  key: "KakaoMapRecoil",
  default: "",
});
