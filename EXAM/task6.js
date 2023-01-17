function task6(input) {
    let number = input[0];

    let firstNumber = Number(number[2]);
    let secondNumber = Number(number[1]);
    let thirdNumber = Number(number[0]);

    for (let i = 1; i <= firstNumber; i++) {
        for (let k = 1; k <= secondNumber; k++) {
            for (let l = 1; l <= thirdNumber; l++) {
                console.log(`${i} * ${k} * ${l} = ${i * k * l};`)
            }
        }
    }

}
task6(["222"])