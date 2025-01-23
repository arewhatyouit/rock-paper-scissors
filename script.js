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
  console.log("Lets play rock, paper scissors!");
  console.log(`First computerChoice: ` + computerChoice);
  return computerChoice;
}


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

//Function to start game

function startGame() {
  let firstComputerChoice = getComputerChoice();
  let firstHumanChoice = getHumanChoice();
  playRound(firstHumanChoice, firstComputerChoice);
}

startGame();

// Creatw a function comparing the Human and Computers choice. If the Human wins, return "You win!" else return "You lose!"

function playRound(humanChoice, computerChoice) {

  let outcome = "";
  let scoreBoolean = null;

  console.log(`playRound HumanChoice: ` + humanChoice);
  console.log(`playRound ComputerChoice: ` + computerChoice);

  if (humanChoice === computerChoice) {
    let reset = resetGame(humanChoice, computerChoice);
    humanChoice = reset.humanChoice;
    computerChoice = reset.computerChoice;
  }
  
  else if (humanChoice === "rock" && computerChoice === "paper") {
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

  let scoreResult = score(humanChoice, computerChoice);

  return {
    outcome: outcome,
    scoreBoolean: scoreBoolean,
    humanScore: scoreResult.humanScore,
    computerScore: scoreResult.computerScore
  };
}

// Function to reset game if choices are the same.

function resetGame(humanChoice, computerChoice) {
  let resetPrompt = prompt(`You both chose ${humanChoice}, choose again. `, "");
  console.log(`resetGame HumanChoice: ` + humanChoice);
  console.log(`resetGame ComputerChoice: ` + computerChoice);
  return {
    humanChoice: resetPrompt,
    computerChoice: getComputerChoice()
  };
}

//Create a function to add +1 to whomever wins the round

function score(humanChoice, computerChoice) {
  let result = playRound(humanChoice, computerChoice);
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

function displayScore(scoreResult) {
  scoreResult = score();
  let scoreString = `Human: ${scoreResult.humanScore}, Computer: ${scoreResult.computerScore}`;
  return scoreString;
}

// console.log(scoreString);

//Function to reset the game

function playAgain() {
  let resetPrompt = prompt("Play again? y/n ", "");
  if (resetPrompt === "y") {
    let humanChoice = getHumanChoice();
    let computerChoice = getComputerChoice();
    let result = playRound(humanChoice, computerChoice);
    console.log(result);
    console.log(result.outcome);
    console.log(displayScore(result));
  } else {
    process.exit();
  }
}
