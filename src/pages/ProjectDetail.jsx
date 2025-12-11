import { useParams } from "react-router-dom";
import { projects } from "../data/projects";
import GalleryImage from "../components/GalleryImage";
import Footer from "../components/Footer";
import { motion } from "motion/react";

const ProjectDetail = () => {
  const { slug } = useParams();

  const data = projects.find((project) => project.slug === slug);

  if (!data) return <h3>Project tidak ada</h3>;
  return (
    <div className="mx-auto min-h-screen max-w-7xl pt-24 md:pt-17">
      <div className="page-wrapper">
        <div className="flex flex-col p-6">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            exit={{
              opacity: 0,
              y: 20,
              transition: { duration: 0.4, delay: 0.1 },
            }}
            className="text-xs md:text-sm"
          >
            | Projects | {data.title} |
          </motion.h3>
          <GalleryImage data={data} />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
