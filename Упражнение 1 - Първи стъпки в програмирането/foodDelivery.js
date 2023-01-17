function foodDelivery(input){

    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let vegiMenu = Number(input[2]);

    let chickenMenuPrice = chickenMenu* 10.35
    let fishMenuPrice = fishMenu *12.40
    let vegiMenuPrice = vegiMenu *8.15

    let menuTotalPrice = chickenMenuPrice + fishMenuPrice + vegiMenuPrice
    let desertPrice = menuTotalPrice * 0.2
    let deliveryPrice = Number(2.50)

    let result = menuTotalPrice + desertPrice + deliveryPrice

    
    console.log(result)

}
foodDelivery(["2","4","3"])