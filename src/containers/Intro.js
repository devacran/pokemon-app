import React from "react";
import { Link } from "react-router-dom";
import _logo from "../assets/logo.svg";
const Intro = ({ historyPage, main }) => {
  let className;
  if (main) {
    className = `home page`;
  } else {
    className = `home page slideUp`;
  }
  return (
    <div className={className}>
      <div className="home__container">
        <div className="home__logo">
          <img src={_logo} />
        </div>
        <div className="home__button">
          <Link to="/pokemon">
            <h1>ENTRAR</h1>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
