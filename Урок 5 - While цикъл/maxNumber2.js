function maxNumber(input) {
    let index = 0;
    let currentInput = input[index];
    let currentNumber = 0;
    let maxNumber = Number(input[0])

    while (currentInput !== "Stop") {
        currentNumber = Number(input[index]);

        index++
        currentInput = input[index]


        if (maxNumber < currentNumber) {
            maxNumber = currentNumber

        }


    }
    console.log(maxNumber)
}
maxNumber(["-10", "20", "-30", "Stop"])