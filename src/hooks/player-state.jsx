import { useState } from "react";

let initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

const winningCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

function derivedActivePlayer(turn) {
  let currentPlayer = "X";
  if (turn.length && turn[0].player === "X") {
    currentPlayer = "O";
  }

  return currentPlayer;
}

function winner(gameBoard) {
  let playerEntriesArray = [];
  let winner = undefined;
  for (let player of gameBoard) {
    playerEntriesArray = playerEntriesArray.concat(player);
  }

  for (let winningIndices of winningCombinations) {
    let firstSymbol = playerEntriesArray[winningIndices[0] - 1];
    let secondSymbol = playerEntriesArray[winningIndices[1] - 1];
    let thirdSymbol = playerEntriesArray[winningIndices[2] - 1];

    if (
      firstSymbol &&
      firstSymbol === secondSymbol &&
      secondSymbol === thirdSymbol
    ) {
      winner = firstSymbol;
      break;
    }
  }

  return winner;
}

export default function usePlayer() {
  const [playerTurn, setPlayerTurn] = useState([]);

  let activePlayer = derivedActivePlayer(playerTurn);

  let gameBoard = initialGameBoard;

  for (let turn of playerTurn) {
    !gameBoard[turn.square.row][turn.square.col] &&
      (gameBoard[turn.square.row][turn.square.col] = turn.player);
  }

  let winnerPlayer = winner(gameBoard);

  function playerTurnHandler(rowIndex, colIndex) {
    setPlayerTurn((prevTurn) => {
      let currentPlayer = derivedActivePlayer(prevTurn);
      let updatedTurn = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurn,
      ];

      return updatedTurn;
    });
  }

  function reset() {
    setPlayerTurn([]);
    initialGameBoard = [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ];
  }

  return [
    playerTurnHandler,
    playerTurn,
    gameBoard,
    activePlayer,
    winnerPlayer,
    reset,
  ];
}
