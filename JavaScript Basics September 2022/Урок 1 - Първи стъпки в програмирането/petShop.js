function petShop(input){
    let dogFoodPrice = Number(2.50);
    let catFoodPrice = Number(4);
    let res = input[0]*dogFoodPrice;
    let res2 = input[1]*catFoodPrice;
    let res3 = res + res2
    console.log(res3 + " lv.")

}
petShop(["5 ","4 "])

function petShop2(input){
    let dogFood = Number(2.50);
    let catFood = Number(4);
    let res = dogFood *input[0] + catFood *input[1] + " lv.";
    console.log(res);
}
petShop2(["5 ","4 "])

function petShop3(input){
    let dogFood = Number(2.50);
    let catFood = Number(4);
    let res = dogFood *input[0] + catFood *input[1];
    console.log(res + " lv.");
}
petShop3(["5 ","4 "])