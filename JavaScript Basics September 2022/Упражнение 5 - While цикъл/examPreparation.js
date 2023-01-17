function examPreparation(input) {
    let maxBadScore = Number(input[0]);

    let badScoreCounter = 0;
    let index = 1;
    let currentInput = input[index];
    let lastTaskName = ""
    let goodScoreCounter = 0;
    let sum = 0;
    let totalTask = 0

    while (badScoreCounter < maxBadScore) {

        if (index % 2 === 0) {
            sum += Number(currentInput);
            totalTask++
            if (Number(currentInput) <= 4) {
                badScoreCounter++
            } else {
                goodScoreCounter++
            }
        } else if (index % 2 !== 0) {
            if (currentInput !== "Enough") {
                lastTaskName = currentInput;
            }

        }

        if (currentInput === "Enough") {
            console.log(`Average score: ${(sum / totalTask).toFixed(2)}`)
            console.log(`Number of problems: ${totalTask}`)
            console.log(`Last problem: ${lastTaskName}`)
            break;
        }
        index++;
        currentInput = input[index];

    }
    if (badScoreCounter >= maxBadScore) {
        console.log(`You need a break, ${badScoreCounter} poor grades.`)

    }
}

examPreparation(["2", "Income", "3", "Game Info", "6", "Best Player", "4"])