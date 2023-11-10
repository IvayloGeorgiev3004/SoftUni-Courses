function equalNeighbors(matrix) {
  let counter = 0;
  let down = undefined;

  for (let columns = 0; columns < matrix.length; columns++) {
    for (let rows = 0; rows < matrix[columns].length; rows++) {
      let current = matrix[columns][rows];
      let right = matrix[columns][rows + 1];
      let down = matrix[columns + 1] ? matrix[columns + 1][rows] : undefined;

      if (current === right) {
        counter++;
      }
      if (current === down) {
        counter++;
      }
    }
  }
  return counter
}
equalNeighbors([
  ["2", "3", "4", "7", "0"],
  ["4", "0", "5", "3", "4"],
  ["2", "3", "5", "4", "2"],
  ["9", "8", "7", "5", "4"],
]);

console.log(`-----------------------------------------`);

equalNeighbors([
  ["test", "yes", "yo", "ho"],
  ["well", "done", "yo", "6"],
  ["not", "done", "yet", "5"],
]);


function equalNeighbors(matrix) {
    let equalPairs = 0;

    // Check horizontally
    for (let row of matrix) {
        for (let i = 0; i < row.length - 1; i++) {
            if (row[i] === row[i + 1]) {
                equalPairs++;
            }
        }
    }

    // Check vertically
    for (let i = 0; i < matrix[0].length; i++) {
        for (let j = 0; j < matrix.length - 1; j++) {
            if (matrix[j][i] === matrix[j + 1][i]) {
                equalPairs++;
            }
        }
    }

    return equalPairs;
}