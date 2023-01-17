function basketEquipment(input){

    let yearlyTax = Number(input[0]);

    let sneakers = yearlyTax - (yearlyTax * 40) / 100;
    let basketOutfit = sneakers - (sneakers * 20) / 100;
    let basketBall = basketOutfit / 4
    let accessories = basketBall / 5 

    let finalPrice = yearlyTax + sneakers + basketOutfit + basketBall + accessories

    console.log(finalPrice)

}
basketEquipment(["365"])