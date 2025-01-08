const rockButton = document.querySelector("#rock");
const paperButton = document.querySelector("#paper");
const scissorsButton = document.querySelector("#scissors");

const humanViz = document.querySelector("#human-viz");
const computerViz = document.querySelector("#computer-viz");

const roundResultDisplay = document.querySelector("#round-result");

const humanScoreDisplay = document.querySelector("#human-score");
const computerScoreDisplay = document.querySelector("#computer-score");

const finalResultDisplay = document.querySelector("#final-result");
const resetButtonPlaceholder = document.querySelector(
  "#reset-button-placeholder"
);

const handleButtonClick = (e) => playRound(e.target.id);

const handleKeydown = (e) => {
  const keyMap = {
    r: "rock",
    p: "paper",
    s: "scissors",
  };
  if (keyMap[e.key]) {
    playRound(keyMap[e.key]);
  }
};

const buttons = [rockButton, paperButton, scissorsButton];

// use named functions as callbacks, can't remove if using anon function
buttons.forEach((button) => {
  button.addEventListener("click", handleButtonClick);
});

document.addEventListener("keydown", handleKeydown);

const CHOICES = ["rock", "paper", "scissors"];

const getComputerChoice = () => {
  const randomIndex = Math.floor(Math.random() * CHOICES.length);
  return CHOICES[randomIndex];
};

let computerScore = 0;
let humanScore = 0;

const playRound = (humanChoice) => {
  const computerChoice = getComputerChoice();

  const winningCombos = {
    rock: "scissors",
    paper: "rock",
    scissors: "paper",
  };

  const createImageElement = (choice) => {
    const img = document.createElement("img");
    img.src = `./images/${choice}.png`;
    img.alt = `hand playing ${choice}`;
    return img;
  };

  humanViz.innerHTML = "";
  computerViz.innerHTML = "";
  humanViz.append(createImageElement(humanChoice).cloneNode());
  computerViz.append(createImageElement(computerChoice).cloneNode());

  const getWinner = (computerChoice, humanChoice) => {
    if (computerChoice === humanChoice) {
      roundResultDisplay.innerText = "Draw.";
      return;
    }
    if (winningCombos[computerChoice] === humanChoice) {
      computerScore++;
      roundResultDisplay.innerText = `You lose this round. ${computerChoice} beats ${humanChoice}.`;
    } else {
      humanScore++;
      roundResultDisplay.innerText = `You win this round! ${humanChoice} beats ${computerChoice}.`;
    }
  };

  const roundWinner = getWinner(computerChoice, humanChoice);

  computerScoreDisplay.innerText = computerScore;
  humanScoreDisplay.innerText = humanScore;

  if (computerScore === 5 || humanScore === 5) {
    finalResultDisplay.innerText = `YOU ${
      humanScore > computerScore ? "WIN" : "LOSE"
    }!`;
    disablePlayButtons();
    addResetButton();
  }
};

const disablePlayButtons = () => {
  buttons.forEach((button) => {
    button.removeEventListener("click", handleButtonClick);
    document.removeEventListener("keydown", handleKeydown);

    // remove hover class so transform/cursor change no longer happens
    button.classList.remove("hover-effect");
  });
};

const addResetButton = () => {
  const resetButton = document.createElement("button");
  resetButton.innerText = "Play again";
  resetButton.addEventListener("click", () => window.location.reload(true));
  resetButtonPlaceholder.append(resetButton);
};
