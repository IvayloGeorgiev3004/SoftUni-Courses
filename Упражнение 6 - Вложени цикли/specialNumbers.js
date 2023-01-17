function specialNumbers(input) {
    let string = ""
    let i = 1
    let j = 1
    let k = 1
    let l = 1

    let number = Number(input[0]);
    for (i = 1; i <= 9; i++) {
        for (j = 0; j <= 9; j++) {
            for (k = 0; k <= 9; k++) {
                for (l = 0; l <= 9; l++) {
                    if (number % i === 0 && number % j === 0 && number % k === 0 && number % l === 0) {
                        string += `${i}${j}${k}${l} `
                    }
                }

            }

        }

    }
    console.log(string)
}
specialNumbers(["3"])