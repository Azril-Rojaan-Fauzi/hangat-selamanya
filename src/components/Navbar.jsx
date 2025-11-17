import { useEffect, useState } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? " py-2 " : " py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-2 md:px-6">
        <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
          <p
            className={`font-primary font-bold transition-all duration-300 ${
              isScrolled ? "text-2xl" : "text-3xl"
            }`}
          >
            HangatSelamanya
          </p>

          <div
            className={`flex items-center gap-10 transition-all duration-300 ${isScrolled ? "text-xs" : "text-sm"}`}
          >
            <p>About</p>
            <p>Projects</p>
            <p>Contact</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
