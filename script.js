const prompt = require("prompt-sync")({ sigint: true });
let humanScore = 0;
let computerScore = 0;

// Rock Paper Scissors
// Randomly generate a prime number between 1-3
// Create a function called getComputerChoice which returns Rock, Paper or Scissors based on the number generated

function getComputerChoice() {
  let computerChoice = "";
  randomNum = Math.floor(Math.random() * 4);
  if (randomNum === 1) {
    computerChoice = "Rock";
  } else if (randomNum === 2) {
    computerChoice = "Paper";
  } else {
    computerChoice = "Scissors";
  }
  return computerChoice;
}

console.log(getComputerChoice());

// Create a function called getHumanChoice which uses a prompt input to get the users choice or Rock Paper of Scissors
function getHumanChoice() {
  let humanChoice = prompt("Rock, Paper or Scissors? ", "");
  return humanChoice;
}

console.log(getHumanChoice());

// Creat a function comparing the Human and Computers choice. If the Human wins, return "You win!" else return "You loose!"

function playRound() {
  let computerChoice = getComputerChoice();
  let humanChoice = getHumanChoice();
  let winner = "";
  if (humanChoice === "Rock" && computerChoice === "Paper") {
    winner = "You lose! Paper beats rock!";
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    winner = "You win! Paper beats rock!";
  } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
    winner = "You lose! Scissors beats paper!";
  } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
    winner = "You win! Scissors beats paper!";
  } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
    winner = "You lose! Rock beats scissors!";
  } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
    winner = "You win! Rock beats scissors!";
  }
  return winner;
}

console.log(playRound())
// Create a function adding one point to the Humans score, else add 1 point to the Computers score
