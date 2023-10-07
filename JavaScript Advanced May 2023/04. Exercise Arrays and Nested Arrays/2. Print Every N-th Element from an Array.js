function printEveryNthElement(array, stepNumber) {
    let resultArr = []

    for (let i = 0; i < array.length; i += stepNumber) {
        resultArr.push(array[i])
    }

    return resultArr

}
console.log(printEveryNthElement(['1',
    '2',
    '3',
    '4',
    '5'],
    6))