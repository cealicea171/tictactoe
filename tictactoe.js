//•   first start 3X3 GRID
// make a class for each cell
//•	2 players
//•	Only one winner
//•	Place one symbol per turn, one empty space
//•	Players take turns
//•	Three in a row wins up and down
// topright to bottomleft
// left and right topleft to bottomright
// •	If full, no winner, restart till death
// •	Randomly choose who goes first
// •	Place symbol by clicking a square or with a keyboard
// •	Make sure it looks good
///first ma
const circleSymbol = "⭕️";
const crossSymbol = "❌";
const winCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]];
const gameBoard = document.getElementById('board');
//Grabs the cells by looking at everything with the class "pos"
const cells = document.querySelectorAll('.pos');
//Grabs what the player's symbol is through the symbol button!
const playerSymbol = document.querySelectorAll('.symbol');

//Board array
var tttBoard;

//Gonna set the symbol to player one and the "AI" based on what they pick later on.
var playerOne;
var playTurn; //Picks either 1 or 2 to figure out who goes first!
var gameAI;
let pOneScore = 0;
let pTwoScore = 0;

startGame();

function startGame(){
  pOneScore = 0;
  pTwoScore = 0;
  clearBoard();
  document.querySelector(".buttons").style.display = "none";
  document.querySelector(".chooseSymbol").style.display = "none";
  for (let j = 0; j < gameBoard.length; j++){
      gameType[j].addEventListener('click', chooseSymbol, false);
    };
}

//Fuckin hell
gameBoard.addEventListener('click', result);
