function diagonalAttack(matrix) {
    // Initialize an empty array to store the numerical version of the input matrix.
    let numMatrix = [];

    // Convert each string element in the input matrix to an array of numbers and store it in numMatrix.
    matrix.forEach(element => {
        let elementToNumber = element.split(" ").map(a => Number(a));
        numMatrix.push(elementToNumber);
    });

    // Initialize variables to store the sums of the main diagonal and the second diagonal.
    let mainDiagonalSum = 0;
    let secondDiagonalSum = 0;

    // Calculate the sums of the main diagonal and the second diagonal.
    for (let rows = 0; rows < numMatrix.length; rows++) {
        mainDiagonalSum += numMatrix[rows][rows];
        secondDiagonalSum += numMatrix[rows][numMatrix[0].length - 1 - rows];
    }

    // Initialize a variable to check if the sums of the diagonals are equal.
    let areEqual = false;

    // Check if the sums of the main diagonal and the second diagonal are equal.
    if (mainDiagonalSum === secondDiagonalSum) {
        areEqual = true;
    }

    console.table(numMatrix)
    // If the sums of the diagonals are not equal, print the unchanged matrix.
    if (areEqual === false) {
        let unchangedResult = numMatrix.map(row => row.join(" ")).join("\n");
        return console.log(unchangedResult);
    } else {
        // If the sums of the diagonals are equal, modify the matrix by replacing non-diagonal elements with the main diagonal sum.
        for (let rows = 0; rows < numMatrix.length; rows++) {
            for (let columns = 0; columns < numMatrix[0].length; columns++) {
                // Check if the current element is on a diagonal; if not, replace it with the main diagonal sum.
                if (rows === columns || columns === (numMatrix.length - 1) - rows) {
                    continue;
                } else {
                    numMatrix[rows][columns] = mainDiagonalSum;
                }
            }
        }
    }

    // Convert the modified matrix back to a string and print the result.
    let changedResult = numMatrix.map(row => row.join(" ")).join("\n");
    console.log(changedResult);
}

// Example usage of the diagonalAttack function with an input matrix.
diagonalAttack(['1 1 1',
    '1 1 1',
    '1 1 0']);