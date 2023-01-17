function basketEquipement(input){
    let yearlyTrainingPrice = Number(input[0]);
    let shoes = (yearlyTrainingPrice * 40) / 100

    let shoesPrice = yearlyTrainingPrice - shoes;
    let basketShirtPrice = shoesPrice - (shoesPrice * 0.20);
    let basketballPrice = basketShirtPrice / 4;
    let basketAccessories = basketballPrice / 5;

    let totalPrice = yearlyTrainingPrice + shoesPrice + basketShirtPrice + basketballPrice + basketAccessories;

    console.log(totalPrice)
}
basketEquipement(["365"]);