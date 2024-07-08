import { motion } from "framer-motion";
import { CiMail } from "react-icons/ci";
import { BsInstagram, BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./contact.css";

export default function Contact() {
  const DURATION = 0.25;
  const STAGGER = 0.025;
  return (
    <div id="contact">
      <div className="container-section">
        <p className="section-number">#04</p>
        <motion.div className="wrapper" initial="initial" whileHover="hovered">
          <div>
            <h1 className="section-title">
              {"CONTACT".split("").map((l, i) => {
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
              {"CONTACT".split("").map((l, i) => {
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
      <div className="contact-container">
        <div>
          <h1 className="last-sentence">
            {"Prêt à créer quelque chose ensemble ?"}
          </h1>
          <h1 className="gradient">{"Discutons-en !"}</h1>
        </div>
        <div className="react-strictmode">
          <p className="react">
            {"< React"}
            <span className="mode">{"Mode />"}</span>
          </p>
          <p className="localisation">Paris, FRANCE</p>
          <div className="mail-container">
            <CiMail className="mail-icon" />
            <a href="mailto:anthony.dufrenot@gmail.com">
              Me contacter par email
            </a>
          </div>
        </div>
        <div className="link-social">
          <a href="https://github.com/WildAntho" target="blank">
            <FaGithub className="logo-social" id="git" />
          </a>
          <a
            href="https://www.linkedin.com/in/anthony-dufrenot-64275510a/"
            target="blank"
          >
            <FaLinkedin className="logo-social" id="linkedin" />
          </a>
          <a href="https://www.instagram.com/anthony.dufrenot/" target="blank">
            <BsInstagram className="logo-social" id="insta" />
          </a>
          <a href="https://x.com/Antho94971" target="blank">
            <BsTwitterX className="logo-social" id="twitter" />
          </a>
        </div>
      </div>
    </div>
  );
}
