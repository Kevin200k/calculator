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

//Declared variables for the the buttons
let numberValues = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".operator");
let equals = document.getElementById("equals");
let clearButton = document.getElementById("clear");
let deleteButton = document.getElementById("delete")
let demo = document.getElementById("demo")

let display = [];

//Append different numbers and operators to the display array
numberValues.forEach(number => {
    number.addEventListener("click", function(){
        display.push(number.innerText)
        demo.innerText = display.join("")
    })
})
operators.forEach(operator =>{
    operator.addEventListener("click", function(){
        operand = operator.innerText;
        display.push(operator.innerText);
        demo.innerText = display.join("")
    })
})

//Event listeners for other buttons
equals.addEventListener("click", operate);

//Function to perform the four operations on two numbers
function operate(firstNumber, secondNumber){
    let p = display.indexOf(operand)
    let v = display.length

    firstNumber = display.slice(0, p).join("");
    // console.log(firstNumber)
    firstNumber = parseFloat(firstNumber)

    secondNumber = display.slice(p + 1, v).join("");
    // console.log(secondNumber)
    secondNumber = parseFloat(secondNumber)
   
    switch (operand) {
        case "+":
            demo.innerText = add(firstNumber, secondNumber)
            break;
        case "-":
            demo.innerText = subtract(firstNumber, secondNumber)
            break;
        case "/":
            demo.innerText = divide(firstNumber, secondNumber)
            break;
        case "*":
            demo.innerText = multiply(firstNumber, secondNumber)
            break;
        default:
            break;
    }
}

