import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import Footer from "../components/Footer";

const Projects = () => {
  return (
    <div className="mx-auto min-h-screen max-w-7xl pt-24 md:pt-17">
      <div className="page-wrapper">
        <div className="flex flex-col p-6">
          <h3 className="text-xs md:text-sm">| Projects |</h3>
          <div className="grid grid-cols-1 gap-6 gap-y-15 py-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                to={`/projects/${project.slug}`}
                key={project.id}
                className="group cursor-pointer"
              >
                <article className="grid h-full grid-rows-[auto_1fr] gap-3">
                  <div className="overflow-hidden">
                    <img
                      src={project.url}
                      alt=""
                      className="transform object-contain transition duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>

                  <div className="flex flex-col justify-between gap-5">
                    <div className="">
                      <h4 className="text-xs font-extrabold md:text-base">
                        {project.title}
                      </h4>
                      <h5 className="text-xs font-light md:text-sm">
                        {project.description}
                      </h5>
                    </div>
                    <p className="text-xs uppercase md:text-base">view more</p>
                  </div>
                </article>
              </Link>
            ))}
            <div className="col-span-1 flex h-80 flex-col items-center justify-center gap-5 py-10 md:h-full">
              <h2 className="text-center text-3xl font-bold">
                Hangat Selamanya
              </h2>
              <p className="text-center text-xs/7 font-extralight md:max-w-xs lg:max-w-md lg:text-base/8">
                Mengabadikan setiap cerita - dari yang besar hingga kecil dan
                sederhana - agar hangatnya terus menjadi bagian dari
                mereka,selamanya
              </p>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Projects;
