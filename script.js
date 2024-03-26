const digits = document.querySelectorAll(".digit")
const screen = document.querySelector("#display")
const operands = document.querySelectorAll("op")
const solve = document.querySelector("solve")
const operator = '';
const firstNumber = 0;
const secondNumber = 0;

digits.forEach(digit => {
    digit.addEventListener('click', () => {
        if(operator === ''){
        // Store the clicked number into a variable
        const clickedNumber = digit.innerHTML;
        // Update the display
        screen.innerHTML += clickedNumber; // Append the clicked number to the display content
        // Store the displayed number into a variable
        firstNumber = screen.innerHTML;
    } else {
        // Store the clicked number into a variable
        const clickedNumber = digit.innerHTML;
        // Update the display
        screen.innerHTML += clickedNumber; // Append the clicked number to the display content
        // Store the displayed number into a variable
        secondNumber = screen.innerHTML;
    }
        });
    // digit.addEventListener('click', () => {
    //     // Store the clicked number into a variable
    //     const clickedNumber = digit.innerHTML;
    //     // Update the display
    //     screen.innerHTML += clickedNumber; // Append the clicked number to the display content
    //     // Store the displayed number into a variable
    //     firstNumber = screen.innerHTML;
    // });
});

operands.forEach(operand => {
    operand.addEventListener('click', () => {
        operator = operand.innerHTML;
        //Call the operate function(Make new event listener for operator)

    })
    //Another event listener for solving?
        solve.addEventListener('click', () => {
            operate(firstNumber, secondNumber, operator);
        });

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