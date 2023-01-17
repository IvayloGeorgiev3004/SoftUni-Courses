function foodDelivery2(input){
    let chickenMenues = Number(input[0]);
    let fishMenues = Number(input[1]);
    let vegiMenues = Number(input[2]);

    let chickenMenuesPrice = chickenMenues * 10.35;
    let fishMenuesPrice = fishMenues * 12.40;
    let vegiMenuesPrice = vegiMenues * 8.15;
    let allMenuesPrice = chickenMenuesPrice + fishMenuesPrice + vegiMenuesPrice;

    let dessertPrice = (allMenuesPrice * 20) / 100;
    let deliveryPrice =  2.50;

    let finalPrice = allMenuesPrice + dessertPrice + deliveryPrice;

    console.log(finalPrice);

}
foodDelivery2(["2","4","3"])