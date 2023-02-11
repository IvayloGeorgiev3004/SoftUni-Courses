function negativeOrPositive(array) {
    let finalArray = []

    array.map(x => x >= 0 ? finalArray.push(x) : finalArray.unshift(x))
    let result = finalArray.map(x => x = (Number(x)));
    console.log(result.join(`\n`))


}
negativeOrPositive(['3', '-2', '0', '-1'])

function testIfNumIsPositiveOrNegative(a) {
    let finalArray = []
    for (let result of a) {
        result = Number(result)
        if (result >= 0) {
            finalArray.push(result)

        } else {
            finalArray.unshift(result)

        }
    }
    console.log(finalArray.join(`\n`))
}
testIfNumIsPositiveOrNegative(['1', `-2`])