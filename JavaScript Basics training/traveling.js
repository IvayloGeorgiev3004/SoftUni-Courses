function traveling(input) {
    let index = 0;
    let currentDestination = input[index];
    index++
    let currentBudget = Number(input[index]);
    let moneySavedCurrentTrip = 0
    let totalMoneySaved = 0;

    while (currentDestination !== "End") {
        for (i = currentBudget; i >= totalMoneySaved; i++) {
            index++
            moneySavedCurrentTrip = Number(input[index])
            totalMoneySaved += moneySavedCurrentTrip
            if (totalMoneySaved >= currentBudget) {
                totalMoneySaved = 0;
                currentBudget = 0;
                console.log(`Going to ${currentDestination}!`)
                break;
            }
        }
        index++
        currentDestination = input[index]
        index++
        currentBudget = Number(input[index])

    }

}
traveling(["France",
    "2000",
    "300",
    "300",
    "200",
    "400",
    "190",
    "258",
    "360",
    "Portugal",
    "1450",
    "400",
    "400",
    "200",
    "300",
    "300",
    "Egypt",
    "1900",
    "1000",
    "280",
    "300",
    "500",
    "End"])