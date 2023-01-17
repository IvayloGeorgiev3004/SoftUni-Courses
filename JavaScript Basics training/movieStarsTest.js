function movieStarsTest(input) {
    let totalBudget = Number(input[0]);
    let currentBudget = totalBudget;
    let totalMoneyForSalaries = 0;
    let CurrentSalary = 0;
    let index = 1;
    let currentInput = input[index]

    while (currentInput !== "ACTION") {

        if (currentInput.length <= 15) {
            CurrentSalary = Number(input[index + 1])
            totalMoneyForSalaries += CurrentSalary
            currentBudget -= CurrentSalary
            index++
        } else {
            CurrentSalary = currentBudget * 0.20
            totalMoneyForSalaries += CurrentSalary
            currentBudget -= CurrentSalary
        }
        if (totalMoneyForSalaries >= totalBudget) {
            console.log(`We need ${(totalMoneyForSalaries - totalBudget).toFixed(2)} leva for our actors.`)
            break;
        }

        index++
        currentInput = input[index]

    }
    if (totalMoneyForSalaries < totalBudget) {
        console.log(`We are left with ${(totalBudget - totalMoneyForSalaries).toFixed(2)} leva.`)
    }

}
movieStarsTest(["170000",
    "Ben Affleck",
    "40000.50",
    "Zahari Baharov",
    "80000",
    "Tom Hanks",
    "2000.99",
    "ACTION"])
