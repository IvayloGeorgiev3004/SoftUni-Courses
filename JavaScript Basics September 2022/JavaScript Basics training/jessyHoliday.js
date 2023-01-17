function jesseHoliday(input) {
    let moneyNeeded = Number(input[0]);
    let startingMoney = Number(input[1]);
    let spendCounter = 0;
    let index = 2
    let saveOrSpend = input[index]
    index++
    let moneySavedOrSpend = Number(input[index])
    let daysCounter = 0;


    while (startingMoney < moneyNeeded) {
        daysCounter++
        if (saveOrSpend === "spend") {
            spendCounter++
            startingMoney -= moneySavedOrSpend
            if (startingMoney <= 0) {
                startingMoney = 0
            } else if (spendCounter === 5) {
                console.log(`You can't save the money.`)
                console.log(daysCounter)
                break;
            }
        } else if (saveOrSpend === "save") {
            spendCounter = 0
            startingMoney += moneySavedOrSpend
            if (startingMoney >= moneyNeeded) {
                console.log(`You saved the money for ${daysCounter} days.`)
                break;
            }
        }
        index++
        saveOrSpend = input[index]
        index++
        moneySavedOrSpend = Number(input[index])
    }

}
jesseHoliday(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"])