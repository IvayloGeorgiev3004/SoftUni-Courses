function sumOfTwoNumber(input) {

    let num1 = Number(input[0]);
    let num2 = Number(input[1]);
    let magicNumber = Number(input[2]);
    let counter = 0;
    let flag = false;

    for (let i = num1; i <= num2; i++) {
        for (let j = num1; j <= num2; j++) {
            counter++
            let sum = j + i;
            if (sum === magicNumber) {
                console.log(`Combination N:${counter} (${i} + ${j} = ${sum})`)
                flag = true;
                break;
            }
        }
        if (flag === true) {
            break;
        }
    }
    if (flag === false) {
        console.log(`${counter} combinations - neither equals ${magicNumber}`)
    }

}
sumOfTwoNumber(["23",

"24",

"20"])