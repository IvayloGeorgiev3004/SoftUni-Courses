
function fruitOrVegetable(input) {
    let fruit = input[0];
    switch (fruit) {
        case "banana":
        case "apple":
        case "kiwi":
        case "cherry":
        case "lemon":
        case "grapes":
            console.log("fruit");
            break;
        case "tomato":
        case "cucumber":
        case "pepper":
        case "carrot":
            console.log("vegetable");
            break;
        default:
            console.log("unknown");

    }
}
fruitOrVegetable(["water"])



// ВТОРО РЕШЕНИЕ

function fruitOrVegetable2(input) {
    let fruit = input[0];

    if (fruit === "banana" || fruit === "apple" || fruit === "kiwi" || fruit === "cherry" || fruit === "lemon" || fruit === "grapes") {
        console.log("fruit");
    } else if (fruit === "tomato" || fruit === "cucumber" || fruit === "pepper" || fruit === "carrot") {
        console.log("vegetable");
    } else {
        console.log("unknown")
    }

}
fruitOrVegetable2(["cucumber"])