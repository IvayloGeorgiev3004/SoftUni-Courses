function calculator(num1, operator, num2) {
    if (operator.charCodeAt(0) === 43) {
        console.log((num1 + num2).toFixed(2))
    } else if (operator.charCodeAt(0) === 42) {
        console.log((num1 * num2).toFixed(2))
    } else if (operator.charCodeAt(0) === 45) {
        console.log((num1 - num2).toFixed(2))
    } else if (operator.charCodeAt(0) === 47) {
        console.log((num1 / num2).toFixed(2))
    }
}
calculator(25.5,
    '-',
    3)