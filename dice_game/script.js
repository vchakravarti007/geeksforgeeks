let rollbtn = document.getElementById("rollButton");
let scoredisplay1 = document.getElementById("score1");
let scoredisplay2 = document.getElementById("score2");
let messageDisplay = document.getElementById("message");
let restart = document.getElementById("newGame");

let p1score = 0;
let p2score = 0;
let currentPlayer = 1;
let diceRoll = 0;

rollbtn.addEventListener("click", () => {
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  diceRoll++;

  if (currentPlayer === 1) {
    p1score += randomNumber;
    scoredisplay1.textContent = p1score;
    currentPlayer = 2; // 2 player turn
  } else {
    p2score += randomNumber;
    scoredisplay2.textContent = p2score;
    currentPlayer = 1; // 1 player turn
  }
  messageDisplay.textContent = `Roll ${diceRoll}: Player ${currentPlayer} turn`;
  if (p1score >= 20) {
    endGame("Player 1 Wins");
  } else if (p2score >= 20) {
    endGame("Player 2 Wins");
  }
});

function endGame(msg) {
  rollbtn.disabled = true;
  messageDisplay.textContent = msg;
}

newGame.addEventListener("click", () => {
  location.reload();
});
