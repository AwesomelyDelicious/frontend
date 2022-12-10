import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login";
import MyPage from "../pages/MyPage";
import NotFound from "../pages/NotFound";
import Root from "../pages/Root";
import SignUp from "../pages/SignUp";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <NotFound></NotFound>,
    children: [
      { path: "/login", element: <Login></Login> },
      { path: "/signUp", element: <SignUp></SignUp> },
      { path: "myPage", element: <MyPage></MyPage> },
    ],
  },
]);

export default router;
