import { createBrowserRouter } from "react-router-dom";
import {useParams} from 'react-router-dom'


import PublicLayout from "../components/PublicLayout";
import Home from "../components/Home";
// import Login from "../components/Login"
import Film from "../components/Film";


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
      // {
      //   path: "/login",
      //   element: <Login/>,
      // },
    ],
  },
]);

export default router;