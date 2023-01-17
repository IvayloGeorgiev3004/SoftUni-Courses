function fruitShop(input) {
    let fruit = input[0];
    let dayOfWeek = input[1];
    let fruitCount = Number(input[2]);

    let fruitPrice = 0;

    switch (dayOfWeek) {
        case "Monday":
        case "Tuesday":
        case "Wednesday":
        case "Thursday":
        case "Friday":
            if (fruit === "banana") {
                fruitPrice = fruitCount * 2.50;
            } else if (fruit === "apple") {
                fruitPrice = fruitCount * 1.20;
            } else if (fruit === "orange") {
                fruitPrice = fruitCount * 0.85;
            } else if (fruit === "grapefruit") {
                fruitPrice = fruitCount * 1.45;
            } else if (fruit === "kiwi") {
                fruitPrice = fruitCount * 2.70;
            } else if (fruit === "pineapple") {
                fruitPrice = fruitCount * 5.50;
            } else if (fruit === "grapes") {
                fruitPrice = fruitCount * 3.85;
            }
            break;
        case "Saturday":
        case "Sunday":
            if (fruit === "banana") {
                fruitPrice = fruitCount * 2.70;
            } else if (fruit === "apple") {
                fruitPrice = fruitCount * 1.25;
            } else if (fruit === "orange") {
                fruitPrice = fruitCount * 0.90;
            } else if (fruit === "grapefruit") {
                fruitPrice = fruitCount * 1.60;
            } else if (fruit === "kiwi") {
                fruitPrice = fruitCount * 3.00;
            } else if (fruit === "pineapple") {
                fruitPrice = fruitCount * 5.60;
            } else if (fruit === "grapes") {
                fruitPrice = fruitCount * 4.20;
            } else
                break;
    }
    if (fruitPrice > 0) {
        console.log(fruitPrice.toFixed(2));
    } else {
        console.log('error')
    }
}
fruitShop(["tomato", "Monday", "0.5"])