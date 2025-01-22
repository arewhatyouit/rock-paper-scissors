// Rock Paper Scissors

const prompt = require("prompt-sync")({ sigint: true });
let humanScore = 0;
let computerScore = 0;

// Randomly generate a prime number between 1-3 then Create a function called getComputerChoice which returns Rock, Paper or Scissors based on the number generated

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
  let resetPrompt = prompt(`You both chose ${humanChoice}, choose again. `, "");
  return {
    humanChoice: resetPrompt,
    computerChoice: getComputerChoice()
  };
}

// Creat a function comparing the Human and Computers choice. If the Human wins, return "You win!" else return "You lose!"

function playRound(humanChoice, computerChoice) {
  let outcome = "";
  let scoreBoolean = null;

  if (humanChoice === computerChoice) {
    let roundResult = resetGame();
    humanChoice = roundResult.humanChoice;
    computerChoice = roundResult.computerChoice;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    outcome = `Computer chose ${computerChoice}, ${computerChoice} beats ${humanChoice}. You lose.`;
    scoreBoolean = false;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    outcome = `You chose ${humanChoice}, ${humanChoice} beats ${computerChoice}. You win!`;
    scoreBoolean = true;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    outcome = `Computer chose ${computerChoice}, ${computerChoice} beats ${humanChoice}. You lose.`;
    scoreBoolean = false;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    outcome = `You chose ${humanChoice}, ${humanChoice} beats ${computerChoice}. You win!`;
    scoreBoolean = true;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    outcome = `Computer chose ${computerChoice}, ${computerChoice} beats ${humanChoice}. You lose.`;
    scoreBoolean = false;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    outcome = `You chose ${humanChoice}, ${humanChoice} beats ${computerChoice}. You win!`;
    scoreBoolean = true;
  }

  return {
    outcome: outcome,
    scoreBoolean: scoreBoolean
  };
}

//Create a function to add +1 to whomever wins the round

function score() {
  let result = playRound();
  if (result.scoreBoolean === true) {
    humanScore++;
  } else {
    computerScore++;
  }

  return {
    humanScore: humanScore,
    computerScore: computerScore
  };
}

//Function to display the score

function displayScore() {
  let scoreResult = score();
  let scoreString = `Human: ${scoreResult.humanScore}, Computer: ${scoreResult.computerScore}`;
  return scoreString;
}

console.log(displayScore());

//Function to reset the game

function playAgain() {
  let resetPrompt = prompt("Play again? y/n ", "");
  if (resetPrompt === "y") {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);
  } else {
    process.exit();
  }
}

console.log(playAgain());
