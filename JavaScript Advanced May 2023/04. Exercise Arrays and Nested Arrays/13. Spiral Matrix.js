function generateSpiralMatrix(rows, cols) {
    // Инициализираме матрицата с нули
    const matrix = new Array(rows).fill().map(() => new Array(cols).fill(0));

    let rowStart = 0;
    let rowEnd = rows - 1;
    let colStart = 0;
    let colEnd = cols - 1;
    let counter = 1; // Използваме брояч, за да следим текущата стойност, която трябва да запишем

    // Цикъл, който се изпълнява докато броячът достигне до rows * cols
    while (counter <= rows * cols) {
        // Обхождаме отгоре надолу вдясно
        for (let i = colStart; i <= colEnd; i++) {
            matrix[rowStart][i] = counter++;
        }
        rowStart++;

        // Обхождаме отгоре надолу наляво
        for (let i = rowStart; i <= rowEnd; i++) {
            matrix[i][colEnd] = counter++;
        }
        colEnd--;

        // Обхождаме отдолу нагоре наляво
        for (let i = colEnd; i >= colStart; i--) {
            matrix[rowEnd][i] = counter++;
        }
        rowEnd--;

        // Обхождаме отдолу нагоре надясно
        for (let i = rowEnd; i >= rowStart; i--) {
            matrix[i][colStart] = counter++;
        }
        colStart++;
    }

    // Извеждаме матрицата
    for (let row = 0; row < rows; row++) {
        console.log(matrix[row].join(' '));
    }
}

// Пример за използване
generateSpiralMatrix(4, 4);