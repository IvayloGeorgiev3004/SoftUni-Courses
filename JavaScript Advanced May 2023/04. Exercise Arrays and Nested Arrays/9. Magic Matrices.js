function checkIfMatrixIsMagical(matrix) {
    let magicSum = matrix[0].reduce((num1, num2) => num1 + num2)
    let isMagical = false;    debugger
    let columnsSumArray = []

    for (let m = 0; m< matrix[0].length; m++){
        columnsSumArray[m] = 0
    }

    debugger
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            columnsSumArray[j] += matrix[i][j]
        }

    }
    console.log(columnsSumArray)
}
checkIfMatrixIsMagical([
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]])

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