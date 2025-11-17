import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-4/5">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
