function sortHalfArray(arrayOfNumbers) {
    let half = Math.ceil(arrayOfNumbers.length / 2)
    arrayOfNumbers.sort((a, b) => a - b)

    if (arrayOfNumbers.length % 2 === 0) {
        arrayOfNumbers.splice(0, half);
    } else {
        arrayOfNumbers.splice(0, half - 1);
    }

    return arrayOfNumbers
}
console.log(sortHalfArray([4, 7, 2, 5]))
console.log(`---------------------------`)
console.log(sortHalfArray([3, 19, 14, 7, 2, 19, 6]))