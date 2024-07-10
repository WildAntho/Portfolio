import { useEffect, useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import "./App.css";
import Nav from "./components/Nav/Nav";
import About from "./components/Nav/About/About";
import Project from "./components/Project/Project";
import Contact from "./components/Contact/Contact";
import Background from "./components/Background/Background";
import First from "./components/First/First";
import Footer from "./components/Footer/Footer";
import Landing from "./components/Landing/Landing";

export default function App() {
  const [lang, setLang] = useState("FR");
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  const [open, setOpen] = useState(false);
  const handleOpenNav = () => {
    setOpen(true);
  };
  const handleCloseNav = () => {
    setOpen(false);
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
      <Landing lang={lang} open={open} />
      <About lang={lang} />
      <Project lang={lang} />
      <Contact lang={lang} />
      <Background />
      <First />
      <Footer lang={lang} />
    </main>
  );
}
