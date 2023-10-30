console.log("Welcome to Tic Tac Toe");

let turn = "X";
let isgameover = false;

const changeTurn = () => {
  return turn === "X" ? "O" : "X";
};

const checkWin = () => {
  let boxText = document.getElementsByClassName("boxText");
  let wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]


  wins.forEach((element) => {
    if (
      boxText[element[0]].innerText === boxText[element[1]].innerText &&
      boxText[element[2]].innerText === boxText[element[1]].innerText &&
      boxText[element[0]].innerText !== ""
    ) {
      document.querySelector(".info").innerText =
        boxText[element[0]].innerText + " Won ";
      isgameover = true
      return
    }
  });
};






//Game Logic

let boxes = document.getElementsByClassName("cell");
Array.from(boxes).forEach((element) => {
  let boxText = element.querySelector(".boxText");
  element.addEventListener("click", () => {
    if (boxText.innerText === "") {
      boxText.innerText = turn;
      turn = changeTurn();
      checkWin();
      if (!isgameover) {
        document.getElementsByClassName("info")[0].innerText =
          "Turn for " + turn;
      }
    }
  });
});


//to reset and start the new game

reset.addEventListener('click', () =>{
    let boxText = document.querySelectorAll('.boxText');
    Array.from(boxText).forEach(element => {
        element.innerText = [""]
    });
    turn = "X";
    isgameover = false
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    unclick();
} )
