import React, { useState, useEffect } from "react";
import "./card.css";
import PropTypes from "prop-types";

function Card(props) {
  const [wasClicked, setWasClicked] = useState(false);

  const handleClick = () => {
    setWasClicked(!wasClicked);
    if (wasClicked) {
      props.endCurrentStage();
    } else {
      props.incrementScore();
    }
    props.randomizeCards();
  };

  useEffect(() => {
    if (props.reset) {
      setWasClicked(false);
    }
  }, [props.reset]);

  return (
    <>
      <li>
        <img src={props.image} alt={props.name} onClick={handleClick}></img>
        <br></br>
        <span>
          <strong>{props.name}</strong>
        </span>
      </li>
    </>
  );
}
Card.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  reset: PropTypes.bool,
  endCurrentStage: PropTypes.func,
  incrementScore: PropTypes.func,
  randomizeCards: PropTypes.func,
};
export default Card;
