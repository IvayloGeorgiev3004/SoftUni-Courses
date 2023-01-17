function dartsWorldChampionship(input) {
    let playerNamer = input[0];
    let startingPoints = 301;

    let pointsModifier = 0;
    let pointsCounter = 0;
    let numberPoints = 0;

    let unsuccessfulShots = 0;
    let successfulShots = 0;
    for (let index = 1; index < input.length; index++) {
        if (index % 2 !== 0) {
            pointsModifier = input[index];
            numberPoints = Number(input[index + 1])
            switch (pointsModifier) {
                case "Triple": pointsCounter = numberPoints * 3; break;
                case "Double": pointsCounter = numberPoints * 2; break;
                case "Single": pointsCounter = numberPoints * 1; break;
            }
            if (pointsModifier === "Retire") {
                console.log(`${playerNamer} retired after ${unsuccessfulShots} unsuccessful shots.`);
                break;
            }

            startingPoints -= pointsCounter

            if (startingPoints >= 0) {
                successfulShots++
            }
            if (startingPoints < 0) {
                unsuccessfulShots++
                startingPoints = startingPoints + pointsCounter
            }
        }

    }
    if (pointsModifier != "Retire") {
        console.log(`${playerNamer} won the leg with ${successfulShots} shots.`)
    }
}
dartsWorldChampionship(["Michael van Gerwen",
    "Triple",
    "20",
    "Triple",
    "19",
    "Double",
    "10",
    "Single",
    "3",
    "Single",
    "1",
    "Triple",
    "20",
    "Triple",
    "20",
    "Double",
    "20"])