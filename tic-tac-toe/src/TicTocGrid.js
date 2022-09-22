import { useState } from "react";
// import Game from './Game'
export default function TicTocGrid() {
  const [player, setPlayer] = useState(["X"]);

  let lastItemNum = player.length - 1;

  function changeXorO(e) {
    if (player[lastItemNum] === "X") {
      console.log(lastItemNum);
      setPlayer((player) => [...player, "O"]);
      const playerX = <div className="topLeft space">{player.at(-2)}</div>;
      console.log(player);
      return <div>{playerX}</div>;
    } else {
      console.log(lastItemNum);
      const playerO = <div className="topLeft space">{player.at(-2)}</div>;
      setPlayer((player) => [...player, "X"]);
      console.log(player);
      return playerO;
    }
  }
  // function ActionLink() {
  //   const handleClick = (e) => {
  //     e.preventDefault();
  //     console.log('The link was clicked.');
  //   }

  //   return (
  //     <button onClick={handleClick}>
  //       Click me
  //     </button>
  //   );
  // }

  return (
    <>
      <div className="topRow">
        <div className="topLeft space" onClick={changeXorO}></div>
        <div className="topCenter space"></div>
        <div className="topRight space"></div>
      </div>
      <div className="middleRow">
        <div className="middleLeft space"></div>
        <div className="middleCenter space"></div>
        <div className="middleRight space"></div>
      </div>
      <div className="bottomRow">
        <div className="bottomLeft space"></div>
        <div className="bottomMiddle space"></div>
        <div className="bottomRight space"></div>
      </div>
    </>
  );
}
