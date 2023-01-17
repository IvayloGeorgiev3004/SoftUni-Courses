function fruitShop(input) {
 
    let fruit = input[0];
    let day = input[1];
    let count = Number(input[2]);
    let price = 0;
 
 
    if (day !== "Monday" && day !== "Tuesday" && day !== "Wednesday" && day !== "Thursday" && day !== "Friday" && day !== "Saturday" && day !== "Sunday") {
        console.log("error");
    }
 
    else if (fruit !== "banana" && fruit !== "apple" && fruit !== "orange" && fruit !== "grapefruit" && fruit !== "kiwi" && fruit !== "pineapple" && fruit !== "grapes") {
        console.log("error");
    }
 
    if (fruit === "orange") {
        if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
            price = count * 0.85;
            console.log(price.toFixed(2))
        }
        else if (day === "Saturday" || day === "Sunday") {
            price = count * 0.90;
            console.log(price.toFixed(2));
        }
    }
 
    if (fruit === "banana") {
        if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
            price = count * 2.50;
            console.log(price.toFixed(2))
        }
        else if (day === "Saturday" || day === "Sunday") {
            price = count * 2.70;
            console.log(price.toFixed(2));
        }
    }
 
    if (fruit === "apple") {
        if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
            price = count * 1.20;
            console.log(price.toFixed(2))
        }
        else if (day === "Saturday" || day === "Sunday") {
            price = count * 1.25;
            console.log(price.toFixed(2));
        }
    }
    if (fruit === "grapefruit") {
        if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
            price = count * 1.45;
            console.log(price.toFixed(2))
        }
        else if (day === "Saturday" || day === "Sunday") {
            price = count * 1.60;
            console.log(price.toFixed(2));
        }
    }
    if (fruit === "kiwi") {
        if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
            price = count * 2.70;
            console.log(price.toFixed(2))
        }
        else if (day === "Saturday" || day === "Sunday") {
            price = count * 3.00;
            console.log(price.toFixed(2));
        }
    }
 
    if (fruit === "pineapple") {
        if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
            price = count * 5.50;
            console.log(price.toFixed(2))
        }
        else if (day === "Saturday" || day === "Sunday") {
            price = count * 5.60;
            console.log(price.toFixed(2));
        }
    }
 
    if (fruit === "grapes") {
        if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
            price = count * 3.85;
            console.log(price.toFixed(2))
        }
        else if (day === "Saturday" || day === "Sunday") {
            price = count * 4.20;
            console.log(price.toFixed(2));
        }
 
    }
 
 
 
}
 
fruitShop(["apple",

"Tuesday",

"2"]);