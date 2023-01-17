function task5(input) {
    let baseCampHeight = 5364;
    let everestHeight = 8848;
    let daysCounter = 0;
    let index = 0;
    let currentInput = input[index]
    let dailyAscend = 0;
    let totalDistance = baseCampHeight;

    while (currentInput !== "END") {
        if (currentInput === "Yes") {
            daysCounter++
        }
        if (daysCounter >= 5) {
            break;
        }
        index++
        dailyAscend = Number(input[index])
        totalDistance += dailyAscend
        if (totalDistance >= everestHeight) {
            daysCounter++
            break;
        }
        index++
        currentInput = input[index]
    }
    if (totalDistance >= everestHeight) {
        console.log(`Goal reached for ${daysCounter} days!`)
    } else {
        console.log(`Failed!`)
        console.log(`${totalDistance}`)
    }

}
task5(["Yes",
    "700",
    "END"])
