import React from "react";
import { connect } from "react-redux";
import { setFavorite } from "../actions";
const CarouselItem = ({ reference, img, name, isCurrent, ...props }) => {
  const selectFavorite = () => {
    props.setFavorite({ id, name });
  };
  const id = props.id || "";
  const url = id.match(/\/(\d+)\//) || [];
  const isFav = props.myList.filter((item) => item.id === props.id).shift();

  const className = `carousel-element ${
    isFav ? "carousel-element--selected" : ""
  }
  ${isCurrent ? "carousel-element--expand" : ""}
  `;
  const imgId = url[1];
  return (
    <div ref={reference} className={className}>
      <div
        onClick={selectFavorite}
        className="carousel-element__imagen"
        style={{
          backgroundImage: `url(https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${imgId}.png)`,
        }}
      />
      <div className="carousel-element__title">
        <div>{name}</div>
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  setFavorite,
};
const mapStateToProps = (state) => ({
  myList: state.myList,
});
export default connect(mapStateToProps, mapDispatchToProps)(CarouselItem);
