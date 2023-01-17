function truckDriver(input) {
    let season = input[0]
    let kilometers = Number(input[1])

    let totalWithoutTax = 0;
    let totalPriceWithoutTax = 0;
    let totalWithTax = 0;
   

    if (kilometers <= 5000) {
        switch (season) {
            case "Spring": totalWithoutTax = kilometers * 0.75;
            case "Autumn": totalWithoutTax = kilometers * 0.75; break;
            case "Summer": totalWithoutTax = kilometers * 0.90; break;
            case "Winter": totalWithoutTax = kilometers * 1.05; break;

        }
    } else if (kilometers <= 10000) {
        switch (season) {
            case "Spring": totalWithoutTax = kilometers * 0.95;
            case "Autumn": totalWithoutTax = kilometers * 0.95; break;
            case "Summer": totalWithoutTax = kilometers * 1.10; break;
            case "Winter": totalWithoutTax = kilometers * 1.25; break;

        }
    } else if (kilometers > 10000) {
        totalWithoutTax = kilometers  * 1.45;
    }
    totalPriceWithoutTax = totalWithoutTax * 4
    totalWithTax = totalPriceWithoutTax * 0.90;

    console.log(totalWithTax.toFixed(2))


}
truckDriver(["Spring",
    "1600"])