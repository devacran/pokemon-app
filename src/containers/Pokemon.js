import React from "react";
import { Link } from "react-router-dom";
import _pokeball from "../assets/pokeball.svg";
import _pokeballBorder from "../assets/pokeballBorder.svg";
import Carousel from "../components/Carousel";
const Pokemon = ({ main, historyPage }) => {
  let className;
  if (main) {
    if (historyPage === "/mylist") {
      className = `pokemon page slideFromBottom`;
    } else {
      className = `pokemon page `;
    }
  } else {
    if (historyPage === "/pokemon") {
      className = `pokemon page slideDown`;
    } else {
      className = `pokemon page hide`;
    }
  }

  return (
    <div className={className}>
      <div
        className="pokeball-border"
        style={{
          backgroundImage: `url(${_pokeballBorder})`
        }}
      />
      <div className="pokeball twist">
        <Link to={historyPage === "/pokemon" ? "/pokemon" : "/mylist"}>
          <img src={_pokeball} />
        </Link>
      </div>
      <Carousel />
    </div>
  );
};

export default Pokemon;
