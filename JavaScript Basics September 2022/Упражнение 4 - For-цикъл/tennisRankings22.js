function tennisRankings22(input) {
    let tournamentsPlayed = Number(input[0]);
    let startingPoints = Number(input[1]);

    let pointsCounter = 0;
    let phase = 0;
    let winCounter = 0;

    for (let i = 2; i < input.length; i++) {
        phase = input[i];
        switch (phase) {
            case "F": pointsCounter += 1200; break;
            case "SF": pointsCounter += 720; break;
            case "W": pointsCounter += 2000; winCounter++; break;

        }
    }

    console.log(`Final points: ${pointsCounter + startingPoints}`);
    console.log(`Average points: ${Math.floor(pointsCounter / tournamentsPlayed)}`);
    console.log(((winCounter / tournamentsPlayed) * 100).toFixed(2) + "%");

}
tennisRankings22(["5",

    "1400",

    "F",

    "SF",

    "W",

    "W",

    "SF"])