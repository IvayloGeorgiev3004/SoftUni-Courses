function easterCompetition(input) {
    let totalChefs = Number(input[0]);
    let index = 1;
    let currentName = input[index]
    index++
    let currentScore = Number(input[index]);
    let currentInput = input[index]
    let totalScore = 0;
    let currentBestChef = ""
    let bestScore = Number.MIN_SAFE_INTEGER;
    let chefsCounter = 0;
    let bestCounter = 0;
    for (let i = 1; i <= totalChefs; i++) {
        while (currentInput !== "Stop") {
            totalScore += currentScore
            if (totalScore > bestScore) {
                bestScore = totalScore
                currentBestChef = currentName
                bestCounter++

            }

            index++
            currentScore = Number(input[index])
            currentInput = input[index]

        }


        console.log(`${currentName} has ${totalScore} points.`)
        if (chefsCounter === 0) {
            console.log(`${currentBestChef} is the new number 1!`)
        } else if (chefsCounter > 0) {
            if (currentBestChef === currentName) {
                console.log(`${currentBestChef} is the new number 1!`)
            }
        }
        chefsCounter++
        totalScore = 0;
        index++
        currentName = input[index]
        currentInput = input[index]
        index++
        currentScore = Number(input[index])

    }

    console.log(`${currentBestChef} won competition with ${bestScore} points!`)

}
easterCompetition(["2",
    "Chef Angelov",
    "9",
    "9",
    "9",
    "Stop",
    "Chef Rowe",
    "10",
    "10",
    "10",
    "10",
    "Stop"])
