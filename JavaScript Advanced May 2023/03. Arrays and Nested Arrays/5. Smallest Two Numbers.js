function findSmallestNumbers(arrayOfNumbers) {
    arrayOfNumbers
        .sort((a, b) => a - b)
        .splice(2, (arrayOfNumbers.length - 2))

    console.log(arrayOfNumbers.join(" "))
}
findSmallestNumbers([3, 0, 10, 4, 7, 3])