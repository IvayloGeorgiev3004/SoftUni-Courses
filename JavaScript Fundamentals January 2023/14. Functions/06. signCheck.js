function signCheck(num1, num2, num3) {
    let currentSign = 'Positive'
    let isNum1Negative = num1 < 0; // връща true или false
    currentSign = checkAndChangeCurrentSign(currentSign, isNum1Negative)
    let isNum2Negative = num2 < 0; // връща true или false
    currentSign = checkAndChangeCurrentSign(currentSign, isNum2Negative)
    let isNum3Negative = num3 < 0; // връща true или false
    currentSign = checkAndChangeCurrentSign(currentSign, isNum3Negative)
    return currentSign;


    function checkAndChangeCurrentSign(currentSign, shouldChange) {
        if (shouldChange === false) {
            return currentSign;
        }

        if (currentSign === "Positive") {
            currentSign = "Negative"
        } else {
            currentSign = "Positive"
        }
        return currentSign;
    }

}
console.log(signCheck(5,
    12,
    -15))