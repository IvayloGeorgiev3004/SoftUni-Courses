function janNotation2(array) {
    // Object containing arithmetic operations and their corresponding functions
    const calculator = {
      "+": (a, b) => a + b,
      "-": (a, b) => a - b,
      "*": (a, b) => a * b,
      "/": (a, b) => {
        // Handle division by zero
        if (b === 0) {
          return "Cannot divide by zero";
        }
        return a / b;
      },
    };
  
    // Function to check if a value is a number
    function isNumber(value) {
      // If value is a number, return the number; otherwise, return undefined
      if (typeof value === "number") {
        return value;
      } else {
        return undefined;
      }
    }
  
    // Array to store intermediate and final results
    const finalArray = [];
  
    // Iterate through the input array
    for (let input of array) {
      // Check if the input is a number
      let isValueNumber = isNumber(input);
      if (isValueNumber) {
        // If input is a number, push it to finalArray
        finalArray.push(input);
      } else {
        // If input is an operator
        if (finalArray.length < 2) {
          // Error: Not enough operands for the operator
          return console.log(`Error: not enough operands!`);
        } else {
          // Get the last two numbers from finalArray
          const lastNum2 = finalArray.pop(); // Get the last number from the array
          const lastNum1 = finalArray.pop(); // Get the second last number from the array
          // Perform the operation and push the result back to finalArray
          const resultingNumber = calculator[input](lastNum1, lastNum2);
          finalArray.push(resultingNumber); // Add the resulting number back to the array
        }
      }
    }
  
    // Check if finalArray contains exactly one element
    if (finalArray.length !== 1) {
      // Error: Too many or too few operands
      return console.log(`Error: too many operands!`);
    } else {
      // Print the final result
      return console.log(finalArray[0]);
    }
  }
janNotation2([7, 
    3, 
    4, 
    '-']);
