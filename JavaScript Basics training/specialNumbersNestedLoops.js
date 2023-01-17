function specialNumbersNestedLoops(input) {
    let specialNumber = Number(input[0]);
    let string = ""

    for (let i = 1; i <= 9; i++) {
        for (let k = 1; k <= 9; k++) {
            for (let l = 1; l <= 9; l++) {
                for (let m = 1; m <= 9; m++) {
                    if (specialNumber % i === 0 && specialNumber % k === 0 && specialNumber % l === 0 && specialNumber % m === 0) {
                        string += `${i}${k}${l}${m} `
                    }
                }
            }
        }
    }
    console.log(string.trim())
}
specialNumbersNestedLoops(["3"])