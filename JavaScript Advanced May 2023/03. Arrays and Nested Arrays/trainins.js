function diagonalSums(matrix) {
    let sumDiagonal1 = 0;
    let sumDiagonal2 = 0;

    for (let i = 0; i < matrix.length; i++) {
        sumDiagonal1 += matrix[i][i]
        sumDiagonal2 += matrix[i][(matrix.length - 1) - i]
    }

    console.log(sumDiagonal1 + " " + sumDiagonal2)
}
diagonalSums([[20, 40], [10, 60]])
console.log(`-----------------------------------`)
diagonalSums([[3, 5, 17], [-1, 7, 14],
[1, -8, 89]])


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function checkNeighbor(matrix) {
    let equals = 0;
    let leftValue = null
    let downValue = null

    for (let i = 0; i < matrix.length; i++) {
        for (let j = matrix[i].length - 1; j >= 0; j--) {
            let currentValue = matrix[i][j]
            if (j > 0) {
                leftValue = matrix[i][j - 1];
            } else {
                leftValue = undefined
            }
            if (i < matrix.length - 1) {
                downValue = matrix[i + 1][j]
            } else {
                downValue = undefined
            }

            if (currentValue === leftValue) {
                equals++
            }
            if (currentValue === downValue) {
                equals++
            }

        }

    }
    return equals
}
checkNeighbor([['2', '3', '4', '7', '0'],
['4', '0', '5', '3', '4'],
['2', '3', '5', '7', '7'],
['9', '8', '7', '7', '7']])

console.log(`----------------------------------`)

checkNeighbor([['test', 'yes', 'yo', 'ho'],
['well', 'done', 'yo', '6'],
['not', 'done', 'yet', '5']])

