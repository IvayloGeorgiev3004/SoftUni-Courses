function diagonalAttack(matrix) {
    // Convert the input matrix to a numerical matrix using map(), split(), and map(Number).
    let numMatrix = matrix.map(row => row.split(" ").map(Number));

    // Initialize variables to store the sums of the main diagonal and the second diagonal.
    let mainDiagonalSum = 0;
    let secondDiagonalSum = 0;

    // Calculate the sums of the main diagonal and the second diagonal in a single loop.
    for (let i = 0; i < numMatrix.length; i++) {
        mainDiagonalSum += numMatrix[i][i];
        secondDiagonalSum += numMatrix[i][numMatrix.length - 1 - i];
    }

    // Check if the sums of the diagonals are not equal.
    if (mainDiagonalSum !== secondDiagonalSum) {
        // If the sums are not equal, print the original matrix.
        console.log(numMatrix.map(row => row.join(" ")).join("\n"));
    } else {
        // If the sums are equal, modify the matrix by updating diagonal elements in a single loop.
        for (let i = 0; i < numMatrix.length; i++) {
            numMatrix[i][i] = mainDiagonalSum; // Update the main diagonal element.
            numMatrix[i][numMatrix.length - 1 - i] = mainDiagonalSum; // Update the second diagonal element.
        }
        // Convert the modified matrix back to a string and print the result.
        console.log(numMatrix.map(row => row.join(" ")).join("\n"));
    }
}

diagonalAttack(['1 1 1',
                '1 1 1',
                '1 1 0']);