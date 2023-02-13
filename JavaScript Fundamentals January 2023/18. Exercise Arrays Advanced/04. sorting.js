function sorting(array) {
    array.sort((a, b) => a - b)
    let sortedArray = []

    while (array.length !== 0) {
        sortedArray.push(array[array.length - 1])
        array.pop()
        sortedArray.push(array[0]);
        array.shift()
    }

    console.log(sortedArray.join(" "))

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])
