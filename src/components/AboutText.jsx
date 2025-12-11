import { motion } from "motion/react";

const AboutText = () => {
  const container = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 1,
        duration: 0.2,
        staggerChildren: 0.2,
      },
    },
    exit: {
      opacity: 0,
      x: 50,
      transition: {
        duration: 0.4,
      },
    },
  };

  const child = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: 50 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="flex h-full w-full flex-col justify-center px-6 md:gap-6"
    >
      <motion.h3
        variants={child}
        className="hidden text-center text-xs md:block md:text-start md:text-base"
      >
        | Who we are |
      </motion.h3>

      <motion.p
        variants={child}
        className="py-3 text-center text-sm/8 font-light md:text-start md:text-base/9 lg:text-xl/12"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
        perspiciatis doloribus voluptatem quod corrupti quia labore incidunt
        tempore dolorum officia!
      </motion.p>
    </motion.div>
  );
};

export default AboutText;
