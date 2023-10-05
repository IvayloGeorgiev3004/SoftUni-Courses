function checkArrayNumbers(arrayOfNumbers) {
    let finalArray = []
    for (const number of arrayOfNumbers) {
        if (number < 0) {
            finalArray.unshift(number)
        } else {
            finalArray.push(number)
        }
    }
    console.log(finalArray.join("\n"))
}
checkArrayNumbers([7, -2, 8, 9])