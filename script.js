const calculation = document.getElementById("calculation");
const result = document.getElementById("result");
const errorMessage = document.getElementById("error-message");

let currentInput = "";
let previousResult = null;

// Append values to the calculation
function appendValue(value) {
  errorMessage.style.visibility = "hidden"; // Hide error on new input
  currentInput += value;
  calculation.innerText = currentInput;
}

// Calculate the result
function calculateResult() {
  try {
    const evaluation = eval(currentInput); // Safe here for a calculator
    result.innerText = evaluation;
    previousResult = evaluation;
    currentInput = ""; // Reset input after evaluation
  } catch (e) {
    showError("Invalid Input");
  }
}

// Clear all input (AC button)
function clearAll() {
  currentInput = "";
  calculation.innerText = "";
  result.innerText = "0";
  errorMessage.style.visibility = "hidden";
}

// Clear last entry (C button)
function clearLast() {
  currentInput = currentInput.slice(0, -1); // Remove the last character
  calculation.innerText = currentInput || "0"; // Show 0 if empty
}

// Show error message
function showError(message) {
  errorMessage.style.visibility = "visible";
  errorMessage.innerText = message;
}
