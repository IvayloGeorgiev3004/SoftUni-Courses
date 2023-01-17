function oscars22(input) {
    let actorName = input[0];
    let startingPoints = Number(input[1]);
    let juryNumber = Number(input[2]);


    let finalPoints = 0;
    let pointsCounter = 0;
    for (let i = 2; i < input.length; i++) {
        if (i % 2 !== 0) {
            let juryName = input[i];
            let juryPointsPerChar = Number(juryName.length);
            let juryPoints = Number(input[i + 1]);
            pointsCounter += (juryPointsPerChar * juryPoints) / 2;

        }
        finalPoints = startingPoints + pointsCounter
        if (finalPoints > 1250.5) {
            console.log(`Congratulations, ${actorName} got a nominee for leading role with ${finalPoints.toFixed(1)}!`)
            break;
        }
    }


    if (finalPoints < 1250.5) {
        console.log(`Sorry, ${actorName} you need ${(1250.5 - finalPoints).toFixed(1)} more!`)
    }
}
oscars22(["Zahari Baharov",

    "205",

    "4",

    "Johnny Depp",

    "45",

    "Will Smith",

    "29",

    "Jet Lee",

    "10",

    "Matthew Mcconaughey",

    "39"])