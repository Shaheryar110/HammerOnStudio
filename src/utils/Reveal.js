import React, { useRef } from "react";
import { useAnimation, useInView, motion } from "framer-motion";
export const Reveal = ({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <div style={{ position: "relative" }} ref={ref}>
      <motion.div
        variants={{
          hidden: { opacity: isInView ? 0 : 1, y: isInView ? 75 : 0 },
          visible: { opacity: isInView ? 1 : 0, y: isInView ? 0 : 75 },
        }}
        initial="hidden"
        animate="visible"
        transition={{
          duration: isInView ? 0.5 : 0,
          delay: isInView ? 0.25 : 0,
        }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: isInView ? 0 : "100%" },
          visible: { left: isInView ? "100%" : 0 },
        }}
        initial={"hidden"}
        animate={"visible"}
        transition={{ duration: 0.7, ease: "easeIn" }}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,

          left: 0,
          right: 0,
          backgroundColor: "black",
          zIndex: 99,
        }}
      />
    </div>
  );
};

export const fadeLeft = ({ children, refs }) => {
  const isInView = useInView(refs);
  return (
    <div>
      <motion.div
        variants={{
          hidden: { opacity: isInView ? 0 : 1, x: isInView ? 100 : 0 },
          visible: { opacity: isInView ? 1 : 0, x: isInView ? 0 : 200 },
        }}
        initial={"hidden"}
        animate={"visible"}
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        {children}
      </motion.div>
    </div>
  );
};
