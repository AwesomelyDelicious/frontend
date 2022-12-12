import React, { useEffect } from "react";
import { useRecoilState } from "recoil";
import MyStoreList from "../components/MyStoreList";
import { UserIdRecoil, UserInfoRecoil } from "../recoil/inputRecoil";
import axios from "axios";
import { getUserInfo } from "../apis/apis";

function MyPage(props) {
  const [userId, setUserId] = useRecoilState(UserIdRecoil);
  const [userInfo, setUserInfo] = useRecoilState(UserInfoRecoil);

  useEffect(() => {
    // 1번 방법
    // async function getUserInfo() {
    //   await axios.get(`/api/v1/user?id=${userId}`).then((res) => {
    //     console.log(res.data);
    //     setUserInfo({ ...res.data });
    //     return res.data;
    //   });
    // }
    // getUserInfo();

    //2번 방법
    // (async () => {
    //   await axios.get(`/api/v1/user?id=${userId}`).then((res) => {
    //     console.log(res.data);
    //     setUserInfo({ ...res.data });
    //     return res.data;
    //   });
    // })();

    // 3번 방법   api 폴더 참고
    (async () => {
      let a = await getUserInfo(userId);
      console.log(a);
      setUserInfo({ ...a });
    })();

    //4번째 방법  api 폴더 참고
    // (async () => {
    //   await getUserInfo(userId, setUserInfo);
    // })();

    //5번째 방법  api 폴더 참고
    // console.log("하기전");
    // getUserInfo(userId, setUserInfo);
    // console.log("하고나서");
    // console.log(userInfo);
  }, [userId]);

  return (
    <div>
      <MyStoreList userInfo={userInfo}></MyStoreList>
    </div>
  );
}

export default MyPage;
