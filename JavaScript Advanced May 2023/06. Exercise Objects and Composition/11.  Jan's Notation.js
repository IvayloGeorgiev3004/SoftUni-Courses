function jansNotation(array) {
    // Array to store the intermediate results of the RPN expression
    const finalArray = [];

    // Loop through each element in the input array
    for (let i = 0; i < array.length; i++) {
        // Get the current element from the input array
        let current = array[i];

        // If the current element is a number, push it to the finalArray
        if (typeof current === "number") {
            finalArray.push(current);
        } else {
            // If the current element is an operator, retrieve the last two numbers from finalArray
            // and perform the operation, then replace the last two elements with the result
            let [currNum, lastNum] = finalArray.slice(finalArray.length - 2, finalArray.length);
            if (currNum !== undefined && lastNum !== undefined) {
                // Call the calculations function to perform the arithmetic operation
                let result = calculations(currNum, lastNum, current);
                // Remove the last two elements from finalArray and replace them with the result
                finalArray.splice(finalArray.length - 2, 2, result);
            } else {
                // If there are not enough operands, log an error and exit the function
                return console.log(`Error: not enough operands!`);
            }
        }
    }

    // Function to perform arithmetic calculations based on the operator
    function calculations(num1, num2, operator) {
        switch (operator) {
            case '/':
                return num1 / num2;
            case '-':
                return num1 - num2;
            case '+':
                return num1 + num2;
            case '*':
                return num1 * num2;
        }
    }

    // Check the finalArray length, if greater than 1, log an error (too many operands)
    // Otherwise, log the final result
    if (finalArray.length > 1) {
        return console.log(`Error: too many operands!`);
    }
    console.log(finalArray[0]);
}
jansNotation([15, "/"]);
