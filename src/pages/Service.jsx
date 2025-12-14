import { motion } from "motion/react";
import Footer from "../components/Footer";

const text =
  "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas animi earum dignissimos quia modi cupiditate, amet ducimus commodi pariatur nisi?";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.03,
    },
  },
};

const letter = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Service = () => {
  return (
    <div className="mx-auto min-h-screen max-w-7xl pt-24 md:pt-17">
      <div className="page-wrapper">
        <div className="flex h-full flex-col justify-center p-6">
          <motion.h3
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            exit={{ opacity: 0, y: 10, transition: { duration: 0.4 } }}
            className="text-xs md:text-sm"
          >
            | Service |
          </motion.h3>

          <motion.p
            variants={container}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
            className="py-7 text-sm wrap-break-word whitespace-normal md:text-xl"
          >
            {text.split("").map((char, index) => (
              <motion.span key={index} variants={letter}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.p>

          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            exit={{ scaleX: 0, transition: { duration: 0.4 } }}
            className="h-px w-full origin-left bg-black"
          />
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            exit={{ opacity: 0, y: 10, transition: { duration: 0.4 } }}
          >
            <Footer />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Service;
