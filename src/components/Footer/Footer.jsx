import PropTypes from "prop-types";
import "./footer.css";

export default function Footer({ lang }) {
  return (
    <footer className="footer">
      {lang === "FR" && (
        <p>
          Copyright © Tous droits réservés Anthony Dufrenot 2024. Développé avec
          React et animé avec Framer Motion.
        </p>
      )}
      {lang === "EN" && (
        <p>
          Copyright © All rights reserved Anthony Dufrenot 2024. Developed with
          React and animated with Framer Motion.
        </p>
      )}
    </footer>
  );
}

Footer.propTypes = {
  lang: PropTypes.string.isRequired,
};
