function sortNumbers(arrayOfNumbers) {
    let finalArray = []

    arrayOfNumbers.sort((a, b) => a - b)

    while (arrayOfNumbers.length > 0) {
        if (arrayOfNumbers.length === 1) {
            let lastNum = arrayOfNumbers.pop()
            finalArray.push(lastNum)
        } else {
            let bigNum = arrayOfNumbers.pop()
            let smallNum = arrayOfNumbers.shift()
            finalArray.push(smallNum, bigNum)
        }

    }

    return finalArray
}
console.log(sortNumbers([0, 1, 3, 4, 5, 6, 7]))