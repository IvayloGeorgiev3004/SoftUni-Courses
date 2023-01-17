function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fisherMen = Number(input[2]);

    let shipCost = 0;

    switch (season) {
        case "Spring":
            shipCost = 3000;
            if (fisherMen <= 6) {
                shipCost = shipCost * 0.90;
            } else if (fisherMen > 6 && fisherMen <= 11) {
                shipCost = shipCost * 0.85;
            } else {
                shipCost = shipCost * 0.75;
            }
            break;
        case "Summer":
        case "Autumn":
            shipCost = 4200;
            if (fisherMen <= 6) {
                shipCost = shipCost * 0.90;
            } else if (fisherMen > 6 && fisherMen <= 11) {
                shipCost = shipCost * 0.85;
            } else {
                shipCost = shipCost * 0.75;
            }
            break;
        case "Winter":
            shipCost = 2600;
            if (fisherMen <= 6) {
                shipCost = shipCost * 0.90;
            } else if (fisherMen > 6 && fisherMen <= 11) {
                shipCost = shipCost * 0.85;
            } else {
                shipCost = shipCost * 0.75;
            }
            break;
    }
    if (season !== "Autumn"){
        if    (fisherMen % 2 === 0){
            shipCost = shipCost * 0.95
    }
}
if (budget >= shipCost){
    console.log(`Yes! You have ${(budget - shipCost).toFixed(2)} leva left.`)
} else {
    console.log(`Not enough money! You need ${(shipCost - budget).toFixed(2)} leva.`)
}
}
fishingBoat(["2000", "Winter", "13"])