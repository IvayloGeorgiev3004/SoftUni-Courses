function magicMatrices3(matrix) {
    // Calculate the magic sum by summing the elements in the first row
    let magicSum = matrix[0].reduce((a, b) => a + b);
  
    // Check each row's sum
    for (let rows of matrix) {
      for (let i = 0; i < rows.length; i++) {
        // Calculate the sum of each row
        let number = rows.reduce((a, b) => a + b);
        // Check if the row's sum is equal to the magic sum
        if (number === magicSum) {
          continue; // Continue to the next iteration if the sum is correct
        } else {
          return false; // Return false if the row's sum is not equal to the magic sum
        }
      }
    }
  
    // Check each column's sum
    for (let i = 0; i < matrix.length; i++) {
      let sum = 0;
      for (let j = 0; j < matrix.length; j++) {
        // Calculate the sum of each column
        sum += matrix[j][i];
      }
      // Check if the column's sum is equal to the magic sum
      if (sum === magicSum) {
        continue; // Continue to the next iteration if the sum is correct
      } else {
        return false; // Return false if the column's sum is not equal to the magic sum
      }
    }
  
    // If all rows and columns have the correct sum, log true
    console.log(true);
  }

  magicMatrices3([
    [1, 0, 5],
    [0, 5, 1],
    [0, 1, 5],
  ]);