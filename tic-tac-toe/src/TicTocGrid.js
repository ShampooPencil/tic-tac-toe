import { useState } from "react";

export default function TicTocGrid() {
  //PSYDOCODE*************
  //const player1 = x
  //const player2 = o

  //  \/\/\/\/\/\/\/\/\/
  //  NEXT TIME:
  //     FIGURE OUT A WAY TO PUT THE X FIRST THEN O(BACK AND FORTH). ON EACH SPACE PER TURN
  //     OR PER CLICK. THE TOGGLING WORKED BUT THE MAYBE MAKE IT A LITTLE BIT MORE SIMPLIER MIND SET
  //     NEXT TIME. LIKE, MAKE SURE IT GOES TO THE CORRECT SPACES FIRST. THEN
  // const [x, setX] = useState("X");
  // const [o, setO] = useState("O");
  const [clickedSpace, setClickedSpace] = useState("");
  const [blank, setBlank] = useState("");

  const player1 = "X";
  const player2 = "O";

  //if last clicked value was "X" then next clicked space is "O"
  function handleClickXorO() {
    if ("X" === clickedSpace) {
      setClickedSpace(player2);
      setBlank("O");
    } else if ("O" === clickedSpace) {
      setClickedSpace(player1);
      setBlank("X");
    } else {
      setClickedSpace(player1);
      setBlank("X");
    }
    // return <div className="space">{clickedSpace}</div>;
  }

  return (
    <>
      <div className="topRow">
        <div className="topLeft space" onClick={handleClickXorO}>
          {clickedSpace === "X" ? player2 : ""}
        </div>
        <div className="topCenter space" onClick={handleClickXorO}>
          {clickedSpace === "X" ? player2 : player1}
        </div>
        <div className="topRight space" onClick={handleClickXorO}>
          {clickedSpace === "X" ? player2 : player1}
        </div>
      </div>
      <div className="middleRow">
        <div className="middleLeft space" onClick={handleClickXorO}></div>
        <div className="middleCenter space" onClick={handleClickXorO}></div>
        <div className="middleRight space" onClick={handleClickXorO}></div>
      </div>
      <div className="bottomRow">
        <div className="bottomLeft space" onClick={handleClickXorO}></div>
        <div className="bottomMiddle space" onClick={handleClickXorO}></div>
        <div className="bottomRight space" onClick={handleClickXorO}></div>
      </div>
    </>
  );
}
