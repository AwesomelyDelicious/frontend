import { RouterProvider } from "react-router-dom";
import KaKaoMapSection from "./components/kakao/KaKaoMapSection";
import MyStoreList from "./components/MyStoreList";
import router from "./router/router";
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <KaKaoMapSection></KaKaoMapSection>
      <MyStoreList></MyStoreList>
    </>
  );
}

export default App;
