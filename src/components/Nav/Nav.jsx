import PropTypes from "prop-types";
import { IoMdClose } from "react-icons/io";
import "./nav.css";
import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";

export default function Nav({ handleCloseNav, open }) {
  const [home, setHome] = useState(true);
  const [about, setAbout] = useState(false);
  const [project, setProject] = useState(false);
  const [contact, setContact] = useState(false);

  const { scrollYProgress } = useScroll();

  const handleHome = () => {
    handleCloseNav();
    setHome(true);
    setAbout(false);
    setProject(false);
    setContact(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleAbout = () => {
    handleCloseNav();
    setHome(false);
    setAbout(true);
    setProject(false);
    setContact(false);
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };
  const handleProject = () => {
    handleCloseNav();
    setHome(false);
    setAbout(false);
    setProject(true);
    setContact(false);
    window.scrollTo({
      top: 2 * window.innerHeight,
      behavior: "smooth",
    });
  };
  const handleContact = () => {
    handleCloseNav();
    setHome(false);
    setAbout(false);
    setProject(false);
    setContact(true);
    window.scrollTo({
      top: 3.5 * window.innerHeight,
      behavior: "smooth",
    });
  };

  const handleScroll = () => {
    if (0 < window.scrollY < window.innerHeight) {
      setHome(true);
      setAbout(false);
      setProject(false);
      setContact(false);
    }
    if (window.innerHeight < window.scrollY < 2 * window.innerHeight) {
      setHome(false);
      setAbout(true);
      setProject(false);
      setContact(false);
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollY < 0.5 * windowHeight) {
        setHome(true);
        setAbout(false);
        setProject(false);
        setContact(false);
      } else if (scrollY < 1.7 * windowHeight) {
        setHome(false);
        setAbout(true);
        setProject(false);
        setContact(false);
      } else if (scrollY < 3 * windowHeight) {
        setHome(false);
        setAbout(false);
        setProject(true);
        setContact(false);
      } else if (scrollY < 4 * windowHeight) {
        setHome(false);
        setAbout(false);
        setProject(false);
        setContact(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={open ? "nav-isactive" : ""} onScroll={handleScroll}>
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      <div className={home ? "home-active" : "nav-link"} onClick={handleHome}>
        <p className={open ? "number1" : "nav-link-number"}>#01</p>
        <p className={open ? "text1" : "nav-link-text"}>HOME</p>
        <div className={home ? "line active" : "line"} />
      </div>
      <div
        className={about ? "about-active" : "nav-link"}
        onClick={handleAbout}
      >
        <p className={open ? "number2" : "nav-link-number"}>#02</p>
        <p className={open ? "text2" : "nav-link-text"}>A PROPOS</p>
        <div className={about ? "line active" : "line"} />
      </div>
      <div
        className={project ? "project-active" : "nav-link"}
        onClick={handleProject}
      >
        <p className={open ? "number3" : "nav-link-number"}>#03</p>
        <p className={open ? "text3" : "nav-link-text"}>PROJETS</p>
        <div className={project ? "line active" : "line"} />
      </div>
      <div
        className={contact ? "contact-active" : "nav-link"}
        onClick={handleContact}
      >
        <p className={open ? "number4" : "nav-link-number"}>#04</p>
        <p className={open ? "text4" : "nav-link-text"}>CONTACT</p>
        <div className={contact ? "line active" : "line"} />
      </div>
      <div className="close-mark" onClick={handleCloseNav}>
        <IoMdClose />
      </div>
    </header>
  );
}

Nav.propTypes = {
  handleCloseNav: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
};
