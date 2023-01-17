function summerOutfit(input) {
    let temperature = Number(input[0]);
    let timeOfTheDay = input[1];

    let outFit;
    let shoes;

    if (timeOfTheDay === "Morning") {
        if (10 <= temperature && temperature <= 18) {
            outFit = "Sweatshirt";
            shoes = "Sneakers";
        } else if (18 <= temperature && temperature <= 24) {
            outFit = "Shirt";
            shoes = "Moccasins";
        } else if (temperature >= 25) {
            outFit = "T-Shirt";
            shoes = "Sandals";
        }
    } else if (timeOfTheDay === "Afternoon") {
        if (10 <= temperature && temperature <= 18) {
            outFit = "Shirt";
            shoes = "Moccasins";
        } else if (18 <= temperature && temperature <= 24) {
            outFit = "T-Shirt";
            shoes = "Sandals";
        } else if (temperature >= 25) {
            outFit = "Swim Suit";
            shoes = "Barefoot";
        }
    } else if (timeOfTheDay === "Evening") {
        outFit = "Shirt";
        shoes = "Moccasins"
    }
    console.log(`It's ${temperature} degrees, get your ${outFit} and ${shoes}.`)
}
summerOutfit(["22",

"Afternoon"])