function diagonalSums(matrix) {
  let mainDiagonalSum = 0; // Initialize the sum of the main diagonal to 0
  let secondaryDiagonalSum = 0; // Initialize the sum of the secondary diagonal to 0

  for (let columns = 0; columns < matrix.length; columns++) {
    mainDiagonalSum += matrix[columns][columns]; // Add the main diagonal element to the sum
    secondaryDiagonalSum += matrix[columns][matrix[columns].length - 1 - columns]; // Add the secondary diagonal element to the sum
  }

  console.log(mainDiagonalSum + " " + secondaryDiagonalSum); // Print the sums of the diagonals
}

diagonalSums([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);

function diagonalSums(matrix) {
  let mainDiagonalSum = 0; // Initialize the sum of the main diagonal to 0
  let secondaryDiagonalSum = 0; // Initialize the sum of the secondary diagonal to 0

  // Iterate through the columns of the matrix
  for (let columns = 0; columns < matrix.length; columns++) {
    mainDiagonalSum += matrix[columns][columns]; // Add the main diagonal element to the sum

    // Iterate through the rows of the current column in reverse order
    for (let rows = matrix[columns].length - 1 - columns; rows >= 0; rows--) {
      secondaryDiagonalSum += matrix[columns][rows]; // Add the secondary diagonal element to the sum
      break; // Break the loop after adding the last element of the secondary diagonal
    }
  }

  console.log(mainDiagonalSum + " " + secondaryDiagonalSum); // Print the sums of the diagonals
}
diagonalSums([
  [3, 5, 17],
  [-1, 7, 14],
  [1, -8, 89],
]);
