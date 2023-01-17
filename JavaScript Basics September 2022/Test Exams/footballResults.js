function footballResults(input) {
    let firstMatch = input[0];
    let secondMatch = input[1];
    let thirdMatch = input[2];

    let leftResult1 = Number(firstMatch[0]);
    let rightResult1 = Number(firstMatch[2]);

    let leftResult2 = Number(secondMatch[0]);
    let rightResult2 = Number(secondMatch[2]);

    let leftResult3 = Number(thirdMatch[0]);
    let rightResult3 = Number(thirdMatch[2]);

    let wonCounter = 0;
    let lostCounter = 0;
    let drawCounter = 0;

    if (leftResult1 > rightResult1) {
        wonCounter += 1;
    } else if (leftResult1 < rightResult1) {
        lostCounter += 1;
    } else {
        drawCounter += 1;
    }

    if (leftResult2 > rightResult2) {
        wonCounter += 1;
    } else if (leftResult2 < rightResult2) {
        lostCounter += 1;
    } else {
        drawCounter += 1;
    }

    if (leftResult3 > rightResult3) {
        wonCounter += 1;
    } else if (leftResult3 < rightResult3) {
        lostCounter += 1;
    } else {
        drawCounter += 1;
    }
    console.log(`Team won ${wonCounter} games.`)
    console.log(`Team lost ${lostCounter} games.`)
    console.log(`Drawn games: ${drawCounter}`)

}
footballResults(["3:1", "0:2", "0:0"])