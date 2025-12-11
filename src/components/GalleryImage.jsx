import { motion, scale } from "motion/react";
import useSlideFade from "../hooks/useSlideFade";
const GalleryImage = ({ data }) => {
  const { container, child } = useSlideFade({
    axis: "y",
    distance: 50,
    delay: 0.5,
    stagger: 0.2,
  });
  const { images } = data;
  return (
    images && (
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="columns-1 gap-4 pt-6 md:columns-2"
      >
        {images.map((path, index) => (
          <motion.img
            key={index}
            src={path}
            variants={child}
            className="mb-4 w-full"
            loading="lazy"
          />
        ))}
      </motion.div>
    )
  );
};

export default GalleryImage;
