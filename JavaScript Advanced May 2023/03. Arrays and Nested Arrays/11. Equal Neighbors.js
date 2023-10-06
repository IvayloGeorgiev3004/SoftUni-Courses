function findEqualNeighbors(matrix) {
    let equals = 0;
    let downValue = 0

    for (let i = 0; i < matrix.length; i++) {
        const currentArray = matrix[i];
        for (let j = 0; j < currentArray.length; j++) {
            if (i + 1 === matrix.length) {
                downValue = undefined
            } else {
                downValue = matrix[i + 1][j]
            }
            let currValue = currentArray[j]
            let rightValue = currentArray[j + 1]

            if (currValue === downValue) {
                equals++
            }
            if (currValue === rightValue) {
                equals++
            }

        }
    }
    return equals;
}
console.log(findEqualNeighbors([['2', '3', '7', '7', '7'],
['2', '3', '7', '7', '7'],
['2', '3', '7', '7', '7']]))

// ChatGPT

function countEqualNeighborPairs(matrix) {
    let equalPairs = 0;
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            // Check the right neighbor
            if (j < matrix[i].length - 1 && matrix[i][j] === matrix[i][j + 1]) {
                equalPairs++;
            }
            // Check the bottom neighbor
            if (i < matrix.length - 1 && matrix[i][j] === matrix[i + 1][j]) {
                equalPairs++;
            }
        }
    }
    
    return equalPairs;
}
console.log(countEqualNeighborPairs([['2', '3', '7', '7', '7'],
['2', '3', '7', '7', '7'],
['2', '3', '7', '7', '7']]))