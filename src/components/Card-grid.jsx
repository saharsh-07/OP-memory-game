import React, { useState } from "react";
import PropTypes from "prop-types";
import op from "../assets/op-characters";
import Card from "./Card";

const CardGrid = (props) => {
  const randomizeCards = () => {
    setPositions(shuffleArray(positions));
  };
  const [positions, setPositions] = useState(op.map((value, index) => index));
  const shuffleArray = (array) => {
    let shuffledArray = array.slice(0);
    for (let i = 0; i < shuffledArray.length; i++) {
      const j = Math.floor(Math.random() * shuffledArray.length);
      [shuffledArray[i], shuffledArray[j]] = [
        shuffledArray[j],
        shuffledArray[i],
      ];
    }
    return shuffledArray;
  };
  return (
    <>
      <ul>
        {positions.map((position) => {
          return (
            <Card
              key={op[position].name}
              image={op[position].img}
              name={op[position].name}
              reset={props.reset}
              endCurrentStage={props.endCurrentStage}
              incrementScore={props.incrementScore}
              randomizeCards={randomizeCards}
            />
          );
        })}
      </ul>
    </>
  );
};

CardGrid.propTypes = {
  op: PropTypes.array,
  reset: PropTypes.bool,
  endCurrentStage: PropTypes.func,
  incrementScore: PropTypes.func,
};

export default CardGrid;
