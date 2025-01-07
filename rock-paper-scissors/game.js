const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const buttons = [rockButton, paperButton, scissorsButton];

buttons.forEach((button) => {
  button.addEventListener("click", (e) => playRound(e));
});

const humanViz = document.querySelector("#human-viz");
const computerViz = document.querySelector("#computer-viz");

const choicesDisplay = document.querySelector("#choices");
const roundResultDisplay = document.querySelector("#round-result");

const humanScoreDisplay = document.querySelector("#human-score");
const computerScoreDisplay = document.querySelector("#computer-score");

const finalResultDisplay = document.querySelector("#final-result");
const resetButtonPlaceholder = document.querySelector(
  "#reset-button-placeholder"
);

const CHOICES = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[randomIndex];
};

let computerScore = 0;
let humanScore = 0;

const playRound = (e) => {
  const computerChoice = getComputerChoice();
  const humanChoice = e.target.id;

  const winningCombos = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  let rockImage = document.createElement("img");
  rockImage.src = "./images/rock.png";
  rockImage.alt = "hand playing rock";

  let paperImage = document.createElement("img");
  paperImage.src = "./images/paper.png";
  rockImage.alt = "hand playing paper";

  let scissorsImage = document.createElement("img");
  scissorsImage.src = "./images/scissors.png";
  scissorsImage.alt = "hand playing scissors";

  const images = {
    rock: rockImage,
    paper: paperImage,
    scissors: scissorsImage,
  };

  humanViz.innerHTML = "";
  computerViz.innerHTML = "";
  humanViz.append(images[humanChoice].cloneNode());
  computerViz.append(images[computerChoice].cloneNode());

  choicesDisplay.innerText = `You played ${humanChoice}.
    Computer played ${computerChoice}`;

  const getWinner = (computerChoice, humanChoice) => {
    if (computerChoice === humanChoice) return "draw";

    return winningCombos[computerChoice] === humanChoice
      ? computerChoice
      : humanChoice;
  };

  const roundWinner = getWinner(computerChoice, humanChoice);

  if (roundWinner === "draw") {
    roundResultDisplay.innerText = "Draw.";
  } else {
    roundWinner === computerChoice ? computerScore++ : humanScore++;
    roundResultDisplay.innerText = `You ${
      roundWinner === computerChoice
        ? `lose this round. ${computerChoice} beats ${humanChoice}.`
        : `win this round! ${humanChoice} beats ${computerChoice}.`
    }`;
  }

  computerScoreDisplay.innerText = computerScore;
  humanScoreDisplay.innerText = humanScore;

  if (computerScore === 5 || humanScore === 5) {
    finalResultDisplay.innerText = `YOU ${
      humanScore > computerScore ? "WIN" : "LOSE"
    }!`;
    buttons.forEach((button) => {
      button.setAttribute("disabled", true);
    });
    const resetButton = document.createElement("button");
    resetButton.innerText = "Play again";
    resetButton.addEventListener("click", () => window.location.reload(true));
    resetButtonPlaceholder.append(resetButton);
  }
};
