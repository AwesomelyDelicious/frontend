import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useRecoilState } from "recoil";
import {
  KakaoInfoRecoil,
  KakaoMarkersRecoil,
  KakaoMapRecoil,
  KeywordRecoil,
  ModalStateRecoil,
} from "../../recoil/inputRecoil";
import AddListButton from "../AddListButton";

const { kakao } = window;

function KakaoMap(props) {
  // const [info, setInfo] = useRecoilState(KakaoInfoRecoil);
  // const [markers, setMarkers] = useRecoilState(KakaoMarkersRecoil);
  // const [map, setMap] = useRecoilState(KakaoMapRecoil);
  const [keyword] = useRecoilState(KeywordRecoil);
  const [, setModal] = useRecoilState(ModalStateRecoil);

  const [info, setInfo] = useRecoilState(KakaoInfoRecoil);
  const [markers, setMarkers] = useRecoilState(KakaoMarkersRecoil);
  const [map, setMap] = useState(KakaoMapRecoil);

  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(keyword, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();
        let markers1 = [];

        for (let i = 0; i < data.length; i++) {
          // @ts-ignore

          markers1.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
            adress: data[i].address_name,
            memo: "",
            star: 0,
            id: uuidv4(),
          });

          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }

        setMarkers(markers1);

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    });
  }, [map, keyword, setMarkers]);

  return (
    <>
      <Map // 로드뷰를 표시할 Container
        center={{
          lat: 37.566826,
          lng: 126.9786567,
        }}
        style={{
          width: "100%",
          height: "100vh",
        }}
        level={3}
        onCreate={setMap}
      >
        {markers.map((marker) => (
          <MapMarker
            key={marker.id}
            position={marker.position}
            onClick={() => {
              setInfo(marker);
              setModal(false);
            }}
          >
            {info && info.content === marker.content && (
              <div className="p-3 test flex justify-between">
                <div>{marker.content}</div>
                <AddListButton></AddListButton>
              </div>
            )}
          </MapMarker>
        ))}
      </Map>
    </>
  );
}

export default KakaoMap;
