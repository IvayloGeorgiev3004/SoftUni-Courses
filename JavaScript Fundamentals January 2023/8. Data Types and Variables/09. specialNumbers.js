function specialNumbers(number) {

    for (let i = 1; i <= number; i++) {
        let sum = 0;
        let numToString = String(i);
        for (let j = 0; j < numToString.length; j++) {
            let currentChar = numToString[j]
            let charAsNum = Number(currentChar)
            sum += charAsNum

        }
        if (sum === 5 || sum === 7 || sum === 11) {
            console.log(`${i} -> True`)
        } else {
            console.log(`${i} -> False`)
        }

    }
}
specialNumbers(15)