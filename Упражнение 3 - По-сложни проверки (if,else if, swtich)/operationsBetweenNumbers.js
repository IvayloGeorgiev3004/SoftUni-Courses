function operationBetweenNumbers(input) {
    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let operator = input[2];

    let isEven = 0;
    let result = 0;

    switch (operator) {
        case "+":
            result = num1 + num2;
            if (result % 2 === 0) {
                isEven = "even";
            } else {
                isEven = "odd";
            }
            console.log(`${num1} ${operator} ${num2} = ${result} - ${isEven}`);
            break;
        case "-":
            result = num1 - num2;
            if (result % 2 === 0) {
                isEven = "even";
            } else {
                isEven = "odd";
            }
            console.log(`${num1} ${operator} ${num2} = ${result} - ${isEven}`);
            break;
        case "*":
            result = num1 * num2;
            if (result % 2 === 0) {
                isEven = "even";
            } else {
                isEven = "odd";
            }
            console.log(`${num1} ${operator} ${num2} = ${result} - ${isEven}`);
            break;
        case "/":
            if (num2 === 0) {
                console.log(`Cannot divide ${num1} by zero`);
            } else {
                result = num1 / num2;
                console.log(`${num1} ${operator} ${num2} = ${result.toFixed(2)}`)
            }
            break;
        case "%":
            if (num2 === 0) {
                console.log(`Cannot divide ${num1} by zero`);
            } else {
                result = num1 % num2;
                console.log(`${num1} ${operator} ${num2} = ${result}`)
            }
    }
}
operationBetweenNumbers(["10",

"12",

"+"])
