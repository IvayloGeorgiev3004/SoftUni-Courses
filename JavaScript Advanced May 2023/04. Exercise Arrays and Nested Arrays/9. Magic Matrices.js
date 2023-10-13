function checkIfMatrixIsMagical(matrix) {
    // Намиране на магическата сума за първия ред на матрицата
    let magicSum = matrix[0].reduce((num1, num2) => num1 + num2);
    // Инициализация на масиви, в които ще съхраняваме сумите на колоните и редовете
    let columnsSumArray = [];
    let rowsArray = [];

    // Инициализация на масивите със суми на колоните и редовете
    for (let m = 0; m < matrix[0].length; m++) {
        columnsSumArray[m] = 0;
        rowsArray[m] = 0;
    }

    // Изчисляване на сумите на колоните и редовете
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            columnsSumArray[j] += matrix[i][j];
            rowsArray[i] += matrix[i][j];
        }
    }

    // Намиране на магическата сума за колоните и редовете и закръгляване до цяло число
    let columnsMagical = columnsSumArray.reduce((num1, num2) => (num1 + num2));
    columnsMagical = Math.floor(columnsMagical / columnsSumArray.length);
    let rowsMagical = rowsArray.reduce((num1, num2) => (num1 + num2));
    rowsMagical = Math.floor(rowsMagical / rowsArray.length);

    // Проверка дали магическата сума за редовете, колоните и първия ред съвпадат
    if (magicSum === columnsMagical && magicSum === rowsMagical) {
        console.log(true); // Ако съвпадат, матрицата е магически квадрат
    } else {
        console.log(false); // Ако не съвпадат, матрицата не е магически квадрат
    }
}

// Извикване на функцията с входната матрица
checkIfMatrixIsMagical([[3, 3, 1], [4, 2, 1], [0, 2, 5]]);



    // let матрица = [
    //     [4, 5, 6],
    //     [6, 5, 4],
    //     [5, 5, 6]
    // ];
    
    // let сумиНаКолони = []; // Масив за съхранение на сумите на колоните
    
    // // Инициализация на сумите с нула
    // for (let j = 0; j < матрица[0].length; j++) {
    //     сумиНаКолони[j] = 0;
    // }
    
    // // Пресмятане на сумите на колоните
    // for (let i = 0; i < матрица.length; i++) {
    //     for (let j = 0; j < матрица[i].length; j++) {
    //         сумиНаКолони[j] += матрица[i][j];
    //     }
    // }
    
    // console.log(сумиНаКолони);