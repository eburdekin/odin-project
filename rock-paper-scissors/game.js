const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const num = Math.floor(Math.random() * 3);
  return choices[num];
};

const getHumanChoice = () => {
  return prompt("Choose rock, paper, or scissors:").toLowerCase();
};

const getRoundWinner = (computerChoice, humanChoice) => {
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
  let round = 1;

  const playRound = (computerChoice, humanChoice) => {
    const keepScore = (roundWinner) => {
      if (roundWinner === "draw") {
        console.log("Draw.");
      } else if (roundWinner === computerChoice) {
        console.log("You lose.", computerChoice, "beats", humanChoice);
        computerScore++;
      } else {
        console.log("You win!", humanChoice, "beats", computerChoice);
        humanScore++;
      }
    };

    console.log("You played", humanChoice);
    console.log("Computer played", computerChoice);

    const roundWinner = getRoundWinner(computerChoice, humanChoice);

    keepScore(roundWinner);

    console.log("computer:", computerScore, ", human:", humanScore);
    return roundWinner;
  };

  while (computerScore < 3 && humanScore < 3) {
    console.log("Round", round);
    const computerSelection = getComputerChoice();
    const humanSelection = getHumanChoice();
    const roundWinner = playRound(computerSelection, humanSelection);
    if (roundWinner !== "draw") {
      round++;
    }
  }

  if (computerScore > humanScore) {
    console.log("YOU LOSE.");
  } else {
    console.log("YOU WIN!!");
  }
};

playGame();
