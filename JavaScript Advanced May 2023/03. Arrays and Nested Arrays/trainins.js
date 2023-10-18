// function diagonalSums(matrix) {
//     let sumDiagonal1 = 0;
//     let sumDiagonal2 = 0;

//     for (let i = 0; i < matrix.length; i++) {
//         sumDiagonal1 += matrix[i][i]
//         sumDiagonal2 += matrix[i][(matrix.length - 1) - i]
//     }

//     console.log(sumDiagonal1 + " " + sumDiagonal2)
// }
// diagonalSums([[20, 40], [10, 60]])
// console.log(`-----------------------------------`)
// diagonalSums([[3, 5, 17], [-1, 7, 14],
// [1, -8, 89]])


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function checkNeighbor(matrix) {
    // Variable to store the count of equal neighbors
    let equals = 0;

    // Loop through each row of the matrix
    for (let i = 0; i < matrix.length; i++) {
        // Loop through each element of the current row, from right to left
        for (let j = matrix[i].length - 1; j >= 0; j--) {
            // Get the current value at the current position
            let currentValue = matrix[i][j];

            // Determine the left neighbor's value (or undefined if out of bounds)
            let leftValue = (j > 0) ? matrix[i][j - 1] : undefined;

            // Determine the down neighbor's value (or undefined if out of bounds)
            let downValue = (i < matrix.length - 1) ? matrix[i + 1][j] : undefined;

            // Compare the current value with the left neighbor
            if (currentValue === leftValue) {
                equals++;
            }

            // Compare the current value with the down neighbor
            if (currentValue === downValue) {
                equals++;
            }
        }
    }

    // Return the total count of equal neighbors found
    return equals;
}
checkNeighbor([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '7', '7'],
['9', '8', '7', '7', '7']])

console.log(`----------------------------------`)

checkNeighbor([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']])

