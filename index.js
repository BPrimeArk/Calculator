const buttonContainer = document.querySelector(".buttonContainer");
const buttons = document.querySelectorAll(".keys");
const display = document.querySelector("#displaySection");
const operatorButtons = document.querySelectorAll(".key");
let firstNumber;
let secondNumber;
let operator;

buttons.forEach(button => {
  button.addEventListener('click', () =>{
    display.textContent += button.dataset.id;
  });
});

operatorButtons.forEach(operatorButton => {
      operatorButton.addEventListener('click', () => {
        operator = operatorButton.dataset.id;

        return operator
      });
});
    
function getNumbers() {
  const input = display.textContent;
  let data = input.trim();
  let split = data.split(operator);

  firstNumber = split[0];
  secondNumber = split[1];
  console.log(input);
  console.log(data);
  console.log(split);
  console.log(firstNumber);
  console.log(secondNumber);
}

document.querySelector('.r').addEventListener('click',
  () => {
    getNumbers();
  });

function operation(x, y, operator) {
  
}


// function addition(x, y) {
//   return x + y
// };

// function subrraction(x, y) {
//   return x - y
// };

// function division(x, y) {
//   return x / y
// };

// function multiplication(x, y) {
//   return x * y
// };

// function operation(x, y, operator) {
  
// }