let screen = document.getElementById("screen");
let expression = "";

function appendNumber(number) {
    expression += number;
    screen.value = expression;
}

function appendOperator(operator) {
    expression += operator;
    screen.value += operator;
}

function appendDecimal(decimal) {
    if (!expression.includes(".")) {
        expression += decimal;
        screen.value += decimal;
    }
}

function clearScreen() {
    expression = "";
    screen.value = "";
}

function calculateResult() {
    try {
        let result = eval(expression);
        screen.value = result;
        expression = result;
    } catch (error) {
        screen.value = "Error";
        expression = "";
    }
}
