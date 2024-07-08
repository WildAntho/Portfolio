import { useRef } from "react";
import { useInView, motion } from "framer-motion";
import "./about.css";
import FramerMagneticHtml from "../FramerMagneticHtml";
import FramerMagneticCss from "../FramerMagneticCSS";
import FramerMagneticJs from "../FramerMagneticJs";
import FramerMagneticReact from "../FramerMagneticReact";
import FramerMagneticNode from "../FramerMagneticNode";
import FramerMagneticExpress from "../FramerMagneticExpress";
import FramerMagneticGit from "../FramerMagneticGit";
import FramerMagneticMysql from "../FramerMagneticMysql";
import FramerMagneticGithub from "../FramerMagneticGithub";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const DURATION = 0.25;
  const STAGGER = 0.025;

  return (
    <section id="about">
      <div className="container-section">
        <p className="section-number">#02</p>
        <motion.div className="wrapper" initial="initial" whileHover="hovered">
          <div>
            <h1 className="section-title">
              {"ABOUT".split("").map((l, i) => {
                return (
                  <motion.span
                    key={i}
                    variants={{
                      initial: { y: 0 },
                      hovered: { y: "-100%" },
                    }}
                    transition={{
                      duration: DURATION,
                      ease: "easeInOut",
                      delay: STAGGER * i,
                    }}
                  >
                    {l}
                  </motion.span>
                );
              })}
            </h1>
          </div>
          <div className="hidden-text">
            <h1 className="section-title">
              {"ABOUT".split("").map((l, i) => {
                return (
                  <motion.span
                    key={i}
                    variants={{
                      initial: { y: "100%" },
                      hovered: { y: 0 },
                    }}
                    transition={{
                      duration: DURATION,
                      ease: "easeInOut",
                      delay: STAGGER * i,
                    }}
                  >
                    {l}
                  </motion.span>
                );
              })}
            </h1>
          </div>
        </motion.div>
      </div>
      <h1 className="bienvenue">Bienvenue sur mon portfolio</h1>
      <div className="text-container">
        <p className="first-text">
          {
            "Après avoir travaillé comme ingénieur d'études dans l'aéronautique pendant 4 ans, j'ai décidé de me lancer dans le développement web, une passion de longue date. Cette transition de carrière est motivée par mon désir de relever de nouveaux défis et d'explorer le domaine dynamique et en constante évolution du développement web et mobile."
          }
        </p>
        <p className="second-text">
          {
            "Depuis toujours, je suis fasciné par le monde de la technologie et du développement. Mon parcours académique m'a permis d'acquérir une solide formation en développement web et web mobile. J'ai développé une expertise en HTML, CSS, "
          }
          <span className="bold-text">JavaScript</span>, ainsi {"qu'en"}{" "}
          frameworks modernes comme <span className="bold-text">React</span>{" "}
          pour le développement frontend. Du côté backend, je suis à {"l'aise"}{" "}
          avec <span className="bold-text">Node.js</span>,{" "}
          <span className="bold-text">Express</span> et les bases de données
          comme <span className="bold-text">MySQL</span>.
        </p>
      </div>
      <div
        className="skills-container"
        ref={ref}
        style={{
          transform: isInView ? "none" : "translateX(-500px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(1, 0, 0, 1.5)",
        }}
      >
        <FramerMagneticHtml />
        <FramerMagneticCss />
        <FramerMagneticJs />
        <FramerMagneticReact />
        <FramerMagneticNode />
        <FramerMagneticExpress />
        <FramerMagneticMysql />
        <FramerMagneticGit />
        <FramerMagneticGithub />
      </div>
    </section>
  );
}
