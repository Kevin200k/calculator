//DOM Elements
let numbers = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".operator");
let equalButton = document.querySelector("#equals");
let deletebutton = document.querySelector("#delete")

// Calculator variables
const Calculator = {
    firstNumber: [],
    secondNumber: [],
    currentOperator: "",
    display: []
}

// Function for mathematical operations
const solve = (function(){
    add = (a, b) => a + b;
    subtract = (a, b) => a - b;
    multiply = (a, b) => a * b;
    divide = (a, b) => a / b;
    return { add, subtract, multiply, divide }
 }())

 // Delete function
let deleteValues = () => {
    Calculator.display.pop();
    demo.textContent = Calculator.display.join("");
}
 // Operate function
 let operate = () => {
    let index = Calculator.display.indexOf(Calculator.currentOperator);
    Calculator.firstNumber = Calculator.display.slice(0, index)
    Calculator.secondNumber = Calculator.display.slice(index + 1, Calculator.display.length)
    
    //Calculator variables
    let x1 = parseFloat(Calculator.firstNumber.join(""));
    let x2 = parseFloat(Calculator.secondNumber.join(""));
    
    // Switch statement to determine which operator to use
    switch(Calculator.currentOperator){
        case "+":
            demo.textContent = solve.add(x1, x2);
            break;
        case "-":
            demo.textContent = solve.subtract(x1, x2);
            break;
        case "*":
            demo.textContent = solve.multiply(x1, x2);
            break;
        case "/":
            demo.textContent = solve.divide(x1, x2);
            break;
    }
    // Resets the display array and current operator
    Calculator.display = [];
    Calculator.display.push(demo.textContent)
    Calculator.currentOperator = "";
 }


 //Event listeners to handle all number values
 numbers.forEach(number => {
    number.addEventListener("click", () => {
        Calculator.display.push(number.textContent)
        demo.textContent = Calculator.display.join("")
    })
 })

 //Event listeners to hanlde all operator values
 operators.forEach(operator => {
    operator.addEventListener("click", () => {
        Calculator.currentOperator = operator.textContent
        Calculator.display.push(Calculator.currentOperator)
        demo.textContent = Calculator.display.join("")
    })
 })

 // Event listener for the equal sign
equalButton.addEventListener("click", operate)