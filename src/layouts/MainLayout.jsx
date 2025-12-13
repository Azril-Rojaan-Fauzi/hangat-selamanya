import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  const location = useLocation();

  const locationPath = location.pathname === "/";
  const isHome = locationPath ? "home" : "no";
  return (
    <>
      <Navbar isHome={isHome} />
      <main className="">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
