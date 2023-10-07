function findBiggestNumber(array) {
    let minElement = Number.MIN_SAFE_INTEGER;
    let finalArr = []

    for (let i = 0; i < array.length; i++) {
        if (minElement <= array[i]) {
            minElement = array[i]
            finalArr.push(minElement)
        }

    }

    return finalArr
}
findBiggestNumber([20,
    3,
    2,
    15, 6,
    1])