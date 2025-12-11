import React, { useMemo } from "react";

const useSlideFade = ({
  axis = "x",
  distance = 50,
  delay = 0,
  stagger = 0.4,
}) => {
  return useMemo(() => {
    const hidden =
      axis === "x" ? { opacity: 0, x: distance } : { opacity: 0, y: distance };
    const visible = axis === "x" ? { opacity: 1, x: 0 } : { opacity: 1, y: 0 };
    const exit =
      axis === "x" ? { opacity: 0, x: distance } : { opacity: 0, y: distance };

    return {
      container: {
        hidden: {},
        visible: {
          transition: {
            staggerChildren: stagger,
            delay,
          },
        },
        exit: {},
      },

      child: {
        hidden,
        visible: {
          ...visible,
          transition: { duration: 0.6 },
        },
        exit: {
          ...exit,
          transition: { duration: 0.4 },
        },
      },
    };
  }, [axis, distance, delay, stagger]);
};

export default useSlideFade;
