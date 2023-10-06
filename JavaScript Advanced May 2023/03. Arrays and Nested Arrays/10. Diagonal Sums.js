function findDiagonalSums(matrix) {
    let mainDiagonal = 0
    let secondaryDiagonal = 0

    for (let i = 0; i < matrix[0].length; i++) {
        let rows = matrix[i]
        debugger
        for (let j = 1; j < rows.length; j++) {
            mainDiagonal += [matrix][i][i]
            debugger
        }


    }

}
findDiagonalSums([[20, 40], [10, 60]])