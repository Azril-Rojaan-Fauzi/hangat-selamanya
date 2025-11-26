import { Link } from "react-router-dom";
import { projects } from "../data/projects";

const Projects = () => {
  return (
    <div className="mx-auto min-h-screen max-w-7xl pt-24 md:pt-17">
      <div className="page-wrapper">
        <div className="flex flex-col p-6">
          <h3 className="text-xs md:text-sm">| Projects |</h3>
          <div className="grid grid-cols-1 gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
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
                    <div>
                      <h4 className="font-extrabold">{project.title}</h4>
                      <h5 className="font-light">{project.description}</h5>
                    </div>
                    <p className="uppercase">view more</p>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
