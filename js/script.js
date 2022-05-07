// variables of calc buttons
const calcDisplay = document.getElementById("calc-display");
const calcNumbers = document.querySelectorAll(".number");
const calcSpecial = document.querySelectorAll(".special");

// variables of other elements
const checkBox = document.getElementById("checkbox");
const bgBody = document.getElementById("bg-body");
const calcBody = document.getElementById("calc-body");

// function to change to dark mode
function toggleDark() {
  bgBody.classList.toggle("bg-dark");
  calcBody.classList.toggle("calc-bg-dark");
  calcSpecial.forEach((i) => {
    i.classList.toggle("sp-button-dark");
  });
  calcNumbers.forEach((i) => {
    i.classList.toggle("button-dark");
  });
}

checkBox.addEventListener("click", toggleDark);
