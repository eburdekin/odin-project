const CHOICES = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[randomIndex];
};

const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");
rockButton.addEventListener("click", (e) => getHumanChoice(e));
paperButton.addEventListener("click", (e) => getHumanChoice(e));
scissorsButton.addEventListener("click", (e) => getHumanChoice(e));

const humanScoreDisplay = document.querySelector("#human-score");
const computerScoreDisplay = document.querySelector("#computer-score");

const getHumanChoice = (e) => {
  playRound(e.target.id);
};

const playGame = () => {
  let computerScore = 0;
  let humanScore = 0;

  const playRound = (computerChoice, humanChoice) => {
    const winningCombos = {
      rock: "scissors",
      paper: "rock",
      scissors: "paper",
    };

    console.log(`-------------------
You played ${humanChoice}
Computer played ${computerChoice}`);

    if (computerChoice === humanChoice) {
      console.log("Draw.");
    } else {
      winningCombos[computerChoice] === humanChoice
        ? computerScore++
        : humanScore++;
      console.log(
        `You ${
          roundWinner === computerChoice
            ? `lose. ${computerChoice} beats ${humanChoice}`
            : `win! ${humanChoice} beats ${computerChoice}`
        }`
      );
    }
    console.log("computer:", computerScore, ", human:", humanScore);
    console.log(`-------------------`);
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

const startButton = document.querySelector("#start");
startButton.addEventListener("click", playGame);
