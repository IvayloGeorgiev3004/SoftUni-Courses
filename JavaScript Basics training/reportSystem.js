function reportSystem(input) {
    let charitySum = Number(input[0]);
    let index = 1;
    let currentInput = input[index];
    let sum1 = 0;
    let sum2 = 0;
    let totalSum = 0
    let cardCounter = 0;
    let cardSum = 0
    let cashCounter = 0;
    let cashSum = 0;
    goalAchieved = false;

    while (currentInput !== "End") {
        sum1 = Number(input[index]);
        currentInput = input[index];
        index++
        sum2 = Number(input[index]);
        index++
        if (sum1 > 100) {
            console.log(`Error in transaction!`)
        } else if (sum1 <= 100) {
            console.log(`Product sold!`)
            totalSum += sum1;
            cashSum += sum1
            cashCounter++
        }
        if (sum2 < 10) {
            console.log(`Error in transaction!`)
        } else if (sum2 >= 10) {
            console.log(`Product sold!`)
            totalSum += sum2;
            cardSum += sum2;
            cardCounter++
        }
        if (totalSum >= charitySum) {
            goalAchieved = true;
            break;

        }

    }
    if (goalAchieved === true) {
        console.log(`Average CS: ${(cashSum / cashCounter).toFixed(2)}`)
        console.log(`Average CC: ${(cardSum / cardCounter).toFixed(2)}`)

    } else if (currentInput === "End") {
        console.log(`Failed to collect required money for charity.`)
    }
}
reportSystem([600,
    86,
    150,
    98,
    227,
    'End'])