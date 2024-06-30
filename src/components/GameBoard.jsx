export default function GameBoard({ onChangePlayer, gameBoard }) {
  const playerClickHandler = (row, col) => {
    !gameBoard[row][col] && onChangePlayer(row, col);
  };
  return (
    <ol id="game-board">
      {gameBoard.map((row, index) => (
        <li key={index}>
          <ol>
            {row.map((playerSymbol, colIndex) => {
              return (
                <li key={colIndex}>
                  <button onClick={() => playerClickHandler(index, colIndex)}>
                    {playerSymbol}
                  </button>
                </li>
              );
            })}
          </ol>
        </li>
      ))}
    </ol>
  );
}
