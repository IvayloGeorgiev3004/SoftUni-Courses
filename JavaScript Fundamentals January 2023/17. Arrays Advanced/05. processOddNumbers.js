function processOddNumbers(array) {
    let newArray = []
    for (let i = 0; i < array.length; i++) {
        if (i % 2 !== 0) {
            newArray.push(array[i])
        }
    }
    let array1 = newArray.map(a => a * 2).reverse()
    return array1.join(" ")
}
processOddNumbers([3, 0, 10, 4, 7, 3])