function shopping(input){
    let budget = Number(input[0]);
    let videocards = Number(input[1]);
    let processors = Number(input[2]);
    let ram = Number(input[3]);

    let videoCardPrice = videocards * 250;
    let processorsPrice = processors * (videoCardPrice * 0.35);
    let ramPrice = ram * (videoCardPrice * 0.10);

    let finalPrice = videoCardPrice + processorsPrice + ramPrice;
    let discount = 0;
    let difference = 0

    if (videocards > processors){
        discount = finalPrice * 0.15;
     } 
    finalPrice = finalPrice - discount

    difference = Math.abs(finalPrice - budget);
    
    if (budget >= finalPrice){
        console.log(`You have ${difference.toFixed(2)} leva left!`)
    } else {
        console.log(`Not enough money! You need ${difference.toFixed(2)} leva more!`)
    }


}
shopping(["920.45","3","13","4"])