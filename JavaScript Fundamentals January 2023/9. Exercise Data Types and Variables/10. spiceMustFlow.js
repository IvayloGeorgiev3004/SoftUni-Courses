function spiceMustFlow(startingYield) {
    let dayCounter = 0;
    let totalYield = 0;

    while (startingYield >= 100) {
        dayCounter++
        totalYield += startingYield;
        totalYield -= 26;
        startingYield -= 10;
    }

    console.log(dayCounter)

    if (totalYield > 26) {
        console.log(totalYield - 26)
    } else {
        console.log(totalYield)
    }
}
spiceMustFlow(110)