import PropTypes from "prop-types";
import { motion } from "framer-motion";
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

export default function About({ lang }) {
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
      {lang === "FR" && (
        <h1 className="bienvenue">Bienvenue sur mon portfolio</h1>
      )}
      {lang === "EN" && <h1 className="bienvenue">Welcome on my portfolio</h1>}
      <div className="text-container">
        {lang === "FR" && (
          <p className="first-text">
            {
              "Après avoir travaillé comme ingénieur d'études dans l'aéronautique pendant 4 ans, j'ai décidé de me lancer dans le développement web, une passion de longue date. Cette transition de carrière est motivée par mon désir de relever de nouveaux défis et d'explorer le domaine dynamique et en constante évolution du développement web et mobile."
            }
          </p>
        )}
        {lang === "EN" && (
          <p className="first-text">
            {
              "After working as a research engineer in the aerospace industry for 4 years, I decided to venture into web development, a long-standing passion of mine. This career transition is driven by my desire to take on new challenges and explore the dynamic and ever-evolving field of web and mobile development."
            }
          </p>
        )}
        {lang === "FR" && (
          <p className="second-text">
            {
              "Depuis toujours, je suis fasciné par le monde de la technologie et du développement. Mon parcours académique m'a permis d'acquérir une solide formation en développement web et web mobile. J'ai développé une expertise en HTML, CSS, "
            }
            <span className="bold-text">JavaScript</span>, ainsi {"qu'en"}{" "}
            frameworks modernes comme <span className="bold-text">React</span>{" "}
            pour le développement frontend. Du côté backend, je suis à{" "}
            {"l'aise"} avec <span className="bold-text">Node.js</span>,{" "}
            <span className="bold-text">Express</span> et les bases de données
            comme <span className="bold-text">MySQL</span>.
          </p>
        )}
        {lang === "EN" && (
          <p className="second-text">
            {
              "I have always been fascinated by the world of technology and development. My academic background has provided me with a solid foundation in web and mobile web development. I have developed expertise in HTML, CSS, "
            }
            <span className="bold-text">JavaScript</span>, as well as in modern
            frameworks like <span className="bold-text">React</span> for
            frontend development. On the backend side, I am comfortable with{" "}
            <span className="bold-text">Node.js</span>,{" "}
            <span className="bold-text">Express</span> and databases like{" "}
            <span className="bold-text">MySQL</span>.
          </p>
        )}
      </div>
      <div className="skills-container">
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

About.propTypes = {
  lang: PropTypes.string.isRequired,
};
