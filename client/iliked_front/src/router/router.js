import { createBrowserRouter } from "react-router-dom";



import PublicLayout from "../components/PublicLayout";
import Home from "../components/Home";
import NewFilm from "../components/NewFilm_form";
import Login from "../components/Login"
import Film from "../components/Film";
import Logout from "../components/Logout";

import ProtectedRoute from "../utils/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: "/film/:title",
        element: <Film/>,
      },
      {
        path: "/newfilm",
        element: <NewFilm/>,
      },       
      {
        path: "/login",
        element: <ProtectedRoute isAllowed={"isNotAuth"}><Login/></ProtectedRoute>,
      },
      {
        path: "/logout",
        element: <ProtectedRoute isAllowed={"isAuth"}><Logout/></ProtectedRoute>,
      },
    ],
  },
]);

export default router;