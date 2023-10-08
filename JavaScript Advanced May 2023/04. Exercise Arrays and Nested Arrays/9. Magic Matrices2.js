function findMagicMatrices2(matrix) {
    let magicNum = matrix[0].reduce((num1, num2) => num1 + num2)
    let rowsSum = 0;
    let columnsSum = 0;
    let isMagical = true;

    for (let rows = 0; rows < matrix.length; rows++) {
        for (let columns = 0; columns < matrix.length; columns++) {
            rowsSum += matrix[rows][columns]
            columnsSum += matrix[columns][rows]
        }
        if (rowsSum !== magicNum || columnsSum !== magicNum) {
            isMagical = false;
        }
        columnsSum = 0;
        rowsSum = 0;
    }

    isMagical ? console.log(isMagical) : console.log(isMagical)
}
findMagicMatrices2([[11, 32, 45],
[21, 0, 1],
[21, 1, 1]])

// | 1  2  3  4 |
// | 5  6  7  8 |
// | 9 10 11 12 |