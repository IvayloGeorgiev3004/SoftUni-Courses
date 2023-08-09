function checkOddEven(numbers) {
    return numbers.map(function(number) {
      if (number % 2 === 0) {
        return "even";
      } else {
        return "odd";
      }
    });
  }
  
  const inputNumbers = [3, 3, 8, 11, 14];
  const results = checkOddEven(inputNumbers);
  
  console.log(results); // Output: ["even", "odd", "even", "odd", "even"]
  