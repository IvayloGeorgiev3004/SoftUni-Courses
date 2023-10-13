function findMagicMatrices2(matrix) {
    // Намиране на магическата сума за първия ред на матрицата
    let magicNum = matrix[0].reduce((num1, num2) => num1 + num2);
    // Променливи, които ще съхраняват сумите на редовете и колоните
    let rowsSum = 0;
    let columnsSum = 0;
    // Флаг, който показва дали матрицата е магически квадрат
    let isMagical = true;

    // Обхождане на матрицата
    for (let rows = 0; rows < matrix.length; rows++) {
        for (let columns = 0; columns < matrix.length; columns++) {
            // Намиране на сумата на текущия ред
            rowsSum += matrix[rows][columns];
            // Намиране на сумата на текущата колона
            columnsSum += matrix[columns][rows];
        }
        // Проверка дали сумите на редовете и колоните съвпадат с магическата сума
        if (rowsSum !== magicNum || columnsSum !== magicNum) {
            isMagical = false;
        }
        // Нулиране на сумите за следващите редове и колони
        columnsSum = 0;
        rowsSum = 0;
    }

    // Проверка дали матрицата е магически квадрат и извеждане на резултата
    isMagical ? console.log(true) : console.log(false);
}

// Извикване на функцията с входната матрица
findMagicMatrices2([[11, 32, 45], [21, 0, 1], [21, 1, 1]]);

// | 1  2  3  4 |
// | 5  6  7  8 |
// | 9 10 11 12 |