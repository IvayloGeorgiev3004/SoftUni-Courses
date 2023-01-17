function combinations(input) {
    let magicNumber = Number(input[0]);
    let counter = 0;

    for (let num1 = 0; num1 <= magicNumber; num1++) {
        for (let num2 = 0; num2 <= magicNumber; num2++) {
            for (let num3 = 0; num3 <= magicNumber; num3++) {
                if (num1 + num2 + num3 === magicNumber) {
                    counter++
                }
            }
        }
    }
    console.log(counter)
}
combinations(["25"])