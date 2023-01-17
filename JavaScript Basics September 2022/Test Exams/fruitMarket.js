function fruitMarket(input){
    let strawberryPrice = Number(input[0]);

    let bananas = Number(input[1]);
    let oranges = Number(input[2]);
    let raspberries = Number(input[3]);
    let strawberries = Number(input[4]);

    let raspberriesPrice = strawberryPrice / 2;
    let raspberriesTotalPrice = raspberriesPrice * raspberries;
    let orangesPrice = raspberriesPrice - (raspberriesPrice * 0.40);
    let orangesTotalPrice = orangesPrice * oranges;
    let bananasPrice = raspberriesPrice - (raspberriesPrice * 0.80);
    let bananasTotalPrice = bananasPrice * bananas;
    let strawberryTotalPrice = strawberryPrice * strawberries;

    let totalPrice = raspberriesTotalPrice + orangesTotalPrice + bananasTotalPrice + strawberryTotalPrice;

    console.log(totalPrice.toFixed(2));
}
fruitMarket(["63.5","3.57","6.35","8.15","2.5"])