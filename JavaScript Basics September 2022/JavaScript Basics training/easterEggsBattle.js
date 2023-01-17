function easterEggsBattle(input) {
    let playerOneEggs = Number(input[0]);
    let playerTwoEggs = Number(input[1]);
    let flag = false;

    let index = 2;
    let currentInput = input[index];

    while (currentInput !== "End") {
        if (currentInput === "one") {
            playerTwoEggs--;
        } else if (currentInput === "two") {
            playerOneEggs--;
        }
        if (playerOneEggs === 0 || playerTwoEggs === 0) {
            flag = true;
            break;
        }
        index++
        currentInput = input[index];
    }
    if (flag === true) {
        if (playerOneEggs === 0) {
            console.log(`Player one is out of eggs. Player two has ${playerTwoEggs} eggs left.`)
        } else if (playerTwoEggs === 0) {
            console.log(`Player two is out of eggs. Player one has ${playerOneEggs} eggs left.`)
        }

    } else {
        console.log(`Player one has ${playerOneEggs} eggs left.`)
        console.log(`Player two has ${playerTwoEggs} eggs left.`)
    }

}
 easterEggsBattle([2,
    6,
    'one',
    'two',
    'two'])