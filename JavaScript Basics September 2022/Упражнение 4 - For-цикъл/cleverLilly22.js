function cleverLilly22(input) {
    let lillyAge = Number(input[0]);
    let washerMachinePrice = Number(input[1]);
    let singleToyPrice = Number(input[2]);

    let toyCounter = 0;
    let moneyCounter = 0;
    let addedMoney = 10
    let stolenMoneyCounter = 0;
    let totalSavedMoney = 0;

    for (let i = 1; i <= lillyAge; i++) {
        if (i % 2 === 0) {
            moneyCounter += addedMoney
            addedMoney += 10
            stolenMoneyCounter++
        } else {
            toyCounter++
        }
    }
    totalSavedMoney = (moneyCounter - stolenMoneyCounter) + (toyCounter * singleToyPrice)
    if (totalSavedMoney >= washerMachinePrice) {
        console.log(`Yes! ${(totalSavedMoney - washerMachinePrice).toFixed(2)}`)
    } else {
        console.log(`No! ${(washerMachinePrice - totalSavedMoney).toFixed(2)}`)
    }

}
cleverLilly22(["10",

    "170.00",

    "6"])