function add(a, b){
    return a + b;
}
function subtract(a, b){
    return a - b;
}
function multiply(a, b){
    return a * b;
}
function divide(a, b){
    return a / b;
}

let firstNumber;
let secondNumber;
let operand;

//Function to perform the four operations on two numbers
function operate(firstNumber, operand, secondNumber){
    switch (operand) {
        case "+":
            add(firstNumber, secondNumber)
            break;
        case "-":
            subtract(firstNumber, secondNumber)
            break;
        case "/":
            divide(firstNumber, secondNumber)
            break;
        case "*":
            multiply(firstNumber, secondNumber)
            break;
        default:
            break;
    }
}

