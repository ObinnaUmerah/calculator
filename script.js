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
let firstNum = 0;
let operator;
let secondNum = 0;

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