var res = document.getElementById("result");
var board = document.getElementById("board");
var mycounter = 0;
var computerCounter = 0;
function play(choice) {
  var computerChoices = ["rock", "paper", "scissor"];
  var randomIndex = Math.floor(Math.random() * computerChoices.length);
  var randomChoice = computerChoices[randomIndex];
  if (choice === randomChoice) {
    res.innerText = "there is no winner";
  } else {
    if (
      (choice === "rock" && randomChoice === "scissor") ||
      (choice === "paper" && randomChoice === "rock") ||
      (choice === "scissor" && randomChoice === "paper")
    ) {
      res.innerText = "You are a winner my friend";
      mycounter++;
    } else {
      res.innerText = "Hi you are a looser";
      computerCounter++;
    }
  }
  board.innerText =
    "My Count " + mycounter + "computer count " + computerCounter;
}
