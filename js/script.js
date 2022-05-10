// variables of calc buttons
const calcDisplay = document.getElementById("calc-display");
const calcMiniDisplay = document.getElementById("calc-mini-display");
const calcNumbers = document.querySelectorAll(".number");
const calcEquation = document.querySelectorAll(".equation");
const calcEqual = document.querySelector(".equal");
const calcClear = document.querySelector(".clear");
const calcPlusMinus = document.querySelector(".plus-minus");
const calcPercent = document.querySelector(".percent");

// variables of other elements
const checkBox = document.getElementById("checkbox");
const bgBody = document.getElementById("bg-body");
const calcBody = document.getElementById("calc-body");
const textDark = document.querySelector(".text-dark");

// function to change to dark mode
checkBox.addEventListener("click", toggleDark);

function toggleDark() {
  bgBody.classList.toggle("bg-dark");
  calcBody.classList.toggle("calc-bg-dark");
  calcDisplay.classList.toggle("button-dark");
  calcMiniDisplay.classList.toggle("button-dark");
  calcNumbers.forEach((i) => i.classList.toggle("button-dark"));
  calcEquation.forEach((i) => i.classList.toggle("sp-button-dark"));
  calcEqual.classList.toggle("sp-button-dark");
  calcClear.classList.toggle("sp-button-dark");
  calcPlusMinus.classList.toggle("sp-button-dark");
  textDark.classList.toggle("button-dark");
  changeText();
}

function changeText() {
  if (textDark.textContent == "Dark Mode") {
    textDark.textContent = "Light Mode";
  } else {
    textDark.textContent = "Dark Mode";
  }
}

// calculator add number
calcNumbers.forEach((button) =>
  button.addEventListener("click", function () {
    if (calcDisplay.textContent.length < 8) {
      let tecla = button.textContent;
      calcDisplay.textContent += tecla;
    }
  })
);

// calculator equations
calcEquation.forEach((button) =>
  button.addEventListener("click", function () {
    let tecla = button.textContent;
    if (tecla == "+") {
      num1(+calcDisplay.textContent, "+");
      sinal("+");
    } else if (tecla == "-") {
      num1(+calcDisplay.textContent, "-");
      sinal("-");
    } else if (tecla == "/") {
      num1(+calcDisplay.textContent, "/");
      sinal("/");
    } else if (tecla == "x") {
      num1(+calcDisplay.textContent, "x");
      sinal("x");
    } else if (tecla == "%") {
      num1(+calcDisplay.textContent, "%");
      sinal("%");
    }
    calcDisplay.textContent = "";
    calcMiniDisplay.textContent = value1;
  })
);

let value1 = 0;
let num1 = (value, sinal) => {
  if (value1 == 0) {
    value1 = value;
  } else {
    if (sinal == "+") {
      value1 += value;
    } else if (sinal == "-") {
      value1 -= value;
    } else if (sinal == "/") {
      value1 /= value;
    } else if (sinal == "x") {
      value1 *= value;
    } else {
      value1 = value;
    }
  }
};

let operator = 0;
let sinal = (value) => {
  if (value == 0) {
    operator;
  } else {
    operator = value;
  }
};

function equation(value1, sinal, value2) {
  if (value1 !== 0) {
    if (sinal == "+") {
      result = parseFloat((value1 + value2).toFixed(5));
      calcDisplay.textContent = result;
    } else if (sinal == "-") {
      result = parseFloat((value1 - value2).toFixed(5));
      calcDisplay.textContent = result;
    } else if (sinal == "/") {
      result = parseFloat((value1 / value2).toFixed(5));
      calcDisplay.textContent = result;
    } else if (sinal == "x") {
      result = parseFloat((value1 * value2).toFixed(5));
      calcDisplay.textContent = result;
    } else if (sinal == "%") {
      result = parseFloat(((value2 * value1) / 100).toFixed(5));
      calcDisplay.textContent = result;
    }
    calcMiniDisplay.textContent = result;
  }
}

// calculator Plus Minus change
calcPlusMinus.addEventListener("click", () => {
  let number = +calcDisplay.textContent;
  if (Math.sign(number) == -1) {
    calcDisplay.textContent = Math.abs(number);
  } else {
    calcDisplay.textContent = Math.abs(number) * -1;
  }
});

// calculator equal sign
calcEqual.addEventListener("click", () => {
  if (calcDisplay.textContent == "") {
    console.log("vazio");
    calcDisplay.textContent = calcMiniDisplay.textContent;
    num1(0);
    sinal(0);
  } else {
    equation(value1, operator, +calcDisplay.textContent);
    num1(0);
    sinal(0);
  }
  calcMiniDisplay.textContent = "";
});

// calculator clear
calcClear.addEventListener("click", () => {
  calcDisplay.textContent = "";
  calcMiniDisplay.textContent = "";
  num1(0);
  sinal(0);
});
