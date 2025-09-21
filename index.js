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

        return (operator)
      });
});
    
function getNumbers() {
  const input = display.textContent;
  let data = input.trim();
  let split = data.split(operator);

  firstNumber = Number(split[0]);
  secondNumber = Number(split[1]);
  console.log(typeof firstNumber);
  console.log(typeof secondNumber);
  console.log(typeof operator);
}

function operation(x, y, operator) {
  
  if(operator == '+'){
    return x + y
  }
  else if(operator == '-'){
    return x - y
  }
   else if(operator == '/'){
    return x / y
  }
  else if(operator == '*'){
    return x * y
  }
  
}


document.querySelector('.r').addEventListener('click', () => {
  getNumbers();
  let result = operation(firstNumber, secondNumber, operator);
  console.log(result);
  display.textContent = result;
});


