import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="mx-auto min-h-screen max-w-7xl pt-24 md:pt-17">
      <div className="page-wrapper flex flex-col-reverse py-4 md:flex-row md:px-6">
        <div className="h-full px-6 md:w-1/2 md:px-0">
          <div className="flex h-full flex-col justify-center gap-6">
            <div className="flex flex-col gap-4 text-center md:text-start">
              <h1 className="text-4xl font-bold lg:text-6xl">
                HANGAT <br /> SELAMANYA <br /> VISUAL
              </h1>
              <p className="text-sm font-medium opacity-55 lg:text-xl">
                For anyone who wants their <br /> warmest moments to last
                forever
              </p>
            </div>

            <div className="flex flex-col gap-4 text-center text-xs font-light md:flex-row lg:text-sm">
              <Link
                to="/contact"
                className="text-primary get-in-touch-hover relative isolate h-fit cursor-pointer rounded-md bg-black px-4 py-3 transition-all duration-500 hover:text-black"
              >
                Get In Touch
              </Link>
              <Link
                to="/projects"
                className="projects-hover hover:text-primary relative h-fit cursor-pointer rounded-md border px-4 py-3 transition-all duration-500"
              >
                Projects
              </Link>
            </div>
          </div>
        </div>

        <div className="hidden md:block md:w-1/2">
          <div className="relative h-full w-full overflow-hidden rounded-md transition-all duration-500 hover:shadow-2xl">
            <img
              src="/assets/hangat-selamanya.jpeg"
              alt="logo"
              loading="lazy"
              className="h-full w-full object-cover transition-all duration-500 hover:scale-[1.02] hover:brightness-105"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
