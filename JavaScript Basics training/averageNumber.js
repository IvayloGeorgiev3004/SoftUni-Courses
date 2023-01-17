function averageNumber(input) {
    let numberOfDigits = Number(input[0])
    let index = 1;
    let currentDigit = Number(input[index])
    let result = 0;

    for (let i = 1; i <= numberOfDigits; i++) {
        currentDigit = Number(input[index])
        result += currentDigit
        index++
    }
    console.log((result / numberOfDigits).toFixed(2))

}
averageNumber([2,
    6,
    4,])