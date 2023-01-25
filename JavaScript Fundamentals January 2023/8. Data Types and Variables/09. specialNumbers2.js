function specialNumbers2(number) {
    let iAsChar = "";
    let jAsChar = "";
    let currentNumber = 0;


    for (let i = 1; i <= number; i++) {
        iAsChar = i.toString()
        let sum = 0;
        for (let j = 0; j < iAsChar.length; j++) {
            jAsChar = iAsChar[j];
            currentNumber = Number(jAsChar);
            sum += currentNumber;
        }
        isSpecial = (sum === 5 || sum === 7 || sum === 11);

        console.log(`${i} -> ${isSpecial ? "True" : "False"}`)
    }


}
specialNumbers2(15)