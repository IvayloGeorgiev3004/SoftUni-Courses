function tennisRankList(input) {

    let tournamentsPlayed = Number(input[0]);
    let startingPoints = Number(input[1]);

    let stage = 0;
    let pointsCounter = 0;
    let finalPoints = 0;
    let averagePoints = 0;
    let tournamentsWon = 0;
    let percentage = 0;

    for (let i = 2; i < input.length; i++) {
        stage = input[i];
        switch (stage) {
            case "W":
                pointsCounter += 2000;
                tournamentsWon++; break;
            case "F": pointsCounter += 1200; break;
            case "SF": pointsCounter += 720; break;
        }


    }
    finalPoints = startingPoints + pointsCounter;
    averagePoints = Math.floor(pointsCounter / tournamentsPlayed);
    percentage = ((tournamentsWon / tournamentsPlayed) * 100).toFixed(2)

    console.log(`Final points: ${finalPoints}`)
    console.log(`Average points: ${averagePoints}`)
    console.log(percentage + "%")



}
tennisRankList([7,
    1200,
    "SF",
    "F",
    "W",
    "F",
    "W",
    "SF",
    "W"])