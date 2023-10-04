import React from "react";
import "./header.css";
import propTypes from "prop-types";

function Header(props) {
  return (
    <>
      <div className="heading">
        <h1>ONE PIECE MEMORY GAME</h1>
        <p>Best score: {props.highScore}</p>
        <p>Current High Score: {props.currentHigh}</p>
      </div>
    </>
  );
}
Header.propTypes = {
  highScore: propTypes.number,
  currentHigh: propTypes.number,
};

export default Header;
