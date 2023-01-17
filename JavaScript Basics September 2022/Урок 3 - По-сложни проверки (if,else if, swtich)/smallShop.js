function smallShop(input) {
    let product = input[0];
    let town = input[1];
    let price = Number(input[2]);

    switch (town) {
        case "Sofia":
            if (product === "coffee") {
                console.log(price * 0.5);
            } else if (product === "water") {
                console.log(price * 0.8);
            } else if (product === "beer") {
                console.log(price * 1.2);
            } else if (product === "sweets") {
                console.log(price * 1.45);
            } else {
                console.log(price * 1.6);
            }
            break;
        case "Plovdiv":
            if (product === "coffee") {
                console.log(price * 0.4);
            } else if (product === "water") {
                console.log(price * 0.7);
            } else if (product === "beer") {
                console.log(price * 1.15);
            } else if (product === "sweets") {
                console.log(price * 1.3);
            } else {
                console.log(price * 1.5);
            }
            break;
        case "Varna":
            if (product === "coffee") {
                console.log(price * 0.45);
            } else if (product === "water") {
                console.log(price * 0.7);
            } else if (product === "beer") {
                console.log(price * 1.1);
            } else if (product === "sweets") {
                console.log(price * 1.35);
            } else {
                console.log(price * 1.55);
            }
            break;
    }
}

smallShop(["water", "Plovdiv", "2"]);


function smallShop2(input) {

    let product = input[0];
    let town = input[1];
    let price = Number(input[2]);

    switch (product) {
        case "coffee":
            if (town === "Sofia") {
                console.log(price * 0.50)
            } else if (town === "Plovdiv") {
                console.log(price * 0.40)
            } else {
                console.log(price * 0.45)
            }
            break;
        case "water":
            if (town === "Sofia") {
                console.log(price * 0.80)
            } else {
                console.log(price * 0.70)
            }
            break;
        case "beer":
            if (town === "Sofia") {
                console.log(price * 1.20)
            } else if (town === "Plovdiv") {
                console.log(price * 1.15)
            } else {
                console.log(price * 1.10)
            }
            break;
        case "sweets":
            if (town === "Sofia") {
                console.log(price * 1.45)
            } else if (town === "Plovdiv") {
                console.log(price * 1.30)
            } else {
                console.log(price * 1.35)
            }
            break;
        case "peanuts":
            if (town === "Sofia") {
                console.log(price * 1.60)
            } else if (town === "Plovdiv") {
                console.log(price * 1.50)
            } else {
                console.log(price * 1.55)
            }
            break;

    }

}
smallShop2(["sweets", "Sofia", "2.23"])