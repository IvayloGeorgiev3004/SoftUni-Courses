function diagonalAttack(arrayOfStrings) {
    let mainMatrix = [];

    // Превръщане на входния масив от низове в двумерен масив (матрица)
    for (const element of arrayOfStrings) {
        mainMatrix.push(element.split(" ").map(Number));
    }

    let firstDiagonalSum = 0;
    let secondDiagonalIndex = mainMatrix.length - 1;
    let secondDiagonalSum = 0;

    // Изчисляване на сумите на главния и вторичния диагонал
    for (let i = 0; i < mainMatrix.length; i++) {
        firstDiagonalSum += mainMatrix[i][i];
        secondDiagonalSum += mainMatrix[i][secondDiagonalIndex--];
    }

    // Проверка дали сумите на диагоналите са различни
    if (firstDiagonalSum !== secondDiagonalSum) {
        // Ако са различни, извеждаме оригиналната матрица
        mainMatrix.forEach(element => console.log(element.join(" ")));
    } else {
        // Ако сумите са равни, създаваме нова матрица с променените стойности
        let numberOfRows = mainMatrix.length;
        let numberOfColumns = mainMatrix[0].length;
        let finalResultArr = Array.from(Array(numberOfRows), () => Array(numberOfColumns).fill(0));

        // Попълване на новата матрица със сумата на главния диагонал
        for (let rows = 0; rows < numberOfRows; rows++) {
            for (let columns = 0; columns < numberOfColumns; columns++) {
                if (rows !== columns && columns !== numberOfColumns - rows - 1) {
                    // Ако не сме на диагонал, променяме стойността
                    finalResultArr[rows][columns] = firstDiagonalSum;
                } else {
                    // Ако сме на диагонал, оставяме стойността непроменена
                    finalResultArr[rows][columns] = mainMatrix[columns][rows];
                }
            }
        }

        // Извеждане на новата матрица
        for (const row of finalResultArr) {
            console.log(row.join(" "));
        }
    }
}

// Извикване на функцията с входни данни
diagonalAttack(['1 1 1', '1 1 1', '1 1 0']);