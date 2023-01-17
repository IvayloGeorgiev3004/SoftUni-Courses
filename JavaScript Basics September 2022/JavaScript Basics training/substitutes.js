function substitutes(input) {

    let k = Number(input[0])
    let l = Number(input[1])
    let m = Number(input[2])
    let n = Number(input[3])

    let flag = false;
    let counter = 0;

    for (let i = k; i <= 8; i++) {
        if (flag === true) {
            break;
        }
        for (let i2 = 9; i2 >= l; i2--) {
            if (flag === true) {
                break;
            }
            for (let i3 = m; i3 <= 8; i3++) {
                if (flag === true) {
                    break;
                }
                for (let i4 = 9; i4 >= n; i4--) {
                    if (flag === true) {
                        break;
                    }

                    if (i % 2 === 0 && i2 % 2 !== 0 && i3 % 2 === 0 && i4 % 2 !== 0) {
                        if (`${i} + ${i2}` === `${i3} + ${i4}`) {
                            console.log(`Cannot change the same player.`)
                        } else {
                            counter++
                            console.log(`${i}${i2} - ${i3}${i4}`);
                        }
                        if (counter >= 6) {
                            flag = true
                            break;
                        }
                    }
                }
            }

        }
    }



}
substitutes(["6",
    "7", "5",
    "6"])