function dishwasher(input) {
    let totalWashDetergent = 750 * Number(input[0]);
    let totalLeft = 0;
    let index = 1;
    let currentInput = input[index];
    let potsDetergent = 0;
    let dishesDetergent = 0;
    let dishCounter = 0;
    let potCounter = 0;

    while (currentInput !== "End") {
        if (index % 3 === 0) {
            potsDetergent += 15 * Number(input[index])
            potCounter += Number(input[index])
        } else {
            dishesDetergent += 5 * Number(input[index])
            dishCounter += Number(input[index])
        }
        index++
        currentInput = input[index];
        totalLeft = totalWashDetergent - dishesDetergent - potsDetergent

        if (totalLeft < 0) {
            break;
        }
    }


    if (totalLeft >= 0) {
        console.log(`Detergent was enough!`)
        console.log(`${dishCounter} dishes and ${potCounter} pots were washed.`)
        console.log(`Leftover detergent ${totalLeft} ml.`)

    } else {
        console.log(`Not enough detergent, ${(dishesDetergent + potsDetergent) - totalWashDetergent} ml. more necessary!`)
    }

}
dishwasher([1,
    10,
    15,
    10,
    12,
    13,
    30,])