import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  const location = useLocation();

  const isHome = location.pathname === "/";
  const mainColor = isHome ? "home" : "no";
  return (
    <>
      <Navbar mainColor={mainColor} />
      <main className="">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
