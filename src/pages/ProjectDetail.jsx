import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";
import GalleryImage from "../components/GalleryImage";

const ProjectDetail = () => {
  const { slug } = useParams();

  const data = projects.find((project) => project.slug === slug);

  if (!data) return <h3>Project tidak ada</h3>;
  return (
    <div className="mx-auto min-h-screen max-w-7xl pt-24 md:pt-17">
      <div className="page-wrapper">
        <div className="flex flex-col p-6">
          <h3 className="text-xs md:text-sm">| Projects | {data.title} |</h3>
          <GalleryImage data={data} />
          <div className="flex justify-between pt-10">
            <Link>
              <button className="cursor-pointer text-sm uppercase md:text-base">
                view project
              </button>
            </Link>
            <Link>
              <button className="cursor-pointer text-sm uppercase md:text-base">
                book now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
