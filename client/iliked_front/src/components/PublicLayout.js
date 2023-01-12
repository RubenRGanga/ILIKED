import NavBar from "./Navbar";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
};

export default PublicLayout;
