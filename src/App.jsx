import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { RxHamburgerMenu } from "react-icons/rx";
import "./App.css";
import Nav from "./components/Nav/Nav";
import About from "./components/Nav/About/About";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Background from "./components/Background/Background";
import First from "./components/First/First";
import Footer from "./components/Footer/Footer";

export default function App() {
  const [lang, setLang] = useState("FR");
  console.log(lang);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHover, setIsHover] = useState(false);

  const updateMousePosition = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", updateMousePosition);
    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  });
  const { x, y } = mousePosition;
  const size = isHover ? 400 : 40;
  const [open, setOpen] = useState(false);

  const handleOpenNav = () => {
    setOpen(true);
  };

  const handleCloseNav = () => {
    setOpen(false);
  };

  const handleAbout = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <main id="main-container">
      <div className="langage-selector">
        <p
          className={lang === "FR" ? "active-FR" : ""}
          onClick={() => setLang("FR")}
        >
          FR
        </p>
        <p
          className={lang === "EN" ? "active-EN" : ""}
          onClick={() => setLang("EN")}
        >
          EN
        </p>
      </div>
      <div className="burger" onClick={handleOpenNav}>
        <RxHamburgerMenu />
      </div>
      <Nav handleCloseNav={handleCloseNav} open={open} lang={lang} />
      <section className="landing">
        <section className="presentation">
          <div className="container-anthony">
            <h1 className="Anthony">ANTHONY DUFRENOT</h1>
            {lang === "FR" && (
              <p className="job-name">
                DEVELOPPEUR WEB / WEB MOBILE FULL STACK
              </p>
            )}
            {lang === "EN" && (
              <p className="job-name">
                WEB & WEB MOBILE DEVELOPER / FULL STACK
              </p>
            )}
          </div>
        </section>
        <motion.section
          className="presentation mask"
          animate={{
            WebkitMaskPosition: `${x - size / 2}px ${y - size / 2}px`,
            WebkitMaskSize: `${size}px`,
          }}
          transition={{ type: "tween", ease: "backOut" }}
        >
          <div
            className="container-anthony"
            onMouseEnter={() => setIsHover(true)}
            onMouseLeave={() => setIsHover(false)}
          >
            {lang === "FR" && (
              <h1 className="Anthony">{"CONSTRUIRE L'AVENIR DU WEB"}</h1>
            )}
            {lang === "EN" && (
              <h1 className="Anthony">{"BUILDING THE FUTURE OF THE WEB"}</h1>
            )}
            {lang === "FR" && (
              <p className="job-name">{"AUJOURD'HUI & ENSEMBLE"}</p>
            )}
            {lang === "EN" && <p className="job-name">{"TODAY & TOGETHER"}</p>}
          </div>
        </motion.section>
        {!open && (
          <div className="scroll-logo-container" onClick={handleAbout}>
            <div className="phone-logo">
              <svg
                className="svg-logo"
                xmlns="http://www.w3.org/2000/svg"
                id="Layer_1"
                data-name="Layer 1"
                viewBox="0 0 24 24"
                width="60"
                height="100"
              >
                <path d="M15,0h-6c-2.757,0-5,2.243-5,5v14c0,2.757,2.243,5,5,5h6c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5Zm-2,21h-2c-.552,0-1-.448-1-1s.448-1,1-1h2c.552,0,1,.448,1,1s-.448,1-1,1Z" />
              </svg>
              <svg
                className="svg-arrow"
                xmlns="http://www.w3.org/2000/svg"
                id="Bold"
                viewBox="0 0 24 24"
                width="15"
                height="30"
              >
                <path d="M18.427,16.935a1.5,1.5,0,0,0-2.121,0l-2.781,2.779L13.5,1.5A1.5,1.5,0,0,0,12,0h0a1.5,1.5,0,0,0-1.5,1.5l.023,18.2L7.76,16.935a1.5,1.5,0,0,0-2.121,2.121l3.919,3.919a3.5,3.5,0,0,0,4.949,0l3.92-3.919A1.5,1.5,0,0,0,18.427,16.935Z" />
              </svg>
            </div>
          </div>
        )}
      </section>
      <About lang={lang}/>
      <Project lang={lang}/>
      <Contact lang={lang}/>
      <Background />
      <First />
      <Footer lang={lang}/>
    </main>
  );
}
