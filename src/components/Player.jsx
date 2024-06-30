import { useState } from "react";

export default function Player({ name, symbol, isActive }) {
  const [isEditable, setIsEditable] = useState(false);
  const [playerName, setPlayerName] = useState(name);

  const onClickHandler = () => {
    setIsEditable((prevState) => !prevState);
  };

  const playerEditState = isEditable ? (
    <input
      type="text"
      name="playerName"
      value={playerName}
      onChange={(e) => {
        setPlayerName(e.target.value);
      }}
      required
    />
  ) : (
    <span className="player-name">{playerName}</span>
  );

  return (
    <li className={isActive ? "active" : ""}>
      <span className="player">
        {playerEditState}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={onClickHandler}>{isEditable ? "Save" : "Edit"}</button>
    </li>
  );
}
