function findDiagonalSums(matrix) {
    let mainDiagonal = 0
    let secondaryDiagonal = 0
    let firstIndex = 0
    let lastIndex = matrix[0].length - 1

    for (const arrays of matrix) {
        mainDiagonal += arrays[firstIndex++]
        secondaryDiagonal += arrays[lastIndex--]
    }

    console.log(`${mainDiagonal} ${secondaryDiagonal}`)
}
findDiagonalSums([[20, 40], [10, 60]])
// console.log(`--------------`)
// findDiagonalSums([[3, 5, 17], [-1, 7, 14], [1, -8, 89]])

function findDiagonalSums2(matrix) {
    let mainDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
    const size = matrix.length;

    for (let i = 0; i < size; i++) {
        mainDiagonalSum += matrix[i][i]; // Elements at the main diagonal have the same row and column indices
        secondaryDiagonalSum += matrix[i][size - 1 - i]; // Elements at the secondary diagonal have row + column = size - 1
    }

    console.log(`${mainDiagonalSum} ${secondaryDiagonalSum}`);
}
 findDiagonalSums2([[3, 5, 17], [-1, 7, 14], [1, -8, 89]])