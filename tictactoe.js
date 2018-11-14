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
//FUCK
const crossSymbol = "❌";
const winCombinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [6, 4, 2]];
//different winning combinations
const gameBoard = document.getElementById('board');
//Grabs the cells by looking at everything with the class "pos"
// whats document.getElementById?
//Document. getElementbyID is saying go to the html file and get the element that has the ID in the parantheses.
//board is saying whenever you use that varaible your cover the entire thing
const cells = document.querySelectorAll('.pos');
//Grabs what the player's symbol is through the symbol button!
//querySelectorAll TELLS WHAT CELL
const playerSymbol = document.querySelectorAll('.symbol');

//Board array

//Gonna set the symbol to player one and the "AI" based on what they pick later on.
var playerOne;
var playTurn; //Picks either 1 or 2 to figure out who goes first!
var gameAI;
let pOneScore = 0;
let pTwoScore = 0;

startGame();
//making a function , defining two varaibles saying each array/cell making it 0 at first.
function startGame(){
  pOneScore = 0;
  pTwoScore = 0;
  //clearBoard();
  //creating a for loop
}

function setPlayerX(){
  playerOne = crossSymbol;
  console.log(`Player is now ${crossSymbol}`);
}
function setPlayerO(){
  playerOne = circleSymbol;
  console.log(`Player is now ${circleSymbol}`);
}
