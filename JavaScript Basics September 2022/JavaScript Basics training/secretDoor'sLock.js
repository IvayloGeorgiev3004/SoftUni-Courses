function secretDoorLock(input) {
    let number1 = Number(input[0])
    let number2 = Number(input[1])
    let number3 = Number(input[2])


    for (let i = 1; i <= number1; i++) {
        for (let j = 1; j <= number2; j++) {
            for (let k = 1; k <= number3; k++) {
                if (i % 2 === 0 && k % 2 === 0) {
                    if (j === 2 || j === 3 || j === 5 || j === 7) {
                        console.log(`${i} ${j} ${k}`)
                    }
                }
            }
        }
    }

}
secretDoorLock(['3', '5', '5'])
