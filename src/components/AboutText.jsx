import { motion } from "motion/react";
import useSlideFade from "../hooks/useSlideFade";

const AboutText = () => {
  const { container, child } = useSlideFade({
    axis: "x",
    distance: 50,
    delay: 0.5,
    stagger: 0.2,
  });

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
