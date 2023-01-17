function shopping2(input){
    let budget = Number(input[0]);
    let videoCardsNumber = Number(input[1]);
    let processorsNumber = Number(input[2]);
    let ramNumber = Number(input[3]);

    let videoCardPrice = 250;

    let totalVideoCardPrice =  videoCardPrice * videoCardsNumber;
    let processorsPrice = processorsNumber * (totalVideoCardPrice * 0.35);
    let ramPrice = ramNumber * (totalVideoCardPrice * 0.10);

    let totalPrice = totalVideoCardPrice + processorsPrice + ramPrice

    if (videoCardsNumber > processorsNumber){
        totalPrice = totalPrice - (totalPrice * 0.15)
    }
    let difference = Math.abs(totalPrice - budget)
    if (totalPrice <= budget){
        console.log(`You have ${difference.toFixed(2)} leva left!`)
    } else {
       console.log(`Not enough money! You need ${difference.toFixed(2)} leva more!`)
    }


}
shopping2(["920.45",

"3",

"1",

"1"])