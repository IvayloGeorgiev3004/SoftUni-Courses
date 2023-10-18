function findOrbits(array) {
    let [rows, columns, startRow, startColumn] = array;


    let orbitMatrix = new Array(rows).fill().map(() => new Array(columns).fill(0))

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            orbitMatrix[startColumn][startRow] = 1;
            debugger
        }
    }

}
findOrbits([4, 4, 0, 0])


function buildOrbits(input) {
    const [width, height, x, y] = input;
    const matrix = new Array(height).fill().map(() => new Array(width).fill(0));

    const directions = [
        [-1, -1], [-1, 0], [-1, 1],
        [0, -1], [0, 1],
        [1, -1], [1, 0], [1, 1]
    ];

    let value = 1;
    matrix[y][x] = 1;

    while (true) {
        let cellsFilled = false;
        for (let row = 0; row < height; row++) {
            for (let col = 0; col < width; col++) {
                if (matrix[row][col] === value) {
                    for (const [dx, dy] of directions) {
                        const newRow = row + dx;
                        const newCol = col + dy;
                        if (newRow >= 0 && newRow < height && newCol >= 0 && newCol < width && matrix[newRow][newCol] === 0) {
                            matrix[newRow][newCol] = value + 1;
                            cellsFilled = true;
                        }
                    }
                }
            }
        }
        if (!cellsFilled) {
            break;
        }
        value++;
    }

    console.log(matrix.map(row => row.join(' ')).join('\n'));
}

const input = [8, 8, 1, 1];
buildOrbits(input);

function orbit([width, height, x, y]) {
    // Създаване на празна матрица с размери width x height
    const matrix = new Array(width).fill().map((e) => new Array(height).fill(0));

    // Обхождане на всички клетки в матрицата
    for (let row = 0; row < width; row++) {
        for (let col = 0; col < height; col++) {
            // Изчисляване на орбиталната стойност за текущата клетка
            // Като се намира максималната разлика между текущия ред (row) и x
            // и максималната разлика между текущата колона (col) и y, след това се добавя 1
            matrix[row][col] = Math.max(Math.abs(row - x), Math.abs(col - y)) + 1;
        }
    }

    // Преобразуване на матрицата в текстов вид, разделен по интервали и нови редове
    const output = matrix.map((row) => row.join(" ")).join("\n");

    // Извеждане на резултата в конзолата
    console.log(output);
}

// Извикване на функцията с входния параметър [4, 4, 0, 0]
orbit([4, 4, 0, 0]);

