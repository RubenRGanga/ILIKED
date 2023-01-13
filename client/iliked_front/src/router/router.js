import { createBrowserRouter } from "react-router-dom";


import PublicLayout from "../components/PublicLayout";
import Home from "../components/Home";



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
    ],
  },
]);

export default router;