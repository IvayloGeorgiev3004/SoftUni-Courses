function addBags(input) {
    let baggage20kgTax = Number(input[0]);
    let baggageKg = Number(input[1]);
    let tripDays = Number(input[2]);
    let baggages = Number(input[3]);

    let totalPrice = 0;

    if (baggageKg < 10) {
        totalPrice += baggage20kgTax * 0.20;
    } else if (baggageKg <= 20) {
        totalPrice += baggage20kgTax * 0.50
    } else {
        totalPrice += baggage20kgTax
    }
    if (tripDays > 30) {
        totalPrice *= 1.10
    } else if (tripDays >= 7) {
        totalPrice *= 1.15
    } else {
        totalPrice *= 1.40
    }

    totalPrice *= baggages
    console.log(`The total price of bags is: ${totalPrice.toFixed(2)} lv.`)

}
addBags(["63.80",
"23",
"3",
"1"])