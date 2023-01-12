import { createBrowserRouter } from "react-router-dom";


import PublicLayout from "../components/PublicLayout";



const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicLayout/>,
    children: [
    //   {
    //     index: true,
    //     path: "/home",
    //     element: <GetApod/>,
    //   },
    ],
  },
]);

export default router;