import React from "react";
import { connect } from "react-redux";
import { setFavorite } from "../actions";
const FavoriteItem = (props) => {
  const { item } = props;
  const id = item.id || "";
  const url = id.match(/\/(\d+)\//) || [];
  const handleClick = () => {
    props.setFavorite(item);
  };
  return (
    <div className="favorite-item">
      <div className="favorite-item__overlay">
        <button onClick={handleClick}>Eliminar</button>
      </div>
      <div
        className="favorite-item__img"
        style={{
          backgroundImage: `url(https://assets.pokemon.com/assets/cms2/img/pokedex/full/00${url[1]}.png)`,
        }}
      >
        <img />
      </div>
      <div className="favorite-item__title">{item.name || "Desconocido"}</div>
    </div>
  );
};
const mapDispatchToProps = {
  setFavorite,
};
export default connect(null, mapDispatchToProps)(FavoriteItem);
