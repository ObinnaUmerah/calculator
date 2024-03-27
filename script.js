const digits = document.querySelectorAll(".digit")
const screen = document.querySelector("#display")
const operands = document.querySelectorAll(".op")
const solve = document.querySelector("#solve")
let operator = '';
let firstNumber = '';
let secondNumber = '';

digits.forEach(digit => {
    digit.addEventListener('click', () => {
        if(operator === ''){
            firstNumber += digit.textContent;
            screen.textContent += digit.textContent;
    } else {
        secondNumber += digit.textContent;
        screen.textContent += digit.textContent;
    }
        });
    
});

operands.forEach(operand => {
    operand.addEventListener('click', () => {
        // Store the selected operator
        operator = operand.textContent;
        // Update the display with the selected operator
        screen.textContent += operand.textContent;
        // Clear the firstNumber to allow for the entry of the second number
        firstNumber = '';
    });
});

solve.addEventListener('click', () => {
    
})

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

//Will be used to display numbers later
//Already used above
// let firstNum = 0;
// let operator;
// let secondNum = 0;

function operate(x, y, op) {
    switch (op) {
        case '+':
            add(x, y);
        break;

        case '-':
            subtract(x, y);
        break;
        
        case '*':
            multiply(x, y);
        break;

        case '/':
            divide(x, y);
        break;

    }
}