import Footer from "../components/Footer";
import Project from "../components/Project";

const Projects = () => {
  return (
    <div className="mx-auto min-h-screen max-w-7xl pt-24 md:pt-17">
      <div className="page-wrapper">
        <div className="flex flex-col p-6">
          <h3 className="text-xs md:text-sm">| Projects |</h3>
          <Project />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Projects;
