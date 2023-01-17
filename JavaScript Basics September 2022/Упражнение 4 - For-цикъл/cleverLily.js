function cleverLily(input) {

    let lilyAge = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toySingePrice = Number(input[2]);

    let toyCounter = 0;
    let moneyCounter = 0;
    let moneySaved = 0
    let stolenMoney = 0;
    let finalMoney = 0;
    let toysTotalPrice = 0;

    for (let i = 1; i <= lilyAge; i++) {
        if (i % 2 === 0) {
            moneyCounter = moneyCounter + 10
            moneySaved = moneyCounter + moneySaved
            stolenMoney++
        } else {
            toyCounter++
        }
    }
    toysTotalPrice = toyCounter * toySingePrice;
    finalMoney = (moneySaved + toysTotalPrice) - stolenMoney;

    if (finalMoney >= washingMachinePrice) {
        console.log(`Yes! ${(finalMoney - washingMachinePrice).toFixed(2)}`)
    } else if (finalMoney < washingMachinePrice) {
        console.log(`No! ${(washingMachinePrice - finalMoney).toFixed(2)}`)
    }

}
cleverLily(["21",

"1570.98",

"3"])