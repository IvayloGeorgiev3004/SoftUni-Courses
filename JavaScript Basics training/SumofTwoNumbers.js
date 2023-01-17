function SumOfTwoNumbers(input) {
    let magicNumber = Number(input[2]);
    let startNumber = Number(input[0]);
    let endNumber = Number(input[1]);
    let combinationCounter = 0;
    let flag = false;


    for (let i = startNumber; i <= endNumber; i++) {
        for (let k = startNumber; k <= endNumber; k++) {
            combinationCounter++
            if (i + k === magicNumber) {
                console.log(`Combination N:${combinationCounter} (${i} + ${k} = ${magicNumber})`)
                flag = true;
                break;
            }

        }
        if (flag === true) {
            break;
        }
    }
    if (flag === false) {
        console.log(`${combinationCounter} combinations - neither equals ${magicNumber}`)
    }
}
SumOfTwoNumbers([1, 10, 5])