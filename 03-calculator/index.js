const add = (a, b) => {
  return a + b;
};

const subtract = (a, b) => {
  return a - b;
};

const multiply = (a, b) => {
  return a * b;
};

const divide = (a, b) => {
  return a / b;
};

const operate = (a, operator, b) => {
  if (operator === "+") {
    return add(a, b);
  }
  if (operator === "-") {
    return subtract(a, b);
  }
  if (operator === "x") {
    return multiply(a, b);
  } else {
    return divide(a, b);
  }
};

let a;
let operator;
let b;

const container = document.querySelector(".container");

const display = document.createElement("div");
display.classList.add("display");
display.innerText = "0";
container.appendChild(display);

const updateDisplay = (content) => {
  display.innerText = content;
};

const buttons = [7, 8, 9, "+", 4, 5, 6, "-", 1, 2, 3, "x", "C", 0, "=", "/"];

let buttonClickCount = 0;

const handleButtonClick = (e) => {
  const button = e.target.innerText;
  if (!isNaN(parseInt(button))) {
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
  updateDisplay("0");
  buttonClickCount = 0;
});

const displayContent = display.innerText;

const equalsButton = document.querySelector("[id='=']");
equalsButton.addEventListener("click", () => {
  const result = operate(a, operator, b);
  updateDisplay(result);
  buttonClickCount = 0;
});
