import { useState } from "react";

export default function TicTocGrid() {
  //PSYDOCODE*************
  //const player1 = x
  //const player2 = o

  //  \/\/\/\/\/\/\/\/\/

  // const [x, setX] = useState("X");
  // const [o, setO] = useState("O");

  // const player1 = x;
  // const player2 = o;

  // function handleClickXorO() {}

  return (
    <>
      {/* <div className="container">
        <div className="leftVerticalBar"></div>
        <div className="rightVericalBar"></div>
        <div className="topHorizontalBar"></div>
        <div className="bottomHorizontalBar"></div>
      </div> */}
      {/* <div class="maincolumn">
          <div class="container">
            <h2>****this is going to be the scoreboard******</h2>
          </div>
        </div> */}
      <div className="topRow">
        <div className="topLeft space"></div>
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
