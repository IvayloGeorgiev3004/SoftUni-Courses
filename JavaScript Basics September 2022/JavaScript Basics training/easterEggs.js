function easterEggs(input) {
    let totalEggs = Number(input[0]);
    let orangeCounter = 0;
    let blueCounter = 0;
    let greenCounter = 0;
    let redCounter = 0;
    let eggsColor = ""
    let maxColor = Number.MIN_SAFE_INTEGER;
    let bestColor = ""

    for (let i = 0; i < totalEggs; i++) {
        eggsColor = input[i];
        switch (eggsColor) {
            case "orange": orangeCounter++;
                if (orangeCounter > maxColor) {
                    maxColor = orangeCounter
                    bestColor = input[i];
                }
                break;
            case "blue": blueCounter++;
                if (blueCounter > maxColor) {
                    maxColor = blueCounter
                    bestColor = input[i];
                }
                break;
            case "green": greenCounter++;
                if (greenCounter > maxColor) {
                    maxColor = greenCounter
                    bestColor = input[i];
                }
                break;
            case "red": redCounter++;
                if (redCounter > maxColor) {
                    maxColor = redCounter
                    bestColor = input[i];
                }
                break;

        }
    }
    console.log(`Red eggs: ${redCounter}`)
    console.log(`Orange eggs: ${orangeCounter}`)
    console.log(`Blue eggs: ${blueCounter}`)
    console.log(`Green eggs: ${greenCounter}`)
    console.log(`Max eggs: ${maxColor} -> ${bestColor}`)
}
easterEggs(["4",
    "blue",
    "red",
    "blue",
    "orange"])