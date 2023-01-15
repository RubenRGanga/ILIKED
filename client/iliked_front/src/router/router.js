import { createBrowserRouter } from "react-router-dom";


import PublicLayout from "../components/PublicLayout";
import Home from "../components/Home";
import Login from "../components/Login"
import Film from "../components/Film";



const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout/>,
    children: [
      {
        index: true,
        path: "/home",
        element: <Home/>,
      },
      {
        path: "/film",
        element: <Film/>,
      },      
      {
        path: "/login",
        element: <Login/>,
      },
    ],
  },
]);

export default router;