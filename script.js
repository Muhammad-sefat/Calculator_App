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

// Initialize variables
let result = "";
let operation = "";
let previousOperand = null;

// Append number function
const appendNumber = (number) => {
  if (number === "." && result.includes(".")) return;

  result += number;
  updateDisplay();
};

// Function to update display
const updateDisplay = () => {
  if (operation) {
    resultElement.innerText = `${previousOperand} ${operation} ${result}`;
  } else {
    resultElement.innerText = result;
  }
};

// Select operator function
const selectOperator = (operateValue) => {
  if (result === "") return;

  if (operation !== "" && previousOperand !== null) {
    calculateResult();
  }

  operation = operateValue;
  previousOperand = parseFloat(result);
  result = "";
  updateDisplay();
};

// Calculate result function
const calculateResult = () => {
  let evaluatedResult;
  const prev = previousOperand;
  const current = parseFloat(result);

  if (isNaN(prev) || isNaN(current)) return;

  switch (operation) {
    case "+":
      evaluatedResult = prev + current;
      break;
    case "-":
      evaluatedResult = prev - current;
      break;
    case "*":
      evaluatedResult = prev * current;
      break;
    case "/":
      if (current === 0) {
        evaluatedResult = "Error"; // Handle division by zero
      } else {
        evaluatedResult = prev / current;
      }
      break;
    default:
      return;
  }
  result = evaluatedResult.toString();
  operation = ""; // Reset operation after calculation
  previousOperand = null; // Reset previous operand
};

// Add event listeners
number.forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.innerText);
  });
});

decimalBtn.addEventListener("click", () => appendNumber("."));
addBtn.addEventListener("click", () => selectOperator("+"));
subtractBtn.addEventListener("click", () => selectOperator("-"));
multiplyBtn.addEventListener("click", () => selectOperator("*"));
divideBtn.addEventListener("click", () => selectOperator("/"));
equalBtn.addEventListener("click", () => {
  if (result === "") return;
  calculateResult();
  updateDisplay();
});

clearBtn.addEventListener("click", () => {
  result = "";
  operation = "";
  previousOperand = null;
  updateDisplay();
});

deleteBtn.addEventListener("click", () => {
  if (operation !== "" && result === "") {
    operation = "";
    result = previousOperand;
    previousOperand = null;
    updateDisplay();
  } else {
    result = result.slice(0, -1);
    updateDisplay();
  }
});
