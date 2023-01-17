function gameOfIntervals(input) {
    let totalPlays = Number(input[0]);

    let currentNumber = 0;
    let result = 0;

    let firstCounter = 0;
    let secondCounter = 0;
    let thirdCounter = 0;
    let forthCounter = 0;
    let fifthCounter = 0;
    let invalidNumbersCounter = 0;

    for (let i = 1; i <= totalPlays; i++) {
        currentNumber = Number(input[i])

        if (currentNumber >= 0 && currentNumber <= 9) {
            firstCounter++
            result += (currentNumber * 0.20);
        } else if (currentNumber >= 10 && currentNumber <= 19) {
            secondCounter++
            result += (currentNumber * 0.30);
        } else if (currentNumber >= 20 && currentNumber <= 29) {
            thirdCounter++
            result += (currentNumber * 0.40);
        } else if (currentNumber >= 30 && currentNumber <= 39) {
            forthCounter++
            result += 50;
        } else if (currentNumber >= 40 && currentNumber <= 50) {
            fifthCounter++
            result += 100;
        } else if (currentNumber < 0) {
            invalidNumbersCounter++
            result /= 2
        } else if (currentNumber > 50) {
            invalidNumbersCounter++
            result /= 2
        }

    }

    console.log(result.toFixed(2))
    console.log(`From 0 to 9: ${((firstCounter * 100) / totalPlays).toFixed(2)}%`)
    console.log(`From 10 to 19: ${((secondCounter * 100) / totalPlays).toFixed(2)}%`)
    console.log(`From 20 to 29: ${((thirdCounter * 100) / totalPlays).toFixed(2)}%`)
    console.log(`From 30 to 39: ${((forthCounter * 100) / totalPlays).toFixed(2)}%`)
    console.log(`From 40 to 50: ${((fifthCounter * 100) / totalPlays).toFixed(2)}%`)
    console.log(`Invalid numbers: ${((invalidNumbersCounter * 100) / totalPlays).toFixed(2)}%`)


}
gameOfIntervals(['10',
    '43',
    '57',
    '-12',
    '23',
    '12',
    '0',
    '50',
    '40',
    '30',
    '20'])