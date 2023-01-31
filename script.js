let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function displayScore() {
  console.log("Player score: " + playerScore);
  console.log("Computer score: " + computerScore);
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a tie!");
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock")
  ) {
    playerScore++;
    console.log(
      `You win! ${
        playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
      } beats ${computerSelection}`
    );
  } else {
    computerScore++;
    console.log(
      `You lose! ${
        computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
      } beats ${playerSelection}`
    );
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter your choice: ").toLowerCase();
    const computerSelection = getComputerChoice().toLowerCase();
    console.log(`ROUND ${i + 1}\n=======`);
    playRound(playerSelection, computerSelection);
  }

  if (playerScore == computerScore) {
    console.log("End of the game! Result: Tie");
  } else if (playerScore > computerScore) {
    console.log("End of the game! You won!");
  } else {
    console.log("End of the game! You lost!");
  }

  displayScore();
}

game();
