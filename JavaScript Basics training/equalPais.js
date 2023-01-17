function equalPairs(input) {
    let totalPairs = Number(input[0])
    let index = 1;
    let currentNumber = Number(input[index])
    index++
    let nextNumber = Number(input[index]);
    let currentSum = currentNumber + nextNumber
    let nextSum = 0;
    let sum = 0;
    let equalCounter = 1;
    let maxDiff = Number.MIN_SAFE_INTEGER;


    for (let i = 1; i <= totalPairs; i++) {

        if (totalPairs === 1) {
            break;
        }
        currentNumber = Number(input[index - 1])
        nextNumber = Number(input[index]);
        currentSum = currentNumber + nextNumber
        index++
        let currentNumber2 = Number(input[index]);
        index++
        let nextNumber2 = Number(input[index])
        nextSum = currentNumber2 + nextNumber2

        if (currentSum === nextSum) {
            sum = currentSum
            equalCounter++
        } else if (currentSum > nextSum) {
            if (maxDiff < currentSum) {
                maxDiff = (currentSum - nextSum)
            }

        } else if (currentSum < nextSum) {
            if (maxDiff < nextSum) {
                maxDiff = (nextSum - currentSum)
            }

        }

    }
    if (totalPairs === 1) {
        console.log(`Yes, value=${currentSum}`)
    } else if (equalCounter === totalPairs) {
        console.log(`Yes, value=${sum}`)
    } else {
        console.log(`No, maxdiff=${maxDiff}`)
    }
}
equalPairs([7,
    34,
    -33,
    52,
    12,
    -32,
    32,
    23,
    41,
    7,
    25,
    34,
    23,
    124,
    21])
