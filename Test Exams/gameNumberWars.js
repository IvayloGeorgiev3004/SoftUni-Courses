function gameNumberWars(input) {
    let playerOne = input[0];
    let playerTwo = input[1];
    let index = 2;
    let currentInput = input[index]
    let playerOneCard = Number(input[index]);
    let playerOnePoints = 0;
    index++;
    let playerTwoCard = Number(input[index]);
    let playerTwoPoints = 0;

    while (currentInput !== "End of game") {
        if (playerOneCard > playerTwoCard) {
            playerOnePoints += playerOneCard - playerTwoCard;
        } else if (playerTwoCard > playerOneCard) {
            playerTwoPoints += playerTwoCard - playerOneCard;
        } else if (playerOneCard === playerTwoCard) {
            console.log(`Number wars!`)
            playerOneCard = Number(input[index + 1]);
            playerTwoCard = Number(input[index + 2]);
            if (playerOneCard > playerTwoCard) {
                console.log(`${playerOne} is winner with ${playerOnePoints} points`)
                break;
            } else if (playerTwoCard > playerOneCard) {
                console.log(`${playerTwo} is winner with ${playerTwoPoints} points`)
                break;
            }
        }
        index++
        currentInput = input[index];
        playerOneCard = Number(input[index]);
        index++
        playerTwoCard = Number(input[index]);
    }

    if (currentInput === "End of game") {
        console.log(`${playerOne} has ${playerOnePoints} points`)
        console.log(`${playerTwo} has ${playerTwoPoints} points`)

    }
}
gameNumberWars(["Aleks",
"Georgi",
"4",
"5",
"3",
"2",
"4",
"3",
"4",
"4","5",
"2"])
