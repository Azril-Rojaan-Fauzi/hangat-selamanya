import { projects } from "../data/projects";

const Projects = () => {
  return (
    <div className="mx-auto min-h-screen max-w-7xl pt-24 md:pt-17">
      <div className="page-wrapper">
        <div className="flex flex-col p-6">
          <h3 className="text-xs md:text-base">- Projects -</h3>
          <div className="grid grid-cols-1 gap-6 gap-y-10 py-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                className="col-span-1 flex flex-col gap-3"
                key={project.id}
              >
                <img
                  src={project.url}
                  alt=""
                  className="object-contain"
                  loading="lazy"
                />
                <div className="flex h-full flex-col justify-between gap-5">
                  <div className="flex max-h-fit flex-col">
                    <h4 className="font-extrabold">{project.title}</h4>
                    <h5 className="font-light">{project.description}</h5>
                  </div>
                  <p className="">VIEW MORE</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
