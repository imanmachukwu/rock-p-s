console.log("Hello World!");

function getComputerChoice() {
    let options = ["Rock", "Paper", "Scissors"];
    let optionsMath = Math.floor(Math.random() * 3);
    let computerChoice = options[optionsMath]
    return computerChoice;
}

console.log(getComputerChoice());

let computerSelection = getComputerChoice();
let playerSelection = prompt("Choose one: ", "Rock, Paper, Scissors");

function playRound(playerSelection, computerSelection) {
    // Convert playerSelection to lowercase
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
  
    // Determine the winner based on the player and computer selections
    if (playerSelection === "rock") {
      if (computerSelection === "paper") {
        return "You Lose! Paper beats Rock";
      } else if (computerSelection === "scissors") {
        return "You Win! Rock beats Scissors";
      } else {
        return "It's a tie!";
      }
    } else if (playerSelection === "paper") {
      if (computerSelection === "rock") {
        return "You Win! Paper beats Rock";
      } else if (computerSelection === "scissors") {
        return "You Lose! Scissors beats Paper";
      } else {
        return "It's a tie!";
      }
    } else if (playerSelection === "scissors") {
      if (computerSelection === "rock") {
        return "You Lose! Rock beats Scissors";
      } else if (computerSelection === "paper") {
        return "You Win! Scissors beats Paper";
      } else {
        return "It's a tie!";
      }
    } else {
      return "Invalid input! Please choose Rock, Paper, or Scissors.";
    }
  }

  console.log(playRound(playerSelection, computerSelection));