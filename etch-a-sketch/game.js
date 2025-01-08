const containerDiv = document.querySelector("#container");
const promptButton = document.querySelector("#choose-size-button");

const COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "dodgerblue",
  "lilac",
  "pink",
];

const getRandomColor = () => {
  const randomIndex = Math.floor(Math.random() * COLORS.length);
  return COLORS[randomIndex];
};

const createGrid = (gridSize) => {
  containerDiv.innerHTML = "";
  for (let i = 0; i < gridSize * gridSize; i++) {
    const newSquare = document.createElement("div");
    newSquare.classList.add("square");
    newSquare.style.flexBasis = `${100 / gridSize}%`;
    newSquare.addEventListener("mouseover", () => {
      newSquare.style.backgroundColor = getRandomColor();
    });
    containerDiv.append(newSquare);
  }
};

const showPrompt = () => {
  const gridSize = prompt(
    "What size grid would you like to create? Enter a number below 100."
  );

  if (gridSize < 101) {
    createGrid(gridSize);
  } else {
    showPrompt();
  }
};

promptButton.addEventListener("click", showPrompt);
