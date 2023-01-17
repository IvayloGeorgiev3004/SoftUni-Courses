function aluminumJoinery22(input) {
    let joineryCount = Number(input[0]);
    let joineryType = input[1];
    let delivery = input[2];
    let deliveryPrice = 60;

    let price = 0;


    if (joineryType === "90X130") {
        price = 110;
        if (joineryCount > 60) {
            price *= 0.92;
        } else if (joineryCount > 30) {
            price *= 0.95;
        }
    } else if (joineryType === "100X150") {
        price = 140;
        if (joineryCount > 80) {
            price *= 0.90;
        } else if (joineryCount > 40) {
            price *= 0.94;
        }
    } else if (joineryType === "130X180") {
        price = 190;
        if (joineryCount > 50) {
            price *= 0.88;
        } else if (joineryCount > 20) {
            price *= 0.93;
        }
    } else if (joineryType === "200X300") {
        price = 250;
        if (joineryCount > 50) {
            price *= 0.86;
        } else if (joineryCount > 25) {
            price *= 0.91;
        }
    }
    price *= joineryCount;

    if (joineryCount < 10) {
        console.log(`Invalid order`)
    } else if (delivery === "With delivery") {
        price += deliveryPrice
        if (joineryCount > 99) {
            price *= 0.96
        }
        console.log(`${price.toFixed(2)} BGN`)
    } else if (delivery === "Without delivery") {
        if (joineryCount > 99) {
            price *= 0.96
        }
        console.log(`${price.toFixed(2)} BGN`)
    }
}
aluminumJoinery22(["105",
    "100X150",
    "With delivery"])


