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

function getComputerChoiceReset() {
  let computerChoice = "";
  let randomNum = Math.floor(Math.random() * 3) + 1;
  if (randomNum === 1) {
    computerChoice = "rock";
  } else if (randomNum === 2) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }
  console.log(`Reset computerChoice: ` + computerChoice);
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
  let result = playRound(firstHumanChoice, firstComputerChoice);
  console.log(result);
  console.log(result.outcome);
  console.log(displayScore(result));
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

  score(humanChoice, computerChoice);
  displayScore();
  playAgain();

  return {
    outcome: outcome,
    scoreBoolean: scoreBoolean,
  };
}

// Function to reset game if choices are the same.

function resetGame(humanChoice, computerChoice) {
  let resetPrompt = prompt(`You both chose ${humanChoice}, choose again. `, "");
  console.log(`resetGame HumanChoice: ` + humanChoice);
  resetComputerChoice = getComputerChoiceReset();
  console.log(`resetGame ComputerChoice: ` + resetComputerChoice);
  return {
    humanChoice: resetPrompt,
    computerChoice: resetComputerChoice
  };
}

function score(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return {
      humanScore: humanScore,
      computerScore: computerScore
    };
  }
  
  // Update scores based on the choices directly
  if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
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

function displayScore(result) {
  let scoreResult = score();
  let scoreString = `Human: ${scoreResult.humanScore}, Computer: ${scoreResult.computerScore}`;
  return {
    scoreString: scoreString,
    result: result.outcome
  }
}

// console.log(scoreString);

//Function to reset the game
//TODO: Add logic to handle inputting anything other than y/n

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