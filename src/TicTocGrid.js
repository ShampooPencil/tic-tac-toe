import { useState } from "react";
// import Game from "./Game.js";
export default function TicTocGrid() {
  const [letter, setLetter] = useState();
  // const letterX = "X";
  // const letterO = "O";

  //some logic ideas:

  //Pseudocode(after working on logic)

  //Notes

  function SetLetter() {
    if ("" === letter && letter !== "O") {
      setLetter("X");
    } else {
      setLetter("O");
    }
  }
  return (
    <>
      <div className="topRow">
        <button className="topLeft space" onClick={() => SetLetter()}>
          {letter}
        </button>
        <button className="topCenter space" onClick={() => SetLetter()}>
          {letter}
        </button>
        <button className="topRight space"></button>
      </div>
      <div className="middleRow">
        <button className="middleLeft space"></button>
        <button className="middleCenter space"></button>
        <button className="middleRight space"></button>
      </div>
      <div className="bottomRow">
        <button className="bottomLeft space"></button>
        <button className="bottomMiddle space"></button>
        <button className="bottomRight space"></button>
      </div>
    </>
  );
}
