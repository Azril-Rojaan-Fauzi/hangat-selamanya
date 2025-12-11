import { motion } from "motion/react";
import useSlideFade from "../hooks/useSlideFade";

const Profile = () => {
  const { container, child } = useSlideFade({
    axis: "x",
    distance: -50,
    delay: 0.5,
    stagger: 0.2,
  });

  return (
    <div className="px-6">
      <motion.div
        variants={container}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="flex h-full w-full flex-col items-center justify-center gap-3 bg-white p-2 md:p-3"
      >
        <motion.figure variants={child} className="h-full">
          <img
            src="/assets/profile.jpg"
            alt=""
            className="aspect-3/2 h-full object-cover object-top"
          />
        </motion.figure>

        <motion.figcaption
          variants={child}
          className="w-full bg-white p-2 text-black"
        >
          <p className="text-center text-base font-bold md:text-xl lg:text-2xl">
            Adhy Wicaksana Pratama
          </p>
          <p className="text-center text-xs font-extralight lg:text-base">
            Photographer / Editor
          </p>
        </motion.figcaption>
      </motion.div>
    </div>
  );
};

export default Profile;
