const buttonContainer = document.querySelector(".buttonContainer");
const buttons = document.querySelectorAll(".keys");
const display = document.querySelector(".displaySection");

buttons.addEventListener('click', () => {
  display.textContent= dataset.id;
});

function addition(x, y) {
  return x + y
};

function subrraction(x, y) {
  return x - y
};

function division(x, y) {
  return x / y
};

function multiplication(x, y) {
  return x * y
};

function operation(x, y, operator) {
  
}