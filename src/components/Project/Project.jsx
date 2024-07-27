import PropTypes from "prop-types";
import { useRef } from "react";
import { motion } from "framer-motion";
import "./project.css";
import FramerMagneticHtml from "../Nav/FramerMagneticHtml";
import FramerMagneticCss from "../Nav/FramerMagneticCSS";
import FramerMagneticReact from "../Nav/FramerMagneticReact";
import FramerMagneticNode from "../Nav/FramerMagneticNode";
import FramerMagneticExpress from "../Nav/FramerMagneticExpress";
import FramerMagneticMysql from "../Nav/FramerMagneticMysql";

export default function Project({ lang }) {
  const ref = useRef();
  const ref2 = useRef();
  const ref3 = useRef();

  const handleMove = (e) => {
    let elRect = ref.current.getBoundingClientRect();

    let x = e.clientX - elRect.x;
    let y = e.clientY - elRect.y;

    let midCardWidth = elRect.width / 2;
    let midCardHeight = elRect.height / 2;

    let angleY = (x - midCardWidth) / 20;
    let angleX = (y - midCardHeight) / 20;

    ref.current.style.transform = `perspective(900px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
  };

  const handleLeave = () => {
    ref.current.style.transform = "none";
  };
  const handleMove2 = (e) => {
    let elRect = ref2.current.getBoundingClientRect();

    let x = e.clientX - elRect.x;
    let y = e.clientY - elRect.y;

    let midCardWidth = elRect.width / 2;
    let midCardHeight = elRect.height / 2;

    let angleY = (x - midCardWidth) / 20;
    let angleX = (y - midCardHeight) / 20;

    ref2.current.style.transform = `perspective(900px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
  };

  const handleLeave2 = () => {
    ref2.current.style.transform = "none";
  };
  const handleMove3 = (e) => {
    let elRect = ref3.current.getBoundingClientRect();

    let x = e.clientX - elRect.x;
    let y = e.clientY - elRect.y;

    let midCardWidth = elRect.width / 2;
    let midCardHeight = elRect.height / 2;

    let angleY = (x - midCardWidth) / 20;
    let angleX = (y - midCardHeight) / 20;

    ref3.current.style.transform = `perspective(900px) rotateX(${angleX}deg) rotateY(${angleY}deg) scale(1.1)`;
  };

  const handleLeave3 = () => {
    ref3.current.style.transform = "none";
  };

  const DURATION = 0.25;
  const STAGGER = 0.025;

  return (
    <div id="project">
      <div className="container-section">
        <p className="section-number">#03</p>
        <motion.div className="wrapper" initial="initial" whileHover="hovered">
          <div>
            <h1 className="section-title">
              {(lang === "FR" ? "PROJETS" : "PROJECTS")
                .split("")
                .map((l, i) => {
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
              {(lang === "FR" ? "PROJETS" : "PROJECTS")
                .split("")
                .map((l, i) => {
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
      <section className="project-container">
        <a href="https://aceflix-client.vercel.app/" target="blank">
          <div className="project-title">
            <h1>ACEFLIX</h1>
            <p>FRONT-END PROJECT</p>
            <div className="line-hover" />
          </div>
        </a>
        <div
          className="project-img"
          ref={ref}
          onMouseMove={handleMove}
          onMouseLeave={handleLeave}
        >
          <a href="https://aceflix-client.vercel.app/" target="blank">
            <img src="/ACEFLIX.png" alt="aceflix-img" />
            <button type="button" className="button-visit">
              VISITER
            </button>
          </a>
        </div>
        <div className="stack">
          <FramerMagneticHtml />
          <FramerMagneticCss />
          <FramerMagneticReact />
        </div>
      </section>
      <section className="project-container-2">
        <div className="stack">
          <FramerMagneticHtml />
          <FramerMagneticCss />
          <FramerMagneticReact />
        </div>
        <div
          className="project-img"
          ref={ref2}
          onMouseMove={handleMove2}
          onMouseLeave={handleLeave2}
        >
          <a href="https://out-omega-dun.vercel.app/" target="blank">
            <img src="/OUT.png" alt="aceflix-img" />
            <button type="button" className="button-visit">
              VISITER
            </button>
          </a>
        </div>
        <a href="https://out-omega-dun.vercel.app/" target="blank">
          <div className="project-title">
            <h1>OUT !</h1>
            <p>HACKATHON</p>
            <div className="line-hover" />
          </div>
        </a>
      </section>
      <section className="project-container-3">
        <a
          href="https://github.com/WildAntho/JS-Paris-BrainWaves-P3-Moovit"
          target="blank"
        >
          <div className="project-title">
            <h1>MOOVIT</h1>
            <p>FULL-STACK PROJECT</p>
            <div className="line-hover" />
          </div>
        </a>
        <div
          className="project-img"
          ref={ref3}
          onMouseMove={handleMove3}
          onMouseLeave={handleLeave3}
        >
          <a href="https://moovit.anthony-dufrenot.fr/" target="blank">
            <img src="/MOOVIT3.png" alt="aceflix-img" />
            <button type="button" className="button-visit">
              VISITER
            </button>
          </a>
        </div>
        <div className="stack">
          <FramerMagneticReact />
          <FramerMagneticNode />
          <FramerMagneticExpress />
          <FramerMagneticMysql />
        </div>
      </section>
    </div>
  );
}

Project.propTypes = {
  lang: PropTypes.string.isRequired,
};
