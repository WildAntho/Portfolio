import { FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

export default function FramerMagneticGithub() {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const onMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    setPosition({ x, y });
  };

  const onMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const { x, y } = position;
  return (
    <motion.div
      className="magnetic"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      ref={ref}
      animate={{ x, y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
    >
      <FaGithub className="skills-logo" id="skill-github" />
    </motion.div>
  );
}
