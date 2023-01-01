import axios from "axios";

export const getUserRestaurant_list = async () => {
  let userInfo = await axios
    .get("/api/v1/1")
    .then((res) => res.data)
    .catch((e) => new Error(e));
  return userInfo;
};

export const postUserInfo = async (newRestaurant) => {
  await axios.post("/api/v1/restaurant", newRestaurant).then((res) => {
    console.log("postinfo");
    console.log(res);
  });
};

export const deleteUserList = async (primaryId) => {
  await axios.delete(`/api/v1/restaurant/${primaryId}`);
};
export const updateUserList = async (primaryId, info) => {
  await axios.patch(`/api/v1/restaurant/${primaryId}`, info);
};

//3번째 방법  MyPage 컴포넌트 참고
export const getUserInfo = async (userId) => {
  let data = await axios
    .get(`/api/v1/user/${userId}`)
    .then((res) => {
      return res.data;
    })
    .catch((e) => console.log(e));

  return data;
};

//4번째 방법  MyPage 컴포넌트 참고
// export const getUserInfo = async (userId, setUserInfo) => {
//   await axios.get(`/api/v1/user?id=${userId}`).then((res) => {
//     setUserInfo({ ...res.data });
//   });
// };

//5번째 방법  MyPage 컴포넌트 참고
// export const getUserInfo = (userId, setUserInfo) => {
//   (async () => {
//     axios.get(`/api/v1/user?id=${userId}`).then((res) => {
//       setUserInfo({ ...res.data });
//     });
//   })();
// };
