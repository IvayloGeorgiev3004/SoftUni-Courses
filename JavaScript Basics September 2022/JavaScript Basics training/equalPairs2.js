function equalPairs2(input) {
    let totalNumberOfPairs = Number(input[0]);
    let firstCouple = 0;
    let secondCouple = 0;
    let sum1 = 0;
    let sum2 = 0;
    let equalSum = 0;
    let equalCounter = 1;
    let maxDiff = 0;
    let index = 1
    let flag = false;

    for (let i = 1; i <= totalNumberOfPairs; i++) {
        if (totalNumberOfPairs === 1) {
            sum1 = Number(input[1]) + Number(input[2])
            console.log(`Yes, value=${sum1}`);
            flag = true
            break;
        }
        firstCouple = Number(input[index]) + Number(input[index + 1])
        sum1 = firstCouple
        secondCouple = Number(input[index + 2]) + Number(input[index + 3])
        sum2 = secondCouple
        index += 2


        if (sum1 === sum2) {
            equalSum = sum1;
            equalCounter++
        }
        if (sum1 > sum2) {
            if (maxDiff < (sum1 - sum2)) {
                maxDiff = sum1 - sum2
            }
        } else if (sum2 > sum1) {
            if (maxDiff < (sum2 - sum1)) {
                maxDiff = sum2 - sum1
            }
        }

    }
    if (equalCounter === totalNumberOfPairs && totalNumberOfPairs !== 1) {
        console.log(`Yes, value=${sum1}`);
    } else if (flag === false) {
        console.log(`No, maxdiff=${maxDiff}`)
    }

}
equalPairs2([2,
    1,
    2,
    2,
    2
])