import { useState } from "react";
// import Game from './Game'
export default function TicTocGrid() {
  const [player, setPlayer] = useState(["X"]);

  let lastItemNum = player.length - 1;

  //quick little jsx functions <div>'s for "X" and "O"
  function showXorO() {
    return <div>{player.at(-2)}</div>;
  }
  //Now, it adds every other letter to array aka player clicks per turn
  function changeXorO(clickAndShowLetter) {
    if (player[lastItemNum] === "X") {
      console.log(lastItemNum);
      setPlayer((player) => [...player, "O"]);
      const playerX = <div className="topLeft space">{player.at(-2)}</div>;
      console.log(player);
      // return ;
    } else {
      console.log(lastItemNum);
      const playerO = <div className="topLeft space">{player.at(-2)}</div>;
      setPlayer((player) => [...player, "X"]);
      console.log(player);
      // return playerO;
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
        <div className="topLeft space" onClick={() => changeXorO(showXorO)}></div>
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
