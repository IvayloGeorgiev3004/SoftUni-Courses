function tournamentsChristmas(input) {
    let totalTournamentDays = Number(input[0]);
    let index = 1;
    let currentInput = input[index]
    let winOrLoose = ""
    let winsCounter = 0;
    let lostCounter = 0;
    let totalWinsCounter = 0;
    let totalLostCounter = 0;
    let winSum = 20;
    let totalSum = 0;
    let finalSum = 0;

    for (let currentDay = 1; currentDay <= totalTournamentDays; currentDay++) {
        while (currentInput !== "Finish") {
            index++
            currentInput = input[index]
            winOrLoose = input[index]
            switch (winOrLoose) {
                case "win": winsCounter++; totalWinsCounter++; totalSum += winSum; break;
                case "lose": lostCounter++; totalLostCounter++; break;
                default: continue;
            }
        }
        if (winsCounter > lostCounter) {
            totalSum *= 1.10
        }
        finalSum += totalSum
        totalSum = 0;
        winsCounter = 0;
        lostCounter = 0;

        index++
        currentInput = input[index]
    }
    if (totalWinsCounter > totalLostCounter) {
        finalSum *= 1.20
        console.log(`You won the tournament! Total raised money: ${finalSum.toFixed(2)}`)
    } else {
        console.log(`You lost the tournament! Total raised money: ${finalSum.toFixed(2)}`);
    }

}
tournamentsChristmas(["3",
    "darts",
    "lose",
    "handball",
    "lose",
    "judo",
    "win",
    "Finish",
    "snooker",
    "lose",
    "swimming",
    "lose",
    "squash",
    "lose",
    "table tennis",
    "win",
    "Finish",
    "volleyball",
    "win",
    "basketball",
    "win",
    "Finish"])