function calculate() {
    var num1 = parseFloat(prompt("Enter first number"));
    var operator = prompt("Enter operator eg: +, -, *, /, %");
    var num2 = parseInt(prompt("Enter second number"));
    var result;
    switch (operator) {
        case "+":
            result = add(num1, num2);
            break;
        case "-":
            result = subtract(num1, num2);
            break;
        case "*":
            result = multiply(num1, num2);
            break;
        case "/":
            result = divide(num1, num2);
            break;
        case "%":
            result = modulus(num1, num2);
            break;
        default:
            alert("Invalid operator");
            break;
    }
    alert(result);
}


calculate();

function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}
function modulus(num1, num2) {
    return num1 % num2;
}






