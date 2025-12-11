import { motion } from "motion/react";

const Profile = () => {
  const container = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.5,
        duration: 0.2,
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      x: -50,
      transition: {
        duration: 0.4,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -30 }, // optional (boleh dibuang)
  };

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
