function deleingBezOstack(input) {
    let totalNumbers = Number(input[0]);
    let currentNumber = 0;

    let p1 = 0
    let p2 = 0
    let p3 = 0;

    for (let i = 1; i <= totalNumbers; i++) {
        currentNumber = Number(input[i])
        if (currentNumber % 2 === 0) {
            p1++;
        }
        if (currentNumber % 3 === 0) {
            p2++
        }
        if (currentNumber % 4 === 0) {
            p3++
        }
    }
    console.log(`${((p1 / totalNumbers)*100).toFixed(2)}%`)
    console.log(`${((p2/ totalNumbers)*100).toFixed(2)}%`)
    console.log(`${((p3/ totalNumbers)*100).toFixed(2)}%`)

}
deleingBezOstack(["3",
"3",
"6",
"9"])