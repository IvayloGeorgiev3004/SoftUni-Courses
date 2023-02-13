function smallestTwoNumbers(array) {

    array.sort((a, b) => a - b)
    let finalResult = array.slice(0, 2)
    return finalResult.join(" ")

}
smallestTwoNumbers([30, 15, 4, 5])