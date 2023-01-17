function cake222(input) {
    let cakeDimension1 = Number(input[0])
    let cakeDimension2 = Number(input[1])
    let totalCakePieces = cakeDimension1 * cakeDimension2;
    let cakeEaten = 0;
    let index = 2;
    let piecesTaken = Number(input[index]);
    flag = false;

    while (piecesTaken !== "STOP") {
        totalCakePieces -= Number(piecesTaken);
        if (totalCakePieces <= 0) {
            flag = true;
            break;
        }
        index++
        piecesTaken = input[index];
    }

    if (flag === true) {
        console.log(`No more cake left! You need ${Math.abs(totalCakePieces)} pieces more.`)
    } else {
        console.log(`${totalCakePieces} pieces are left.`)
    }

}
cake222(["10",
    "2",
    "2",
    "4",
    "6",
    "STOP"])