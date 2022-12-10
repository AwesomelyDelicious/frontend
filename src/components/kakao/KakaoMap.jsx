import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useRecoilState } from "recoil";
import {
  KakaoInfoRecoil,
  KakaoMarkersRecoil,
  KakaoMapRecoil,
  KeywordRecoil,
} from "../../recoil/inputRecoil";
import "./test.css";

const { kakao } = window;

function KakaoMap(props) {
  // const [info, setInfo] = useRecoilState(KakaoInfoRecoil);
  // const [markers, setMarkers] = useRecoilState(KakaoMarkersRecoil);
  // const [map, setMap] = useRecoilState(KakaoMapRecoil);
  const [keyword] = useRecoilState(KeywordRecoil);
  const [info, setInfo] = useState();
  const [markers, setMarkers] = useState([]);
  const [map, setMap] = useState();

  useEffect(() => {
    if (!map) return;
    const ps = new kakao.maps.services.Places();

    ps.keywordSearch(keyword, (data, status, _pagination) => {
      if (status === kakao.maps.services.Status.OK) {
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();
        let markers = [];

        for (var i = 0; i < data.length; i++) {
          // @ts-ignore
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);

        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
        map.setBounds(bounds);
      }
    });
  }, [map, keyword]);

  return (
    <>
      <Map // 로드뷰를 표시할 Container
        center={{
          lat: 37.566826,
          lng: 126.9786567,
        }}
        style={{
          width: "100%",
          height: "350px",
        }}
        level={3}
        onCreate={setMap}
      >
        {markers.map((marker) => (
          <MapMarker
            key={uuidv4()}
            position={marker.position}
            onClick={() => setInfo(marker)}
          >
            {info && info.content === marker.content && (
              <div className="p-3 test flex justify-between">
                <div>{marker.content}</div>
                <span>버튼클릭</span>
              </div>
            )}
          </MapMarker>
        ))}
      </Map>
    </>
  );
}

export default KakaoMap;
