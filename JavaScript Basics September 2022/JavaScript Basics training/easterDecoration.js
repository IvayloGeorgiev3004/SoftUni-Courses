function easterDecoration(input) {
    let basketPrice = 1.5;
    let wreathPrice = 3.8;
    let chocolateBunnyPrice = 7;
    let clientPrice = 0;
    let itemCounter = 0;
    let totalPrice = 0;

    let totalClients = Number(input[0]);
    let index = 1;
    let currentInput = input[index];

    for (let i = 0; i < totalClients; i++) {
        while (currentInput !== "Finish") {
            let currentProduct = input[index];
            itemCounter++
            switch (currentInput) {
                case "basket": clientPrice += basketPrice; break;
                case "wreath": clientPrice += wreathPrice; break;
                case "chocolate bunny": clientPrice += chocolateBunnyPrice; break;

            }
            index++
            currentProduct = input[index]
            currentInput = input[index]
        }
        if (itemCounter % 2 === 0) {
            clientPrice *= 0.80
        }
        console.log(`You purchased ${itemCounter} items for ${(clientPrice).toFixed(2)} leva.`)
        totalPrice += clientPrice;
        index++
        currentInput = input[index]
        clientPrice = 0;
        itemCounter = 0
    }
    console.log(`Average bill per client is: ${(totalPrice / totalClients).toFixed(2)} leva.`)
}
easterDecoration([
    "2",
    "basket",
    "wreath",
    "chocolate bunny",
    "Finish",
    "wreath",
    "chocolate bunny",
    "Finish",
]);
