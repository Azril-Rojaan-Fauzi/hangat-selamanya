import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { motion } from "motion/react";

const Navbar = ({ isHome }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const navItems = [
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Portfolio",
      path: "/projects",
    },
    {
      name: "Service",
      path: "/service",
    },
  ];

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-40 w-full transition-all duration-300 ${isHome === "home" ? "bg-transparent" : "bg-primary"} ${
        isScrolled ? " py-2" : " py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-2 md:px-6">
        <div
          className={`flex flex-col items-center justify-between gap-2 md:flex-row ${isHome === "home" ? "text-yellow-300" : "text-black"}`}
        >
          <Link
            to="/"
            className={`font-primary relative cursor-pointer font-medium transition-all duration-300 ${isHome === "home" ? "" : "nav-link"} ${
              isScrolled ? "text-2xl" : "text-3xl"
            }`}
          >
            Home
          </Link>

          <div
            className={`flex items-center gap-10 pl-4 font-medium transition-all duration-300 md:pl-0 ${isScrolled ? "text-xs" : "text-sm"}`}
          >
            {navItems.map((item) => (
              <NavLink key={item.path} to={item.path} end>
                {({ isActive }) => (
                  <span
                    className={`${isHome === "home" ? "nav-item before:bg-yellow-300" : "nav-item before:bg-black"}`}
                  >
                    {item.name}

                    {isActive && (
                      <motion.span
                        layoutId="navbar-underline"
                        className={`nav-underline ${isScrolled ? "h-px" : "h-0.5"} ${
                          isHome === "home" ? "bg-yellow-300" : "bg-black"
                        }`}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                  </span>
                )}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
