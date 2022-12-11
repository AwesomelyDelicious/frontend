import { RouterProvider } from "react-router-dom";
import KaKaoMapSection from "./components/kakao/KaKaoMapSection";
import router from "./router/router";
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <KaKaoMapSection></KaKaoMapSection>
    </>
  );
}

export default App;
