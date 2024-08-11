const resultElement = document.getElementById("result");
const clearBtn = document.getElementById("clear-button");
const deleteBtn = document.getElementById("delete-button");
const divideBtn = document.getElementById("divide-button");
const multiplyBtn = document.getElementById("multiply-button");
const subtractBtn = document.getElementById("subtract-button");
const addBtn = document.getElementById("add-button");
const decimalBtn = document.getElementById("decimal-button");
const equalBtn = document.getElementById("equal-button");
const number = document.querySelectorAll(".number");

// initialize variable
let result = "";
let operation = "";
let previousOperand = 0;

// append function
const appendNumber = (number) => {
  if (number === "." && result.includes(".")) return;

  result += number;
  updateDisplay();
};

// function to update display
const updateDisplay = () => {
  resultElement.innerText = result;
};

// add eventlistener
number.forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.innerText);
  });
});

// add eventlistener for decimal button
decimalBtn.addEventListener("click", () => appendNumber("."));
