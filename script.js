// Rock Paper Scissors Game, now with a UI!

let humanScore = 0;
let computerScore = 0;
let roundPlayed = 0;
const TOTALROUNDS = 5;

// Assign event listeners for buttons

const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorsBtn = document.querySelector("#scissors");

rockBtn.addEventListener("click", () => {
  getHumanChoice("rock");
});
paperBtn.addEventListener("click", () => {
  getHumanChoice("paper");
});
scissorsBtn.addEventListener("click", () => {
  getHumanChoice("scissors");
});

// Function to get computer's choice
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

// Function to get human's choice, also calls getComputerChoice()
function getHumanChoice(choice) {
  if (humanScore + computerScore >= 5) {
    playAgain();
  }

  document.querySelector("#announce2").textContent = "";
  const computerChoice = getComputerChoice();
  console.log(computerChoice);
  console.log(`Button clicked: ${choice}`);
  playRound(choice, computerChoice);
}

// Function comparing the Human and Computers choice. If the Human wins, return "You win!" else return "You lose!", updates score, updates round

function playRound(humanChoice, computerChoice) {
  let scoreBoolean = null;

  if (humanChoice === computerChoice) {
    document.querySelector("#announce1").textContent =
      "It's a tie! Choose again.";
    document.querySelector("#announce2").textContent = "";
    return;
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    document.querySelector(
      "#announce1"
    ).textContent = `Computer chose ${computerChoice}, ${computerChoice} beats ${humanChoice}. You lose the round.`;
    scoreBoolean = false;
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    document.querySelector(
      "#announce1"
    ).textContent = `You chose ${humanChoice}, ${humanChoice} beats ${computerChoice}. You win the round!`;
    scoreBoolean = true;
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    document.querySelector(
      "#announce1"
    ).textContent = `Computer chose ${computerChoice}, ${computerChoice} beats ${humanChoice}. You lose the round.`;
    scoreBoolean = false;
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    document.querySelector(
      "#announce1"
    ).textContent = `You chose ${humanChoice}, ${humanChoice} beats ${computerChoice}. You win the round!`;
    scoreBoolean = true;
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    document.querySelector(
      "#announce1"
    ).textContent = `Computer chose ${computerChoice}, ${computerChoice} beats ${humanChoice}. You lose the round.`;
    scoreBoolean = false;
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    document.querySelector(
      "#announce1"
    ).textContent = `You chose ${humanChoice}, ${humanChoice} beats ${computerChoice}. You win the round!`;
    scoreBoolean = true;
  }

  if (scoreBoolean === true) {
    humanScore++;
    roundPlayed++;
  } else if (scoreBoolean === false) {
    computerScore++;
    roundPlayed++;
  }

  document.querySelector(
    "#round-num"
  ).textContent = `Round ${roundPlayed} of ${TOTALROUNDS}`;

  document.querySelector(
    "#score"
  ).textContent = `Human: ${humanScore} Computer: ${computerScore}`;

  if (humanScore + computerScore === 5 && humanScore > computerScore) {
    document.querySelector("#announce1").textContent =
      "You won the game! Choose again to start a new game.";
    return;
  } else if (humanScore + computerScore === 5 && humanScore < computerScore) {
    document.querySelector("#announce1").textContent =
      "You lost the game. Choose again to start a new game.";
    return;
  }
}

// Function to reset game at end of a 5 round game
function playAgain() {
  computerScore = 0;
  humanScore = 0;
  roundPlayed = 0;
  document.querySelector(
    "#round-num"
  ).textContent = `Round ${roundPlayed} of ${TOTALROUNDS}`;
  document.querySelector("#score").textContent = "Human: 0 Computer: 0";
}
