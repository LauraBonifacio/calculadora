const buttons = document.querySelectorAll("button");

const input = document.querySelector("input");

buttons.forEach(function (button) {
  button.addEventListener("click", handleClick);
});

let oldValue;
let currentOperation;

function handleClick(event) {
  const buttonValue = event.target.dataset.value;
  console.log(typeof buttonValue);
  if (!isNaN(input.value)) {
    input.value = input.value + buttonValue;
  }

  if (buttonValue == "ac") {
    oldValue = input.value;
    input.value = "";
  }

  if (buttonValue == "/") {
    currentOperation = "/";
    oldValue = parseInt(input.value);
    input.value = "";
  }

  if (buttonValue == "*") {
    currentOperation = "*";
    oldValue = parseInt(input.value);
    input.value = "";
  }

  if (buttonValue == "-") {
    currentOperation = "-";
    oldValue = parseInt(input.value);
    input.value = "";
  }

  if (buttonValue == "+") {
    currentOperation = "+";
    oldValue = parseInt(input.value);
    input.value = "";
  }

  if (buttonValue == "=") {
    let result;

    if (currentOperation == "/") {
      result = oldValue / parseInt(input.value);
    }

    if (currentOperation == "x") {
      result = oldValue * parseInt(input.value);
    }

    if (currentOperation == "-") {
      result = oldValue - parseInt(input.value);
    }

    if (currentOperation == "+") {
      result = oldValue + parseInt(input.value);
    }

    input.value = result;
  }
}
