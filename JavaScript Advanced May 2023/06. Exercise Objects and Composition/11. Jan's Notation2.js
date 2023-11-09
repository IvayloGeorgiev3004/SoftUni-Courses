function janNotation2(array) {
  const calculator = {
    "+": (a, b) => a + b,
    "-": (a, b) => a - b,
    "*": (a, b) => a * b,
    "/": (a, b) => {
      if (b === 0) {
        return "Cannot divide by zero";
      }
      return a / b;
    },
  };

  function isNumber(value) {
    if (typeof value === "number") {
      return value;
    } else {
      return undefined;
    }
  }

  const finalArray = [];

  for (let input of array) {
    let isValueNumber = isNumber(input);
    if (isValueNumber) {
      finalArray.push(input);
    } else {
        if (finalArray.length < 2) {
          return console.log(`Error: not enough operands!`);
        } else {
          const lastNum2 = finalArray.pop(); // Get the last number from the array
          const lastNum1 = finalArray.pop(); // Get the second last number from the array
          const resultingNumber = calculator[input](lastNum1, lastNum2);
          finalArray.push(resultingNumber); // Add the resulting number back to the array
        }
      }
  }

  if (finalArray.length !== 1) {
    return console.log(`Error: too many operands!`);
  } else {
    return console.log(finalArray[0]);
  }
}
janNotation2([7, 
    3, 
    4, 
    '-']);
