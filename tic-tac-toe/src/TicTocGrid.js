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
  const [clickedSpace, setClickedSpace] = useState("X");

  const player1 = "X";
  const player2 = "O";
  let blank = [player1, player2];
  let fillInValue;
  //if last clicked value was "X" then next clicked space is "O"
  function handleClickXorO() {
    if (clickedSpace === player1 && clickedSpace !== "O") {
      console.log("true");
      setClickedSpace("O");
      fillInValue = blank[0];
      <option className="clickXorO space" value={fillInValue}>
        {fillInValue}
      </option>;
    } else if (clickedSpace === player2) {
      setClickedSpace("X");
      fillInValue = blank[1];
      <option className="space" value={fillInValue}>
        {fillInValue}
      </option>;
      // return <div className="clickXorO">{player2}</div>;
    }

    // return <div className="space">{clickedSpace}</div>;
  }
  //  {clickedSpace === "X" ? player2 : player1} //using as terary reference if use them
  return (
    <>
      <div className="topRow">
        <div className="topLeft space" onClick={handleClickXorO}>
          {/* <option className="clickXorO" value={fillInValue}></option> */}
        </div>
        <div className="topCenter space" onClick={handleClickXorO}></div>
        <div className="topRight space" onClick={handleClickXorO}></div>
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
