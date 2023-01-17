function balls(input) {
    let totalBallsCount = Number(input[0]);
    let currentIndex = ""
    let totalPoints = 0;

    let redBallsCounter = 0;
    let orangeCounter = 0;
    let yellowCounter = 0;
    let whiteCounter = 0;
    let otherColorCounter = 0;
    let divideCounter = 0;

    for (let i = 1; i <= totalBallsCount; i++) {
        currentIndex = input[i]
        switch (currentIndex) {
            case "red":
                redBallsCounter++; totalPoints += 5; break;
            case "orange":
                orangeCounter++; totalPoints += 10; break;
            case "yellow":
                yellowCounter++; totalPoints += 15; break;
            case "white":
                whiteCounter++; totalPoints += 20; break;
            case "black":
                totalPoints = Math.floor(totalPoints / 2);; divideCounter++; break;
            default:
                otherColorCounter++; continue;

        }

    }
    console.log(`Total points: ${totalPoints}`)
    console.log(`Red balls: ${redBallsCounter}`)
    console.log(`Orange balls: ${orangeCounter}`)
    console.log(`Yellow balls: ${yellowCounter}`)
    console.log(`White balls: ${whiteCounter}`)
    console.log(`Other colors picked: ${otherColorCounter}`)
    console.log(`Divides from black balls: ${divideCounter}`)

}
balls(["5",
    "red",
    "red",
    "ddd",
    "ddd",
    "ddd"])
