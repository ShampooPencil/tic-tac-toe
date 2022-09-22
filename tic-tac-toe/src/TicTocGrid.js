// import { useState } from "react";

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
  // const [clickedSpace, setClickedSpace] = useState();

  return (
    <>
      <div className="topRow">
        <div className="topLeft space">
          {/* <option className="clickXorO" value={fillInValue}></option> */}
        </div>
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
