//DOM Elements
let numbers = document.querySelectorAll(".numbers");
let operators = document.querySelectorAll(".operator");
let equalButton = document.querySelector("#equals");
let deleteButton = document.querySelector("#delete");
let clearButton = document.querySelector("#clear");
let demo = document.querySelector("#demo");
let dotButton = document.querySelector("#decimalpoint");
let buttons = document.querySelectorAll("button")

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
    divide: (a, b) => a / b,
    modulus: (a, b) => a % b
};

 // Delete function
let deleteValues = () => {
    Calculator.storage.pop();
    if(Calculator.storage.length === 0) demo.textContent = Calculator.defaultScreenValue;
    else{
        if(!Calculator.currentOperator) demo.textContent = Calculator.storage.join("");
        else {
           Calculator.secondNumber.pop();
           demo.textContent = Calculator.secondNumber.join("")
        }


    }
}
// Clear function
let clearValues = () => {
    Calculator.storage = [];
    Calculator.secondNumber = [];
    Calculator.currentOperator = "";
    demo.textContent = Calculator.defaultScreenValue;
}
// Decimal function function
let dotValues = () => {
    Calculator.storage.push(".");
    if(Calculator.storage.includes(Calculator.currentOperator)){
        Calculator.secondNumber.push(".")
        demo.textContent = Calculator.secondNumber.join("")
    }
    else{
        demo.textContent = Calculator.storage.join("")
    }
}
 // Operate function
 let operate = (result) => {
    let index = Calculator.storage.indexOf(Calculator.currentOperator);
    Calculator.firstNumber = Calculator.storage.slice(0, index)
    Calculator.secondNumber = Calculator.storage.slice(index + 1, Calculator.storage.length)
    
    //Calculator variables
    let x1 = parseFloat(Calculator.firstNumber.join(""));
    let x2 = parseFloat(Calculator.secondNumber.join(""));
    
    // Switch statement to determine which operator to use
    switch(Calculator.currentOperator){
        case "+":
            result = solve.add(x1, x2);
            break;
        case "—":
            result = solve.subtract(x1, x2);
            break;
        case "×":
            result = solve.multiply(x1, x2);
            break;
        case "÷":
            result = solve.divide(x1, x2);
            break;
        case "%":
            result = solve.modulus(x1, x2);
            break;
    }
    if(!result || result === Infinity){
        demo.textContent = "ERROR";
        buttons.forEach(button => button.disabled = true)
        setTimeout(() =>{
            buttons.forEach(button => button.disabled = false)
            demo.textContent = Calculator.defaultScreenValue;
            Calculator.storage = [];
            Calculator.secondNumber = [];
            Calculator.currentOperator = "";
        }, 2000)

    }
    else{
        // Displays the result on the screen
        if(result > 10000){
            demo.textContent = Math.ceil(result * 1e5) / 1e5;
            demo.textContent = result.toExponential(4);
        }
        else{
            demo.textContent = Math.ceil(result * 1e6) / 1e6;

        }
        // Resets the storage array and current operator
        Calculator.storage = [];
        Calculator.secondNumber = [];
        Calculator.storage.push(demo.textContent);
        Calculator.currentOperator = "";
    }
    
 }


 //Event listeners to handle all number values
 numbers.forEach(number => {
    number.addEventListener("click", () => {
        Calculator.storage.push(number.textContent)
        if(!Calculator.currentOperator) demo.textContent = Calculator.storage.join("")
        else {
            demo.textContent = "";
            Calculator.secondNumber.push(number.textContent);
            demo.textContent = Calculator.secondNumber.join("")
    }
    })
 })

 //Event listeners to hanlde all operator values
 operators.forEach(operator => {
    operator.addEventListener("click", () => {
        if(!Calculator.currentOperator){
            Calculator.currentOperator = operator.textContent;
            Calculator.storage.push(Calculator.currentOperator);
        }
        else{
            operate();
            Calculator.currentOperator = operator.textContent;
            Calculator.storage.push(Calculator.currentOperator);
        }
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
// Event listener for the decimal point
dotButton.addEventListener("click", dotValues)