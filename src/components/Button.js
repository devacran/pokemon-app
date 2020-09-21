import React from "react";
import _sliderbtnr from "../assets/sliderbuttonright.svg";
import _sliderbtnl from "../assets/sliderbuttonleft.svg";
const Button = props => {
  let img, className;
  if (props.right) {
    img = _sliderbtnr;
    className = `carousel__button carousel__button--right`;
  }
  if (props.left) {
    img = _sliderbtnl;
    className = `carousel__button carousel__button--left`;
  }
  return (
    <div className={className}>
      <button onClick={props.handleClick}>
        <img src={img} />
      </button>
    </div>
  );
};
export default Button;
