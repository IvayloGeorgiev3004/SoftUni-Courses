function godzillaVsKong(input){
    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let clothingPerStatist = Number(input[2]);

    let decor = budget * 0.10;
    let clothingTotalPrice = clothingPerStatist * statists;
    let totalBudget = decor + clothingTotalPrice ;

    if (statists > 150){
        clothingTotalPrice = clothingTotalPrice - (clothingTotalPrice * 0.10 );
    }

    if (totalBudget <= budget){
        totalBudget = Math.abs(totalBudget - budget);
        console.log("Action!");
        console.log(`Wingard starts filming with ${totalBudget.toFixed(2)} leva left.`);
     } else {
        totalBudget = Math.abs(totalBudget - budget) ;
        console.log("Not enough money!");
        console.log(`Wingard needs ${totalBudget.toFixed(2)} leva more.`);
    }

}
godzillaVsKong(["15437.62",

"186",

"57.99"])