function birthdayParty2222(){
    let input = 2250
    let rent = Number(input);
    let cakePrice = (rent * 20) / 100
    let drinksPrice = cakePrice * 0.55
    let animatorPrice = rent / 3;

    let finalPrice = rent + cakePrice + drinksPrice + animatorPrice

    console.log(finalPrice)



}
birthdayParty2222()