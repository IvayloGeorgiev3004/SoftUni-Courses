function movieStars(input) {
    let totalBudget = Number(input[0]);
    let totalSalaries = 0;
    let index = 1;
    let currentInput = input[index]

    while (currentInput !== "ACTION") {

        if (currentInput.length <= 15) {
            totalBudget -= Number(input[index + 1]);
            index++
        } else {
            let salary = totalBudget * 0.20
            totalBudget -= salary
        }
        if (totalBudget <= 0) {
            console.log(`We need ${Math.abs(totalBudget).toFixed(2)} leva for our actors.`)
            break;
        }

        index++
        currentInput = input[index]

    }
    if (totalBudget > 0) {
        console.log(`We are left with ${Math.abs(totalBudget).toFixed(2)} leva.`)
    }

}
movieStars(["170000",
    "Ben Affleck",
    "40000.50",
    "Zahari Baharov",
    "80000",
    "Tom Hanks",
    "2000.99",
    "ACTION"])
