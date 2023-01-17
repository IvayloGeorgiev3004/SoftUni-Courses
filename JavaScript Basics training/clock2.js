function clock2() {

    for (let i = 0; i <= 23; i++) {
        for (let l = 0; l <= 59; l++) {
            for (let m = 0; m <= 59; m++)
                console.log(`${i} : ${l} : ${m}`)
        }
    }

}
clock2();