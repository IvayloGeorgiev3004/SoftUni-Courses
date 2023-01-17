function profitMonet(input) {
    let coins1 = Number(input[0]);
    let coins2 = Number(input[1]);
    let coins5 = Number(input[2]);
    let neededSum = Number(input[3]);

    for (let one = 0; one <= coins1; one++) {
        for (let two = 0; two <= coins2; two++) {
            for (let five = 0; five <= coins5; five++) {
                if (((one * 1) + (two * 2) + (five * 5)) === neededSum) {
                    console.log(`${one} * 1 lv. + ${two} * 2 lv. + ${five} * 5 lv. = ${neededSum} lv.`)
                }
            }
        }
    }

}
profitMonet([5, 3, 1, 7])