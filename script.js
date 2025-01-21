const prompt = require("prompt-sync")({ sigint: true });
let humanScore = 0;
let computerScore = 0;

// Rock Paper Scissors
// Randomly generate a prime number between 1-3
// Create a function called getComputerChoice which returns Rock, Paper or Scissors based on the number generated

function getComputerChoice() {
  let computerChoice = "";
  let randomNum = Math.floor(Math.random() * 3) + 1;
  if (randomNum === 1) {
    computerChoice = "rock";
  } else if (randomNum === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  return computerChoice;
}

let computerChoice = getComputerChoice();

console.log("Lets play rock, paper scissors!");

// Create a function called getHumanChoice which uses prompt input to get the users choice or Rock Paper of Scissors
function getHumanChoice() {
  let humanChoice = prompt(
    "Choose rock, paper or scissors. ",
    ""
  ).toLowerCase();
  if (
    humanChoice === "rock" ||
    humanChoice === "paper" ||
    humanChoice === "scissors"
  ) {
    console.log(`You chose ${humanChoice}!`);
    return humanChoice;
  } else {
    console.log("Invalid choice, try again.");
    return getHumanChoice();
  }
}

let humanChoice = getHumanChoice();

// Function to reset game if choices are the same.

function resetGame() {
  console.log("Testing reset condition.")
  let resetPrompt = prompt(`You both chose ${humanChoice}, choose again. `, "");
  console.log(resetPrompt);
  return {
    humanChoice: resetPrompt,
    computerChoice: getComputerChoice()
  };
}

humanChoice = resetGame().humanChoice;
computerChoice = resetGame().computerChoice;

// Creat a function comparing the Human and Computers choice. If the Human wins, return "You win!" else return "You loose!"

function playRound() {
  let outcome = "";

  if (humanChoice === computerChoice) {
    console.log("Checking tie condition");
    let result = resetGame();
    humanChoice = result.humanChoice;
    computerChoice = result.computerChoice;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("Checking Rock vs Paper condition...");
    outcome = `Computer chose ${computerChoice}, ${computerChoice} beats ${humanChoice}. You lose.`;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("Checking Paper vs Rock condition...");
    outcome = `You chose ${humanChoice}, ${humanChoice} beats ${computerChoice}. You win!`;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("Checking Paper vs Scissors condition...");
    outcome = `Computer chose ${computerChoice}, ${computerChoice} beats ${humanChoice}. You lose.`;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("Checking Scissors vs Paper condition...");
    outcome = `You chose ${humanChoice}, ${humanChoice} beats ${computerChoice}. You win!`;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("Checking Scissors vs Rock condition...");
    outcome = `Computer chose ${computerChoice}, ${computerChoice} beats ${humanChoice}. You lose.`;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("Checking Rock vs Scissors condition...");
    outcome = `You chose ${humanChoice}, ${humanChoice} beats ${computerChoice}. You win!`;
  }

  return outcome;
}
let outcome = playRound();
console.log(outcome);

// function playAgain() {
//   console.log("Play again?");
//   playRound();
// }

// console.log(playRound());
// console.log(playAgain());

// Create a function adding one point to the Humans score, else add 1 point to the Computers score
// Start another round
