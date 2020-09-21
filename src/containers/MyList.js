import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Scrollbar from "../components/Scrollbar";
import FavoriteItem from "../components/FavoriteItem";

const MyList = ({ historyPage, main, favoritesList }) => {
  let className;
  if (main) {
    className = `favorites page`;
  } else {
    if (historyPage === "/favorites") {
      className = `favorites page slideUp`;
    } else if (historyPage === "/mylist") {
      className = `favorites page`;
    }
  }
  return (
    <div className={className}>
      <h1>MY POKEBALL</h1>
      <div className="favorites__container">
        <div className="favorites__grid">
          {favoritesList.map(item => {
            console.log(item);
            return <FavoriteItem {...item} />;
          })}
        </div>
        <Scrollbar />
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  favoritesList: state.myList
});
export default connect(mapStateToProps)(MyList);
