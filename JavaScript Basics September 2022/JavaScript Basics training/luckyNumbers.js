function luckyNumbers(input) {
    let number = Number(input[0]);
    let magicNumber = "";

    for (let i = 1; i <= 9; i++) {
        for (let k = 1; k <= 9; k++) {
            for (let l = 1; l <= 9; l++) {
                for (let m = 1; m <= 9; m++) {
                    if ((i + k) <= number && (l + m) <= number) {
                        if ((i + k) === (l + m))
                            if (number % (i + k) === 0) {
                                magicNumber += `${i}${k}${l}${m} `
                            }
                    }
                }
            }
        }
    }
    console.log(`${magicNumber} `)

}
luckyNumbers([7])