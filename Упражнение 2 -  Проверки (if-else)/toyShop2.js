function toyShop2(input){
        let vacationPrice = Number(input[0]);
        let puzzles = Number(input[1]);
        let dolls = Number(input[2]);
        let bears = Number(input[3]);
        let minions = Number(input[4]);
        let trucks = Number(input[5]);
        
        let totalToys = puzzles + dolls + bears + minions + trucks;
    
        let puzzlePrice = puzzles * 2.6;
        let dollsPrice = dolls * 3;
        let bearsPrice = bears * 4.1;
        let minionPrice = minions * 8.2;
        let truckPrice = trucks * 2;

        let totalPrice = puzzlePrice + dollsPrice + bearsPrice + minionPrice + truckPrice

if (totalToys >= 50){
    totalPrice = totalPrice - (totalPrice *0.25)
}

    totalPrice = totalPrice - (totalPrice * 0.10)

if (totalPrice >= vacationPrice){
    totalPrice = Math.abs(totalPrice - vacationPrice)
    console.log(`Yes! ${totalPrice.toFixed(2)} lv left.`)
} else  if (totalPrice < vacationPrice){
    totalPrice = Math.abs(totalPrice - vacationPrice)
    console.log(`Not enough money! ${totalPrice.toFixed(2)} lv needed.`)
}

}
toyShop2(["320", "8", "2", "5", "5", "1"])