//DOM Elements
let numbers = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".operator");
let equalButton = document.querySelector("#equals");
let deleteButton = document.querySelector("#delete");
let clearButton = document.querySelector("#clear");
let demo = document.querySelector("#demo");

// Calculator variables
const Calculator = {
    firstNumber: [],
    secondNumber: [],
    currentOperator: "",
    storage: [],
    defaultScreenValue: 0   
}

// Objects to store mathematical operations
const solve = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => a / b
};
 // Delete function
let deleteValues = () => {
    Calculator.storage.pop();
    if(Calculator.storage.length === 0) demo.textContent = Calculator.defaultScreenValue;
    else demo.textContent = Calculator.storage.join("");
}
// Clear function
let clearValues = () => {
    Calculator.storage = [];
    Calculator.currentOperator = "";
    demo.textContent = Calculator.currentOperator;
}
 // Operate function
 let operate = () => {
    let index = Calculator.storage.indexOf(Calculator.currentOperator);
    Calculator.firstNumber = Calculator.storage.slice(0, index)
    Calculator.secondNumber = Calculator.storage.slice(index + 1, Calculator.storage.length)
    
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
    // Resets the storage array and current operator
    Calculator.storage = [];
    Calculator.storage.push(demo.textContent);
    Calculator.currentOperator = "";
 }


 //Event listeners to handle all number values
 numbers.forEach(number => {
    number.addEventListener("click", () => {
        Calculator.storage.push(number.textContent)
        demo.textContent = Calculator.storage.join("")
    })
 })

 //Event listeners to hanlde all operator values
 operators.forEach(operator => {
    operator.addEventListener("click", () => {
        Calculator.currentOperator = operator.textContent
        Calculator.storage.push(Calculator.currentOperator)
        // demo.textContent = Calculator.storage.join("")
    })
 })

 // Event listener for the equal sign
equalButton.addEventListener("click", operate)

//Event listener for the delete button
deleteButton.addEventListener("click", deleteValues)

//Event listener for the clear button 
clearButton.addEventListener("click", clearValues)

//Event listener for window
window.addEventListener("load", () => {
    demo.textContent = Calculator.defaultScreenValue;
})