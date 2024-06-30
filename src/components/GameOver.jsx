export default function GameOver({ winner, reset }) {
  const onResetMatch = () => {
    reset();
  };
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {!winner && <p>Match Draw!</p>}
      <p>
        <button onClick={onResetMatch}>Rematch!</button>
      </p>
    </div>
  );
}
