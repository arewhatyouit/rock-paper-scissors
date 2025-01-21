const prompt = require("prompt-sync")({ sigint: true });

function getHumanChoice() {
    let humanChoice = prompt("Choose rock, paper or scissors ", "").toLowerCase();
    if (humanChoice === "rock" || humanChoice === "paper" || humanChoice === "scissors") {
      console.log(`You chose ${humanChoice}!`)
        return humanChoice;
    } else {
      console.log("Invalid choice, try again.")
      getHumanChoice()
    }
  }

getHumanChoice()