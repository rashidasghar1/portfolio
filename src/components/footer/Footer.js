import React, {useContext} from "react";
import "./Footer.scss";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <Fade bottom duration={1000} distance="5px">
      <div className="footer-div">
        {/* <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
          {emoji("Made with ❤️ by DeveloperFolio Team")}
        </p> */}
        <div className="footer-text">
          <p>© 2025 Rashid Asghar. All rights reserved.</p>
        </div>

        <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
        {" "}
          {/* <a
            href="https://github.com/saadpasta/developerFolio"
            target="_blank"
            rel="noreferrer"
          >
            developerFolio
          </a> */}
        </p>
      </div>
    </Fade>
  );
}
