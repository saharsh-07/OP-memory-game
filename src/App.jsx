import "./App.css";
import Header from "./components/Header";
import { useState } from "react";
import op from "./assets/op-characters";
import CardGrid from "./components/Card-grid";

function App() {
  const [highScore, setHighScore] = useState(0);
  const [currentHigh, setCurrentHigh] = useState(0);
  const [reset, setReset] = useState(true);

  const endCurrentStage = () => {
    if (currentHigh > highScore) {
      setHighScore(currentHigh);
    }
    setCurrentHigh(0);
    setReset(true);
  };

  const incrementScore = () => {
    setCurrentHigh(() => currentHigh + 1);
    setReset(false);
  };

  return (
    <>
      <Header highScore={highScore} currentHigh={currentHigh}></Header>
      <CardGrid
        reset={reset}
        incrementScore={incrementScore}
        endCurrentStage={endCurrentStage}
        op={op}
      ></CardGrid>
    </>
  );
}

export default App;
