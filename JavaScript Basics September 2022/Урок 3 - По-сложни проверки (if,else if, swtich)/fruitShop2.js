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
                console.log(fruitPrice.toFixed(2));
            } else if (fruit === "apple") {
                fruitPrice = fruitCount * 1.20;
                console.log(fruitPrice.toFixed(2));
            } else if (fruit === "orange") {
                fruitPrice = fruitCount * 0.85;
                console.log(fruitPrice.toFixed(2));
            } else if (fruit === "grapefruit") {
                fruitPrice = fruitCount * 1.45;
                console.log(fruitPrice.toFixed(2));
            } else if (fruit === "kiwi") {
                fruitPrice = fruitCount * 2.70;
                console.log(fruitPrice.toFixed(2));
            } else if (fruit === "pineapple") {
                fruitPrice = fruitCount * 5.50;
                console.log(fruitPrice.toFixed(2));
            } else if (fruit === "grapes") {
                fruitPrice = fruitCount * 3.85;
                console.log(fruitPrice.toFixed(2));
            } else {
                console.log("error")
            }
            break;
        case "Saturday":
        case "Sunday":
            if (fruit === "banana") {
                fruitPrice = fruitCount * 2.70;
                console.log(fruitPrice.toFixed(2));
            } else if (fruit === "apple") {
                fruitPrice = fruitCount * 1.25;
                console.log(fruitPrice.toFixed(2));
            } else if (fruit === "orange") {
                fruitPrice = fruitCount * 0.90;
                console.log(fruitPrice.toFixed(2));
            } else if (fruit === "grapefruit") {
                fruitPrice = fruitCount * 1.60;
                console.log(fruitPrice.toFixed(2));
            } else if (fruit === "kiwi") {
                fruitPrice = fruitCount * 3.00;
                console.log(fruitPrice.toFixed(2));
            } else if (fruit === "pineapple") {
                fruitPrice = fruitCount * 5.60;
                console.log(fruitPrice.toFixed(2));
            } else if (fruit === "grapes") {
                fruitPrice = fruitCount * 4.20;
                console.log(fruitPrice.toFixed(2));
            } else {
                console.log('error');
            }
            break;
        default:
            console.log("error")
    }
}
fruitShop(["grapes", "Saturday", "0.5"])