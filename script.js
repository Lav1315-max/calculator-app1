let display = document.getElementById("display");

let firstNumber = "";
let operator = "";
let secondNumber = "";

function appendNumber(number) {

    if (display.value === "0" && number !== ".") {
        display.value = number;
    } 
    else {
        display.value += number;
    }
}

function chooseOperator(op) {

    firstNumber = display.value;
    operator = op;
    display.value = "";
}

function calculate() {

    secondNumber = display.value;

    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);

    let result;

    if (operator === "+") {
        result = num1 + num2;
    }

    else if (operator === "-") {
        result = num1 - num2;
    }

    else if (operator === "*") {
        result = num1 * num2;
    }

    else if (operator === "/") {

        if (num2 === 0) {
            display.value = "Error";
            return;
        }

        result = num1 / num2;
    }

    else if (operator === "%") {
        result = num1 % num2;
    }

    display.value = result;

    firstNumber = "";
    secondNumber = "";
    operator = "";
}

function clearDisplay() {

    display.value = "0";

    firstNumber = "";
    secondNumber = "";
    operator = "";
}

function deleteLast() {

    if (display.value.length > 1) {
        display.value = display.value.slice(0, -1);
    } 
    else {
        display.value = "0";
    }
}