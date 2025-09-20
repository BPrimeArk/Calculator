const buttonContainer = document.querySelector(".buttonContainer");
const buttons = document.querySelectorAll(".keys");
const display = document.querySelector("#displaySection");

buttons.forEach(button => {
  button.addEventListener('click', () =>{
    display.textContent += button.dataset.id;
  });
});

display.style.backgroundColor

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