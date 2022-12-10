<<<<<<< HEAD
import { RouterProvider } from "react-router-dom";
import AddListModal from "./components/AddListModal/AddListModal";
import KaKaoMapSection from "./components/kakao/KaKaoMapSection";
import MyStoreList from "./components/MyStoreList";
import router from "./router/router";
function App() {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
      <KaKaoMapSection></KaKaoMapSection>
      <MyStoreList></MyStoreList>
=======
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Login></Login>
>>>>>>> cc889869534c1a863afb0749be56ee01a75daa78
    </>
  );
}

export default App;
