import React from "react";

const FavoriteItem = ({ name, ...props }) => {
  const id = props.id || "";
  const url = id.match(/\/(\d+)\//) || [];
  return (
    <div className="favorite-item">
      <div
        className="favorite-item__img"
        style={{
          backgroundImage: `url(https://pokeres.bastionbot.org/images/pokemon/${url[1]}.png)`
        }}
      >
        <img />
      </div>
      <div className="favorite-item__title">{name || "Desconocido"}</div>
    </div>
  );
};
export default FavoriteItem;
