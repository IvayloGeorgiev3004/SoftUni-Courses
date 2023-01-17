function task1(input) {
    let paperRolls = Number(input[0]);
    let clothRolls = Number(input[1]);
    let litersGlue = Number(input[2]);
    let discountPercent = Number(input[3]);

    let paperRollsPrice = paperRolls * 5.80;
    let clothRollsPrice = clothRolls * 7.20;
    let gluePrice = litersGlue * 1.20;

    let totalPrice = paperRollsPrice + clothRollsPrice + gluePrice;
    let finalPrice = totalPrice - (totalPrice * discountPercent / 100)


    console.log(finalPrice.toFixed(3))
}
task1(["4",
    "2",
    "5",
    "13"])
