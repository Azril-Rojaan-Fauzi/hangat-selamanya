import { motion } from "motion/react";
const Profile = () => {
  const variantAnimationX = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="px-6">
      <motion.div
        variants={variantAnimationX}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.5 }}
        className="flex h-full w-full flex-col items-center justify-center gap-3 bg-white p-2 md:p-3"
      >
        <motion.figure
          className="h-full"
          variants={variantAnimationX}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.7 }}
        >
          <img
            src="/assets/profile.jpg"
            alt=""
            className="aspect-3/2 h-full object-cover object-top"
          />
        </motion.figure>
        <motion.figcaption
          variants={variantAnimationX}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.9 }}
          className="bottom-0 w-full bg-white p-2 text-black"
        >
          <p className="text-center text-base font-bold md:text-xl lg:text-2xl">
            Adhy Wicaksana Pratama
          </p>
          <p className="md text-center text-xs font-extralight lg:text-base">
            Photographer / Editor
          </p>
        </motion.figcaption>
      </motion.div>
    </div>
  );
};

export default Profile;
