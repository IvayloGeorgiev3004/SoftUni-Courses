function diagonalAttack(arrayOfStrings) {
    let mainMatrix = []
    let isEqual = true;
    for (const element of arrayOfStrings) {
        mainMatrix.push(element.split(" "))
    }
    let firstDiagonalSum = 0;
    let secondDiagonalIndex = mainMatrix.length - 1;
    let secondDiagonalSum = 0;


    for (let i = 0; i < mainMatrix.length; i++) {
        firstDiagonalSum += Number([mainMatrix[i][i]]);
        secondDiagonalSum += Number(mainMatrix[i][secondDiagonalIndex--]);

    }
    if (firstDiagonalSum !== secondDiagonalSum) {
        mainMatrix.forEach(element => console.log(element.join(" ")));
        isEqual = false;
    }

    debugger
    let numberOfRows = mainMatrix.length;
    let numberOfColumns = mainMatrix[0].length;
    let finalResultArr = Array.from(Array(numberOfRows), () => Array(numberOfColumns).fill(0));


    for (let rows = 0; rows < numberOfRows; rows++) {
        for (let columns = 0; columns < numberOfColumns; columns++) {
            if (rows !== columns && columns !== numberOfColumns - rows - 1) {
                finalResultArr[rows][columns] = firstDiagonalSum
            } else {
                finalResultArr[columns][rows] = mainMatrix[columns][rows]
            }

        }
    }
    if (isEqual)
        for (const row of finalResultArr) {
            console.log(row.join(" "))
        }
}
diagonalAttack(['1 1 1',
    '1 1 1',
    '1 1 0'])