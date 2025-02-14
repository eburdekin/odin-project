const operatorMap = {
  "+": (a, b) => {
    return a + b;
  },
  "-": (a, b) => {
    return a - b;
  },
  "*": (a, b) => {
    return a * b;
  },
  "/": (a, b) => {
    return a / b;
  },
};

const operate = (a, operator, b) => {
  return operatorMap[operator](a, b);
};

const container = document.querySelector(".container");
const display = document.querySelector(".display");

const updateDisplay = (content) => {
  display.innerText = content;
};

const buttons = [7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "*", "C", 0, "=", "/"];

let a = "";
let operator = "";
let b = "";
// let isResultDisplay = false;

// const handleButtonClick = (e) => {
//   const button = e.target.innerText;
// };

let buttonClickCount = 0;

const handleButtonClick = (e) => {
  const button = e.target.innerText;
  if (!isNaN(button)) {
    updateDisplay(button);
    buttonClickCount++;
    console.log(buttonClickCount);
    if (buttonClickCount === 1) {
      a = parseInt(button);
    }
    if (buttonClickCount === 3) {
      b = parseInt(button);
    }
  } else {
    buttonClickCount++;
    console.log(buttonClickCount);
    if (buttonClickCount === 2) {
      operator = button;
    }
  }
};

buttons.forEach((button) => {
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("button");
  buttonDiv.id = button;
  buttonDiv.innerText = button;
  buttonDiv.addEventListener("click", handleButtonClick);
  container.appendChild(buttonDiv);
});

const clearButton = document.querySelector("#C");
clearButton.addEventListener("click", () => {
  a = "";
  operator = "";
  b = "";
  updateDisplay("0");
  buttonClickCount = 0;
});

const equalsButton = document.querySelector("[id='=']");
equalsButton.addEventListener("click", () => {
  const result = operate(a, operator, b);
  updateDisplay(result);
  buttonClickCount = 0;
});
