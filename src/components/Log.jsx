export default function Log({ playerLog }) {
  return (
    <ol id="log">
      {playerLog.map((log) => (
        <li key={`${log.square.row}-${log.square.col}`}>
          Player {log.player} selected {log.square.row}, {log.square.col}
        </li>
      ))}
    </ol>
  );
}
