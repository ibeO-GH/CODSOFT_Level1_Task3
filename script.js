let currentInput = "";
let operator = "";
let firstNum = null;
let isPercentage = false; // To track if a percentage calculation is needed

const display = document.getElementById("display");
const operatorStack = []; // Stack to handle operators

function updateDisplay() {
  display.value = currentInput;
}

function clearDisplay() {
  currentInput = "";
  firstNum = null;
  operator = "";
  operatorStack.length = 0; // Clear the operator stack
  updateDisplay();
}

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function setOperator(op) {
  if (firstNum === null) {
    firstNum = parseFloat(currentInput);
  } else if (currentInput !== "") {
    firstNum = operate(firstNum, parseFloat(currentInput), operator);
  }
  operator = op;
  currentInput = "";
}

function operate(num1, num2, op) {
  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        alert("Cannot divide by zero");
        return num1;
      }
      return num1 / num2;
    default:
      return num2;
  }
}

function calculate() {
  if (firstNum !== null && operator !== "") {
    const result = operate(firstNum, parseFloat(currentInput), operator);
    currentInput = result.toString();
    firstNum = null;
    operator = "";
    updateDisplay();
  }
}

// Handling percentage
function handlePercentage() {
  if (currentInput) {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
  }
}

// Handling the +/- sign toggle
function toggleSign() {
  if (currentInput) {
    currentInput = (parseFloat(currentInput) * -1).toString();
    updateDisplay();
  }
}

// Event listeners for buttons
document
  .getElementById("btn-.")
  .addEventListener("click", () => appendNumber("."));
document
  .getElementById("btn-0")
  .addEventListener("click", () => appendNumber("0"));
document
  .getElementById("btn-1")
  .addEventListener("click", () => appendNumber("1"));
document
  .getElementById("btn-2")
  .addEventListener("click", () => appendNumber("2"));
document
  .getElementById("btn-3")
  .addEventListener("click", () => appendNumber("3"));
document
  .getElementById("btn-4")
  .addEventListener("click", () => appendNumber("4"));
document
  .getElementById("btn-5")
  .addEventListener("click", () => appendNumber("5"));
document
  .getElementById("btn-6")
  .addEventListener("click", () => appendNumber("6"));
document
  .getElementById("btn-7")
  .addEventListener("click", () => appendNumber("7"));
document
  .getElementById("btn-8")
  .addEventListener("click", () => appendNumber("8"));
document
  .getElementById("btn-9")
  .addEventListener("click", () => appendNumber("9"));

document
  .getElementById("btn-add")
  .addEventListener("click", () => setOperator("+"));
document
  .getElementById("btn-subtract")
  .addEventListener("click", () => setOperator("-"));
document
  .getElementById("btn-multiply")
  .addEventListener("click", () => setOperator("*"));
document
  .getElementById("btn-divide")
  .addEventListener("click", () => setOperator("/"));

document.getElementById("btn-equal").addEventListener("click", calculate);
document.getElementById("btn-clear").addEventListener("click", clearDisplay);

document.getElementById("btn-prefix").addEventListener("click", toggleSign);
document
  .getElementById("btn-percent")
  .addEventListener("click", handlePercentage);
