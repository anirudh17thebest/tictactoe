import { React, useState } from "react";
import "./App.css";
import Swal from "sweetalert2";

function App() {
  const [content, setContent] = useState({
    player: "X",
    board: ["", "", "", "", "", "", "", "", ""],
  });

  const Clicked = (index) => {
    let player = content.player;
    let board = content.board;
    board[index] = player;
    let winning_combos = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winning_combos.length; i++) {
      let winner = winning_combos[i];
      let p1 = winner[0];
      let p2 = winner[1];
      let p3 = winner[2];
      if (
        board[p1] !== "" &&
        board[p1] === board[p2] &&
        board[p2] === board[p3] &&
        board[p3] === board[p1] &&
        board[p3] !== ""
      ) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: `${player} has won`,
          showConfirmButton: false,
          timer: 1500,
        });
        setContent({
          player: "X",
          board: ["", "", "", "", "", "", "", "", ""],
        });
        return;
      }
    }

    player = player === "X" ? "O" : "X";
    setContent({
      player: player,
      board: board,
    });
  };
  return (
    <>
      <p className="title">TIC-TAC-TOE</p>
      <div className="container">
        <div className="board">
          {content.board.map((i, index) => {
            return (
              <div
                key={index}
                onClick={() => Clicked(index)}
                className="square"
              >
                <p className="Zero">{i}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
