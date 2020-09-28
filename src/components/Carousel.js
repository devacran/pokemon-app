import React, { useRef, useState, useEffect } from "react";
import { connect } from "react-redux";
import { getPokemon } from "../utils/getData";
import Button from "../components/Button";
import CarouselItem from "../components/CarouselItem";
const Carousel = () => {
  const [currentItem, setCurrentItem] = useState(1);
  const [pokemonList, setPokemonList] = useState(["", "", ""]);
  const carousel = useRef(null);
  const item = useRef(null);

  useEffect(() => {
    getPokemon().then(data => setPokemonList(data));
  }, []);
  let currentPosition;
  const handleForwards = () => {
    if (currentItem < 2) return;
    setCurrentItem(currentItem - 1);
    if (!currentPosition) {
      currentPosition = window.getComputedStyle(carousel.current).transform;
    }
    let itemWidth = window.getComputedStyle(item.current).width;
    currentPosition = currentPosition.match(
      /^(matrix\(\d+,\s?\d+,\s?\d+,\s?\d+,\s?)(\-?\d+)/
    );
    carousel.current.style.transform = `translateX(${parseInt(
      currentPosition[2]
    ) + parseInt(itemWidth)}px)`;
  };

  const handleBackwards = () => {
    setCurrentItem(currentItem + 1);
    let itemWidth = window.getComputedStyle(item.current).width;
    if (!currentPosition) {
      currentPosition = window.getComputedStyle(carousel.current).transform;
    }
    currentPosition = currentPosition.match(
      /^(matrix\(\d+,\s?\d+,\s?\d+,\s?\d+,\s?)(\-?\d+)/
    );
    carousel.current.style.transform = `translateX(${parseInt(
      currentPosition[2]
    ) - parseInt(itemWidth)}px)`;
  };
  return (
    <div className="carousel">
      <Button handleClick={handleForwards} right />
      <Button handleClick={handleBackwards} left />
      <div ref={carousel} className="carousel__strip">
        {pokemonList.map((pokemon, index) => (
          <CarouselItem
            isCurrent={currentItem === index}
            key={pokemon.url}
            id={pokemon.url}
            reference={item}
            name={pokemon.name}
            img={""}
          />
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  myList: state.myList
});
export default connect(mapStateToProps)(Carousel);
