import React, { useEffect } from "react";
const Scrollbar = () => {
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.pageYoffset;
    });
  }, []);
  return <div className="favorites__scrollbar"></div>;
};
export default Scrollbar;
