const buttonContainer = document.querySelector(".buttonContainer");
const buttons = document.querySelectorAll(".keys");
const display = document.querySelector("#displaySection");
const operatorButtons = document.querySelectorAll(".key");
let operator;
let firstNumber;
let secondNumber;

buttons.forEach(button => {
  button.addEventListener('click', () =>{
    display.textContent += button.dataset.id;
  });
});

function getOperator(){
  operatorButtons.forEach(operatorButton => {
  operatorButton.addEventListener('click', () =>{
    operator = operatorButton.dataset.id;
  });
})}

function getNumbers() {
  const input = display.textContent;
  let data = input.trim();
  let split = data.split(getOperator());
  console.log(data);
  console.log(split);
  firstNumber = split[0];
  secondNumber = split[1];
  console.log(firstNumber);
}


document.querySelector('.r').addEventListener('click', getNumbers())

function operation(x, y, operator) {
  operator = getOperator();

}

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