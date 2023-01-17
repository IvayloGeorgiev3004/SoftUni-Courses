function aluminumJoinery2222(input) {
    let joineryCount = Number(input[0]);
    let joineryType = input[1];
    let delivery = input[2];
    let deliveryPrice = 60;

    let price = 0;

    if (joineryCount <= 10) {
        console.log(`Invalid order`);
    } else {
        switch (joineryType) {
            case "90X130": price = 110;
                if (joineryCount > 60) {
                    price *= 0.92
                } else if (joineryCount > 30) {
                    price *= 0.95
                } else {
                    price = price
                } break;
            case "100X150": price = 140;
                if (joineryCount > 80) {
                    price *= 0.90
                } else if (joineryCount > 40) {
                    price *= 0.94
                } else {
                    price = price
                } break;
            case "130X180": price = 190;
                if (joineryCount > 50) {
                    price *= 0.88
                } else if (joineryCount > 20) {
                    price *= 0.93
                } else {
                    price = price
                } break;
            case "200X300": price = 250;
                if (joineryCount > 50) {
                    price *= 0.86
                } else if (joineryCount > 25) {
                    price *= 0.91
                } else {
                    price = price
                } break;
        }
    }
    price *= joineryCount

    if (joineryCount > 10) {
        switch (delivery) {
            case "With delivery":
                price += deliveryPrice;
                if (joineryCount > 99) {
                    price *= 0.96
                    console.log(`${price.toFixed(2)} BGN`)
                }
                break;
            case "Without delivery":
                if (joineryCount > 99) {
                    price *= 0.96
                    console.log(`${price.toFixed(2)} BGN`)
                }
                console.log(`${price.toFixed(2)} BGN`)
                break;
        }
    }
}
aluminumJoinery2222()