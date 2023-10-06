function findBiggestElementInMatrix(matrix) {
    let max = Number.MIN_SAFE_INTEGER;
    for (const arrays of matrix) {
        arrays.forEach(element => {
            if (element > max) {
                max = element
            }
        });
        
    }
    return max
}
findBiggestElementInMatrix([[3, 5, 7, 12],
[-1, 4, 33, 2],
[8, 3, 0, 4]])