import { motion } from "framer-motion";
import "./first.css";
import { useEffect } from "react";

export default function First() {
  useEffect(() => {
    document.body.classList.add("active-body");
    const time = setTimeout(() => {
      document.body.classList.remove("active-body");
    }, 3500);
    return () => clearTimeout(time);
  }, []);
  const all = {
    open: {
      y: "-100%",
      transition: { duration: 0.5, ease: [1, 0, 0, 1], delay: 3 },
    },
    closed: {
      y: 0,
      transition: { duration: 0.5, ease: [1, 0, 0, 1], delay: 3 },
    },
  };
  const box = {
    open: {
      height: "15%",
      transition: { duration: 0.5, ease: [1, 0, 0, 1], delay: 0.5 },
    },
    closed: {
      height: 0,
      transition: { duration: 0.5, ease: [1, 0, 0, 1], delay: 0.5 },
    },
  };
  const letterA = {
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [1, 0, 0, 1], delay: 1 },
    },
    closed: {
      opacity: 0,
      x: "100%",
      transition: { duration: 0.5, ease: [1, 0, 0, 1], delay: 1 },
    },
  };
  const letterD = {
    open: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: [1, 0, 0, 1], delay: 1 },
    },
    closed: {
      opacity: 0,
      x: "-100%",
      transition: { duration: 0.5, ease: [1, 0, 0, 1], delay: 1 },
    },
  };
  const line1 = {
    open: {
      width: "100%",
      height: "2.5px",
      transition: { duration: 0.5, ease: [1, 0, 0, 1] },
    },
    closed: {
      width: 0,
      height: "1.25px",
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] },
    },
  };

  const line2 = {
    open: {
      width: "100%",
      height: "2.5px",
      transition: { duration: 0.5, ease: [1, 0, 0, 1] },
    },
    closed: {
      width: 0,
      height: "1.25px",
      transition: { duration: 0.5, ease: [1, 0, 0, 1] },
    },
  };
  return (
    <motion.section
      className="first-landing"
      variants={all}
      initial="closed"
      animate="open"
    >
      <motion.div
        className="box-container"
        variants={box}
        initial="closed"
        animate="open"
      >
        <motion.div
          className="line-first-top"
          variants={line1}
          initial="closed"
          animate="open"
        />
        <motion.div
          className="line-first-bottom"
          variants={line2}
          initial="closed"
          animate="open"
        />
        <motion.h1 variants={letterA} initial="closed" animate="open">
          A
        </motion.h1>
        <motion.h1 variants={letterD} initial="closed" animate="open">
          D
        </motion.h1>
      </motion.div>
    </motion.section>
  );
}
