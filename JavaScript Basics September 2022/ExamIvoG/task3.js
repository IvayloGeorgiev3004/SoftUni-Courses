function task3(input) {
    let peopleCounter = Number(input[0]);
    let season = input[1];

    let price = 0;

    let totalPrice = 0;

    switch (season) {
        case "spring":
            if (peopleCounter <= 5) {
                price = 50.00;
            } else {
                price = 48.00;
            }
            break;
        case "summer":
            if (peopleCounter <= 5) {
                price = 48.50;
            } else {
                price = 45.00;
            }
            break;
        case "autumn":
            if (peopleCounter <= 5) {
                price = 60.00;
            } else {
                price = 49.50;
            }
            break;
        case "winter":
            if (peopleCounter <= 5) {
                price = 86.00;
            } else {
                price = 85.00;
            }
            break;
    }
    if (season === "summer") {
        price *= 0.85
    } else if (season === "winter") {
        price *= 1.08
    }
    totalPrice = price * peopleCounter
    console.log(`${totalPrice.toFixed(2)} leva.`)

}
task3(["20",
    "winter"])

