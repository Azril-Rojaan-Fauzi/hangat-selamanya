import { motion } from "motion/react";

const AboutText = () => {
  const variantAnimationX = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div className="flex h-full w-full flex-col justify-center px-6 md:gap-6">
      <motion.h3
        variants={variantAnimationX}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1 }}
        className="hidden text-center text-xs md:block md:text-start md:text-base"
      >
        | Who we are |
      </motion.h3>
      <motion.p
        variants={variantAnimationX}
        initial="hidden"
        animate="visible"
        transition={{ delay: 1.2 }}
        className="py-3 text-center text-sm/8 font-light md:text-start md:text-base/9 lg:text-xl/12"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
        perspiciatis doloribus voluptatem quod corrupti quia labore incidunt
        tempore dolorum officia!
      </motion.p>
    </div>
  );
};

export default AboutText;
