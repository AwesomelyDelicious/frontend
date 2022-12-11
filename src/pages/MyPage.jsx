import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import MyStoreList from "../components/MyStoreList";
import { UserIdRecoil, UserInfoRecoil } from "../recoil/inputRecoil";
import axios from "axios";
function MyPage(props) {
  const [userId, setUserId] = useRecoilState(UserIdRecoil);
  const [userInfo, setUserInfo] = useRecoilState(UserInfoRecoil);

  useEffect(() => {
    async function getUserInfo() {
      let data = await axios.get(`/api/v1/user?id=${userId}`).then((res) => {
        console.log("getUserInfo 함수 get 결과 :");
        console.log(res.data);
        setUserInfo({ ...res.data });
        return res.data;
      });

      return data;
    }
    getUserInfo();
  }, [userId]);

  return (
    <div>
      <MyStoreList userInfo={userInfo}></MyStoreList>
    </div>
  );
}

export default MyPage;
