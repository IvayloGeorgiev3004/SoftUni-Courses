function newHouse(input) {
    let flowerType = input[0];
    let flowerCount = Number(input[1]);
    let budget = Number(input[2]);

    let flowerPrice = 0;

    if (flowerType === "Roses") {
        flowerPrice = flowerCount * 5;
        if (flowerCount > 80) {
            flowerPrice = flowerPrice * 0.90
        }
    } else if (flowerType === "Dahlias") {
        flowerPrice = flowerCount * 3.8;
        if (flowerCount > 90) {
            flowerPrice = flowerPrice * 0.85
        }
    } else if (flowerType === "Tulips") {
        flowerPrice = flowerCount * 2.8;
        if (flowerCount > 80) {
            flowerPrice = flowerPrice * 0.85
        }

    } else if (flowerType === "Narcissus") {
        flowerPrice = flowerCount * 3;
        if (flowerCount < 120) {
            flowerPrice = flowerPrice * 1.15
        }

    } else if (flowerType === "Gladiolus") {
        flowerPrice = flowerCount * 2.50;
        if (flowerCount < 80) {
            flowerPrice = flowerPrice * 1.20
        }

    }
    if (budget >= flowerPrice) {
        console.log(`Hey, you have a great garden with ${flowerCount} ${flowerType} and ${(budget - flowerPrice).toFixed(2)} leva left.`)
    } else if (flowerPrice >= budget) {
        console.log(`Not enough money, you need ${(flowerPrice - budget).toFixed(2)} leva more.`)
    }
}
newHouse(["Roses", "55", "250"])   