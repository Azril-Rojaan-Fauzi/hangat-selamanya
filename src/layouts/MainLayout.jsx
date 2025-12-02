import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";
  const textColor = isHome ? "home" : "no";
  return (
    <>
      <Navbar textColor={textColor} />
      <main className="">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
