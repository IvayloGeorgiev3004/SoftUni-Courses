function petShop2(input){
    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);

    let dogFoodPrice = dogFood * 2.50;
    let catFoodPrice = catFood * 4;

    let finalPrice = dogFoodPrice + catFoodPrice;

    console.log(finalPrice + " lv.");

}
petShop2(["5","4"])