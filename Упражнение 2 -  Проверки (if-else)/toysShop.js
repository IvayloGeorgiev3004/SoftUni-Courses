function toysShop(input){
    let vacationPrice = Number(input[0]);
    let puzzels = Number(input[1]);
    let dolls = Number(input[2]);
    let teddyBears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let toysPrice = puzzels * 2.60 + dolls * 3 + teddyBears * 4.10 + minions * 8.20 + trucks * 2;
    let totalToysNumber = puzzels + dolls + teddyBears + minions + trucks;
    let naem = 0

    if (totalToysNumber >= 50){
        toysPrice = toysPrice - (toysPrice* 0.25)
    }
     naem = toysPrice * 0.10
     toysPrice = toysPrice - naem
     let diff = Math.abs(toysPrice - vacationPrice)

     if (toysPrice >=vacationPrice ){
        console.log(`Yes! ${diff.toFixed(2)} lv left.`)
     } else {
        console.log(`Not enough money! ${diff.toFixed(2)} lv needed.`)
     }

}
toysShop(["320", "8", "2", "5", "5", "1"])