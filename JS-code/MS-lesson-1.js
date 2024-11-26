const STARTING_POKER_CHIPS = 100; // points
const PLAYERS = 3;
const NO_OF_STARTER_CARDS = 2;
let gameHasEnded = false;

let playerOneName = "Chloe";
let playerTwoName = "Jasmine";
let playerThreeName = "Jen";

console.log(`Welcome to Texas Hold'em. The championship title will be awarded to one of these three players: ${playerOneName}, ${playerTwoName}, and ${playerThreeName}. Each player has ${STARTING_POKER_CHIPS} in their pot. We have an exciting game ahead of us. May the best player win!`);

let playerOnePoints = STARTING_POKER_CHIPS;
let playerTwoPoints = STARTING_POKER_CHIPS;
let playerThreePoints = STARTING_POKER_CHIPS;

playerOnePoints -= 100;
playerTwoPoints -=100;
playerThreePoints +=75; 

if(playerOnePoints <= 0 && playerTwoPoints <= 0 || playerTwoPoints <= 0 && playerThreePoints <= 0 || playerTwoPoints <= 0 && playerThreePoints <= 0) {
    gameHasEnded = true;
}

console.log("Game has ended: ", gameHasEnded);