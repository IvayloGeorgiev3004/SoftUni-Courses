function histogram(input) {
    let totalNumbers = Number(input[0]);

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;


    let numbersCount = 0;
    for (let index = 1; index <= totalNumbers; index++) {

        let number = Number(input[index]);

        if (number <= 199) {
            p1++
        } else if (number <= 399) {
            p2++;
        } else if (number <= 599) {
            p3++;
        } else if (number <= 799) {
            p4++;
        } else if (number >= 800) {
            p5++;
        }

    }
    console.log(`${(p1 / totalNumbers * 100).toFixed(2)}%`)
    console.log(`${(p2 / totalNumbers * 100).toFixed(2)}%`)
    console.log(`${(p3 / totalNumbers * 100).toFixed(2)}%`)
    console.log(`${(p4 / totalNumbers * 100).toFixed(2)}%`)
    console.log(`${(p5 / totalNumbers * 100).toFixed(2)}%`)
}
histogram(["14", "53", "7", "56", "180", "450", "920", "12", "7", "150", "250", "680", "2", "600", "200"])