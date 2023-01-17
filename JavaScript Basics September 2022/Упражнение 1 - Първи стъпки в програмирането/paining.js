function painting(input){
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let paintThinner = Number(input[2]);
    let workHours = Number(input[3]);

    let nylonPrice = (nylon + 2) * 1.50;
    let paintPrice = paint + (paint * 0.10); // може и let painttestprice = paint + (paint * 10)/100
    let paintFinalPricce = paintPrice * 14.50;
    let paintThinnerPrice = paintThinner * 5;
    let bagprice = Number(0.40);

    let FinalPrice = nylonPrice + paintFinalPricce + paintThinnerPrice + bagprice;
    let workerksPrice = (FinalPrice *0.30) * workHours;

    let result = FinalPrice + workerksPrice


    console.log(result)

}
    painting(["10","11","4","8"])