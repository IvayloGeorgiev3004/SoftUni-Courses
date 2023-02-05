function simpleCalculator(a, b, operator) {
    let result = 0;
    switch (operator) {
        // case "multiply": result = (a, b) => a * b; return result(a, b); // using arrow operator
        case "multiply": result = multiplyTwoNumbers(a,b); return result(a, b); // using another function
        case "divide": result = (a, b) => a / b; return result(a, b);  // using arrow operator
        case "add": result = (a, b) => a + b; return result(a, b);  // using arrow operator
        case "subtract": result = (a, b) => a - b; return result(a, b);  // using arrow operator
    }


}
simpleCalculator(5, 5, "multiply")

function divideTwoNumbers(num1, num2) {
    return num1 / num2;
}

function multiplyTwoNumbers(num1, num2) {
    return num1 * num2;
}

function addTwoNumbers(num1, num2) {
    return num1 + num2;
}

function subtractTwoNumbers(num1, num2) {
    return num1 - num2;
}