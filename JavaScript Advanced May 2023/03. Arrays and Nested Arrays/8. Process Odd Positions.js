function findOddAndReversed(arrOfNumbers) {
    // You are given an array of numbers. Write a JS function that returns the elements at odd positions from the array, doubled and in reverse order
    let newArr = []
    let resultArray = arrOfNumbers.filter((a, index) => (index % 2 !== 0))

    let doubled = resultArray
        .map(element => element * 2)
        .reverse()
        .join(" ")

    return doubled
}
console.log(findOddAndReversed([3, 0, 10, 4, 7, 3]))
