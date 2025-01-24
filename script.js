// Rock Paper Scissors Game

const prompt = require("prompt-sync")({ sigint: true });

let humanScore = 0;
let computerScore = 0;

//Function to randomly generate a prime number between 1-3 then Create a function called getComputerChoice which returns Rock, Paper or Scissors based on the number generated
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
  console.log("Lets play rock, paper scissors!");
  return computerChoice;
}

//Function called getHumanChoice which uses prompt input to get the users choice or Rock Paper of Scissors

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
    console.log("Invalid choice. Please enter rock, paper, or scissors.");
    return getHumanChoice();
  }
}

//Function to start game

function startGame() {
  let firstComputerChoice = getComputerChoice();
  let firstHumanChoice = getHumanChoice();
  let result = playRound(firstHumanChoice, firstComputerChoice);
  console.log(result.outcome); // Show who won
  let currentScore = score(result); // Update the score
  console.log(displayScore(currentScore)); // Show the score
  playAgain();
}

startGame();

// Function comparing the Human and Computers choice. If the Human wins, return "You win!" else return "You lose!"

function playRound(humanChoice, computerChoice) {
  let outcome = "";
  let scoreBoolean = null;

  if (humanChoice === computerChoice) {
    let reset = resetGame(humanChoice, computerChoice);
    return playRound(reset.humanChoice, reset.computerChoice);
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
    scoreBoolean: scoreBoolean,
  };
}

// Function to reset game if choices are the same.

function resetGame(humanChoice, computerChoice) {
  let resetPrompt = prompt(
    `You both chose ${humanChoice}, choose again. `,
    ""
  ).toLocaleLowerCase();
  humanChoice = resetPrompt;

  if (
    resetPrompt === "rock" ||
    resetPrompt === "paper" ||
    resetPrompt === "scissors"
  ) {
    humanChoice = resetPrompt;
    let randomNum = Math.floor(Math.random() * 3) + 1;

    if (randomNum === 1) {
      computerChoice = "rock";
    } else if (randomNum === 2) {
      computerChoice = "paper";
    } else {
      computerChoice = "scissors";
    }

    return {
      humanChoice: humanChoice,
      computerChoice: computerChoice,
    };
  } else {
    console.log("Invalid choice. Please enter rock, paper, or scissors.");
    return resetGame(humanChoice, computerChoice);
  }
}

//Create a function to add +1 to whomever wins the round

function score(result) {
  if (result.scoreBoolean === true) {
    humanScore++;
  } else {
    computerScore++;
  }
  return {
    humanScore: humanScore,
    computerScore: computerScore,
  };
}

//Function to display the score

function displayScore(scoreResult) {
  let scoreString = `Human: ${scoreResult.humanScore}, Computer: ${scoreResult.computerScore}`;
  return scoreString;
}

//Function to reset the game

function playAgain() {
  let resetPrompt = prompt("Play again? y/n ", "");
  if (resetPrompt === "y") {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice(); // Using existing function
    let result = playRound(humanChoice, computerChoice);
    let currentScore = score(result);
    console.log(result.outcome);
    console.log(displayScore(currentScore));
    playAgain();
  } else if (resetPrompt === "n") {
    process.exit();
  } else {
    console.log("Invalid choice. Please enter 'y' or 'n'");
    playAgain();
  }
}
