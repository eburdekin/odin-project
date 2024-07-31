const CHOICES = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[randomIndex];
};

const getHumanChoice = () => {
  return prompt("Choose rock, paper, or scissors.").toLowerCase();
};

const getWinner = (computerChoice, humanChoice) => {
  if (computerChoice === humanChoice) return "draw";

  const winningCombos = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  return winningCombos[computerChoice] === humanChoice
    ? computerChoice
    : humanChoice;
};

const playGame = () => {
  let computerScore = 0;
  let humanScore = 0;

  const playRound = (computerChoice, humanChoice) => {
    console.log("-------------------");
    console.log("You played", humanChoice);
    console.log("Computer played", computerChoice);

    const roundWinner = getWinner(computerChoice, humanChoice);

    if (roundWinner === "draw") {
      console.log("Draw.");
    } else {
      roundWinner === computerChoice ? computerScore++ : humanScore++;
      console.log(
        `You ${
          roundWinner === computerChoice
            ? `lose. ${computerChoice} beats ${humanChoice}`
            : `win! ${humanChoice} beats ${computerChoice}`
        }`
      );
    }
    console.log("computer:", computerScore, ", human:", humanScore);
    return roundWinner;
  };

  console.log("Rock Paper Scissors");
  console.log("Best 3 out of 5.");

  while (computerScore < 3 && humanScore < 3) {
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    playRound(computerSelection, humanSelection);
  }

  console.log(`YOU ${humanScore > computerScore ? "WIN" : "LOSE"}.`);
};

playGame();
