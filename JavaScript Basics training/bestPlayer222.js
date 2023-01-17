function bestPlayer222(input) {
    let index = 0;
    let currentInput = input[index];
    let playerName = ""
    let goalsScored = 0;
    let maxGoals = Number.MIN_SAFE_INTEGER;
    let bestPlayer = ""

    while (currentInput !== "END") {
        playerName = input[index]
        index++
        goalsScored = Number(input[index]);

        if (goalsScored > maxGoals) {
            bestPlayer = playerName;
            maxGoals = goalsScored;
        }
        if (maxGoals >= 10) {
            break;
        }
        index++
        currentInput = input[index];
    }

    console.log(`${bestPlayer} is the best player!`)
    if (maxGoals >= 3) {
        console.log(`He has scored ${maxGoals} goals and made a hat-trick !!!`)
    } else {
        console.log(`He has scored ${maxGoals} goals.`)
    }


}
bestPlayer222([`Rooney`,
    1,
    `Junior`,
    2,
    `Paolinio`,
    2,
    `END`
])