function toyShop(input){
    let vacationPrice = Number(input[0]);
    let puzzels = Number(input[1]);
    let dolls = Number(input[2]);
    let bears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);
    
    let totalToys = puzzels + dolls + bears + minions + trucks;

    let puzzelPrice = puzzels * 2.6;
    let dollsPrice = dolls * 3;
    let bearsPrice = bears * 4.1;
    let minionPrice = minions * 8.2;
    let truckPrice = trucks * 2;

    let totalPrice = puzzelPrice + dollsPrice + bearsPrice + minionPrice + truckPrice ;

    if (totalToys >= 50){
        totalPrice = totalPrice - (totalPrice * 0.25);
    }
    let rent = totalPrice * 0.10;
    let totalProfit = totalPrice - rent

    if (totalProfit >= vacationPrice){
        let enoughMoney = Math.abs(totalProfit - vacationPrice);
        enoughMoney =  enoughMoney.toFixed(2);
        console.log(`Yes! ${enoughMoney} lv left.`);
    } else if (totalProfit < vacationPrice){
        let notEnoughMoney = Math.abs(totalProfit - vacationPrice);
        notEnoughMoney =  notEnoughMoney.toFixed(2);
        console.log(`Not enough money! ${notEnoughMoney.toFixed(2)} lv needed.`);
    }
   
}
toyShop(["320", "8", "2", "5", "5", "1"])