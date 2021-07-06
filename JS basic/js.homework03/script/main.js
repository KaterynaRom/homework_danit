const firstNumber = +prompt('Enter first number');
const secondNumber = +prompt('Enter second number');
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        alert('Please enter only numbers!')
    } else {
        operation = prompt('Enter operations. You can choose +, -, *, /');
    }
function calculation(firstNumber, secondNumber, operation) {
    if (operation === '+'){
        return firstNumber + secondNumber
    } else if (operation === '-'){
        return firstNumber - secondNumber
    } else if (operation === '*'){
        return firstNumber * secondNumber
    }  else if (operation === '/' && secondNumber !== 0){
        return firstNumber / secondNumber
    }  else {
        alert('Choose the correct operation and remember that you cannot divide by zero!')
    }
}

console.log(calculation(firstNumber, secondNumber, operation))
