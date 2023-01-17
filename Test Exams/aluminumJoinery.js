function aluminumJoinery(input) {
    let count = Number(input[0]);
    let size = input[1];
    let delivery = input[2];

    let price = 0;

    switch (size) {
        case "90X130":
            price = 110;
            if (count > 30 && count <= 60) {
                price = (count * price) * 0.95;
            } else if (count > 60) {
                price = (count * price) * 0.92;
            } else price = count * price;

            break;
        case "100X150":
            price = 140;
            if (count > 40 && count <= 80) {
                price = (count * price) * 0.94;
            } else if (count > 80) {
                price = (count * price) * 0.90;
            } else price = count * price;
            break;
        case "130X180":
            price = 190;
            if (count > 20 && count <= 50) {
                price = (count * price) * 0.93;
            } else if (count > 50) {
                price = (count * price) * 0.88;
            } else price = count * price;
            break;
        case "200X300":
            price = 250;
            if (count > 25 && count <= 50) {
                price = (count * price) * 0.91;
            } else if (count > 50) {
                price = (count * price) * 0.86;
            } else price = count * price;
    }

    if (delivery === "With delivery") {
        price = price + 60;
    }

    if (count > 90) {
        price = price * 0.96;
    }
    if (count < 10) {
        console.log("Invalid order");
    } else {
        console.log(price.toFixed(2) + " BGN");
    }
}
aluminumJoinery(["20",
    "90X130",
    "With delivery"])


