function shiftsExam(input) {
    let k = Number(input[0])
    let l = Number(input[1])
    let m = Number(input[2])
    let n = Number(input[3])
    let counter = 0;

    for (let i = k; i <= 8; i++) {
        for (let i2 = 9; i2 >= l; i2--) {
            for (let i3 = m; i3 <= 8; i3++) {
                for (let i4 = 9; i4 >= n; i4--) {
                    if (i % 2 === 0 && i2 % 2 !== 0 && i3 % 2 === 0 && i4 % 2 !== 0) {
                        counter++
                        if (`${i}${i2}` === `${i3}${i4}` && counter <= 6) {
                            counter--
                            console.log(`Cannot change the same player.`)
                        } else if (counter <= 6) {
                            console.log(`${i}${i2} - ${i3}${i4}`)
                        }

                    }
                }
            }
        }
    }

}
shiftsExam(["6",
    "7", "5",
    "6"])


