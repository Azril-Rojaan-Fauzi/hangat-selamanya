import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import SloganText from "./SloganText";
import { motion } from "motion/react";

const Project = () => {
  return (
    <div className="grid grid-cols-1 gap-6 gap-y-15 py-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          exit={{
            opacity: 0,
            y: 50,
            transition: { duration: 0.4, delay: index * 0.2 },
          }}
        >
          <Link
            to={`/projects/${project.slug}`}
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
        </motion.div>
      ))}
      <SloganText />
    </div>
  );
};

export default Project;
