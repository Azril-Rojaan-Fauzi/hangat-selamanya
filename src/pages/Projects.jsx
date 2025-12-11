import Footer from "../components/Footer";
import Project from "../components/Project";
import { motion } from "motion/react";

const Projects = () => {
  return (
    <div className="mx-auto min-h-screen max-w-7xl pt-24 md:pt-17">
      <div className="page-wrapper">
        <div className="flex flex-col p-6">
          <motion.h3
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            exit={{
              opacity: 0,
              y: 50,
              transition: { duration: 0.4 },
            }}
            className="text-xs md:text-sm"
          >
            | Projects |
          </motion.h3>
          <Project />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Projects;
