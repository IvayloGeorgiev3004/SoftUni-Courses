function safari(input){
    let budget = Number(input[0]);
    let petrolLiters = Number(input[1]);
    let day = input[2];

    let petrolPrice = petrolLiters * 2.10;
    let tourGuidePrice = 100;

    let totalPrice = petrolPrice + tourGuidePrice;
    let moneyLeft = 0;

    if (day === 'Sunday'){
        totalPrice = totalPrice - (totalPrice * 0.20);
    } else {
        totalPrice = totalPrice - (totalPrice * 0.10);
    }
    moneyLeft = Math.abs(totalPrice - budget);
    if (budget >= totalPrice){
        console.log(`Safari time! Money left: ${moneyLeft.toFixed(2)} lv.`)
     } else {
        console.log(`Not enough money! Money needed: ${moneyLeft.toFixed(2)} lv.`)
     }

}
safari(["1000","10","Sunday"])

