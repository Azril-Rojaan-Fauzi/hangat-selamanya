import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import SloganText from "./SloganText";

const Project = () => {
  return (
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
      <SloganText />
    </div>
  );
};

export default Project;
