import StartGame from "./Components/StartGame";
import { useState } from "react";
import GamePlay from "./Components/GamePlay";

function App() {
  const [isStartGame, setisStartGame] = useState(false);
  const toggleGame = () => {
    setisStartGame(!isStartGame);
  };

  return <>{isStartGame ? <GamePlay /> : <StartGame toggle={toggleGame} />}</>;
}

export default App;
