const buttons = document.querySelectorAll("button");
const input = document.querySelector("input");

let oldValue;
let currentOperation;

// Estudar Arrow Functions
buttons.forEach((btn) => btn.addEventListener("click", handleClick));

function handleClick(event) {
  const buttonValue = event.target.dataset.value;

  if (buttonValue.match(/\d+/g)) {
    input.value = input.value + buttonValue;
    return;
  }

  // Estudar switch
  switch (buttonValue) {
    case "ac":
      oldValue = input.value;
      input.value = "";
      break;
    case "=":
      input.value && handleEqual();
      break;
    default:
      currentOperation = buttonValue;
      oldValue = parseInt(input.value);
      input.value = "";
  }
}

function handleEqual() {
  const intValue = parseInt(input.value);
  let result;

  switch (currentOperation) {
    case "+":
      result = oldValue + intValue;
      break;
    case "-":
      result = oldValue - intValue;
      break;
    case "*":
      result = oldValue * intValue;
      break;
    case "/":
      result = oldValue / intValue;
      break;
    default:
      result = intValue;
  }

  input.value = result;
}
