function checkNum(num) {
    let numToString = num.toString()
    let length = numToString.length;
    let isSame = true;
    let accumulatedNumber = 0

    for (let i = 0; i < length; i++) {
        accumulatedNumber += Number(numToString[i])
        for (let j = i + 1; j < length; j++) {
            if (numToString[i] !== numToString[j]) {
                isSame = false;
            }
        }
    }

    console.log(isSame)
    console.log(accumulatedNumber)
}
checkNum(2222222)


function checkNum2(num) {
    const numToString = num.toString();
    const firstDigit = numToString[0];
    
    const isSame = numToString.split('').every(digit => digit === firstDigit);
    const accumulatedNumber = numToString.split('').reduce((acc, digit) => acc + Number(digit), 0);
    debugger
    console.log(isSame);
    console.log(accumulatedNumber);
}
checkNum2(2222222)