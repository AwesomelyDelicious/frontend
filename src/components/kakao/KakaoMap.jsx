import { v4 as uuidv4 } from "uuid";
import React, { useEffect, useState } from "react";
import { Map, MapMarker } from "react-kakao-maps-sdk";
import { useRecoilState } from "recoil";
import { UserInfoRecoil } from "../../recoil/inputRecoil";
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

  const [userInfo, setUserInfo] = useRecoilState(UserInfoRecoil);
  console.log("userInfo check");
  console.log(userInfo);
  const check = (x, y) => {
    for (let info of userInfo.restaurant_list) {
      if (info.x === x && info.y === y) return true;
    }
    return false;
  };

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
  }, [map, keyword, setMarkers, userInfo]);

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
            image={
              check(marker.position.lat, marker.position.lng)
                ? {
                    src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_red.png", // 마커이미지의 주소입니다
                    size: {
                      width: 64,
                      height: 69,
                    }, // 마커이미지의 크기입니다
                    options: {
                      offset: {
                        x: 27,
                        y: 69,
                      }, // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.
                    },
                  }
                : false
            }
            onClick={() => {
              setInfo(marker);
              setModal(false);
            }}
          >
            {info && info.content === marker.content && (
              <div className="w-48 p-2 test flex justify-center">
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
