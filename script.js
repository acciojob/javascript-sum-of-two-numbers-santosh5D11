let firstNumber = prompt("First number:");
let secondNumber = prompt("Second number:");

if (
  firstNumber === null ||
  secondNumber === null ||
  firstNumber.trim() === "" ||
  secondNumber.trim() === "" ||
  isNaN(firstNumber) ||
  isNaN(secondNumber)
) {
  alert("Invalid input. Please enter a valid number.");
} else {
  firstNumber = Number(firstNumber);
  secondNumber = Number(secondNumber);

  let sum = firstNumber + secondNumber;

  alert(`The sum of ${firstNumber} and ${secondNumber} is ${sum}.`);
}