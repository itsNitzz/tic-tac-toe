import Player from "./components/Player";
import GameBoard from "./components/GameBoard";
import Log from "./components/Log";

import usePlayer from "./hooks/player-state";
import GameOver from "./components/GameOver";

function App() {
  const [
    playerTurnHandler,
    playerTurn,
    gameBoard,
    activePlayer,
    winnerPlayer,
    reset,
  ] = usePlayer();
  let isDraw = playerTurn.length === 9 && !winnerPlayer;

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player name="Player 1" symbol="X" isActive={activePlayer === "X"} />
          <Player name="Player 2" symbol="O" isActive={activePlayer === "O"} />
        </ol>

        <GameBoard
          onChangePlayer={playerTurnHandler}
          turns={playerTurn}
          gameBoard={gameBoard}
        />
        {(winnerPlayer || isDraw) && (
          <GameOver winner={winnerPlayer} reset={reset} />
        )}
      </div>

      <Log playerLog={playerTurn} />
    </main>
  );
}

export default App;
