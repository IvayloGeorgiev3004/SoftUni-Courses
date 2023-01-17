function birthDayParty(input){
    let naemNaZala = Number(input[0]);

    let cakePrice = naemNaZala * 0.20;
    let drinksPrice = cakePrice - (cakePrice * 0.45);
    let animatorPrice = naemNaZala / 3;

    let totalPrice = cakePrice + drinksPrice + animatorPrice + naemNaZala;

    console.log(totalPrice)


}
birthDayParty(["3720"]);