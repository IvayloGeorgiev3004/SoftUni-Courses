function touristShop(input) {
    let budget = Number(input[0]);
    let index = 1;
    let currentInput = input[index];
    let promoCounter = 0;
    let moneySpend = 0;
    let currentPrice = 0;
    let productCounter = 0;

    while (currentInput !== "Stop") {
        productCounter++
        index++
        promoCounter++
        currentPrice = Number(input[index])
        if (promoCounter >= 3) {
            currentPrice = currentPrice / 2
            moneySpend += currentPrice
            promoCounter = 0;
        } else {
            moneySpend += currentPrice
        }
        if (moneySpend > budget) {
            console.log(`You don't have enough money!`)
            console.log(`You need ${((moneySpend - budget).toFixed(2))} leva!`)
            break;
        }
        index++
        currentInput = input[index]
    }
    if (budget > moneySpend) {
        console.log(`You bought ${productCounter} products for ${moneySpend.toFixed(2)} leva.`)
    }

}
touristShop(["54",
    "Thermal underwear",
    "24",
    "Sunscreen",
    "45"])

