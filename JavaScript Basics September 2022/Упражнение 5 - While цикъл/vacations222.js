function vacations222(input) {
    let vacationMoneyNeeded = Number(input[0]);
    let startingMoney = Number(input[1]);
    let index = 2;
    let currentInput = input[index];


    let daysCounter = 0;
    let spendCounter = 0;
    let fiveDaysCounter = 0;
    
    while (vacationMoneyNeeded >= startingMoney) {
        if (currentInput === "spend") {
            daysCounter++
            spendCounter++
            startingMoney -= Number(input[index + 1])
            if (startingMoney < 0) {
                startingMoney = 0;
            }
        } else if (currentInput === "save") {
            daysCounter++
            spendCounter = 0;
            startingMoney += Number(input[index + 1])
        }
        if (startingMoney >= vacationMoneyNeeded) {
            console.log(`You saved the money for ${daysCounter} days.`);
            break;
        }
        if (spendCounter >= 5) {
            console.log(`You can't save the money.`)
            console.log(daysCounter)
            break;
        }
        index += 2
        currentInput = input[index];

    }

}
vacations222(["110",
    "60",
    "spend",
    "10", "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10",
    "spend",
    "10"])
