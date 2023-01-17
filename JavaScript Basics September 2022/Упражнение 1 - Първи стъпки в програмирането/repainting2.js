function paining2(input){
    let naylon = Number(input[0]);
    let paint = Number(input[1]);
    let razreditel = Number(input[2]);
    let hoursNeeded = Number(input[3]);

    let naylonPrice = (naylon+2) * 1.50;
    let paintTotal = (paint *10) / 100;
    let paintPrice = (paint + paintTotal) * 14.50;
    let razreditelPrice = razreditel * 5;
    let torbichkiPrice = 0.40;

    let totalPrice = naylonPrice + paintPrice + razreditelPrice + torbichkiPrice;
    let workersPrice = (totalPrice * 0.30) * hoursNeeded;

    let result = totalPrice + workersPrice;

    console.log(result);

}
paining2(["10","11","4","8"])