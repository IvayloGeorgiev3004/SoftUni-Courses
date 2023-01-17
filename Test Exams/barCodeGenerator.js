function barCodeGenerator(input) {
    let firstNumber = input[0]
    let secondNumber = input[1]

    let num1 = Number(firstNumber[0]);
    let num2 = Number(firstNumber[1]);
    let num3 = Number(firstNumber[2]);
    let num4 = Number(firstNumber[3]);

    let endNum1 = Number(secondNumber[0]);
    let endNum2 = Number(secondNumber[1]);
    let endNum3 = Number(secondNumber[2]);
    let endNum4 = Number(secondNumber[3]);

    let i = 0;
    let k = 0;
    let l = 0;
    let m = 0;
    let string = ""

    for (i = num1; i <= endNum1; i++) {
        for (k = num2; k <= endNum2; k++) {
            for (l = num3; l <= endNum3; l++) {
                for (m = num4; m <= endNum4; m++) {
                    if (i % 2 === 0 || k % 2 === 0 || l % 2 === 0 || m % 2 === 0) {
                        continue;
                    } else {
                        string += `${i}${k}${l}${m} `
                    }
                }
            }
        }
    }

    console.log(string)
}
barCodeGenerator(["3256",
"6579"])
