function schoolSupplies(input){
    let pencils = Number(input[0]);
    let markers = Number(input[1]);
    let litters = Number(input[2]);
    let discount = Number(input[3]);

    let pencilsPrice = pencils * 5.80;
    let markersPrice = markers * 7.20;
    let cleanerDetergentPrice = litters * Number(1.20);

    let FinalPrice = pencilsPrice + markersPrice + cleanerDetergentPrice;
    let discountPrice = FinalPrice - (FinalPrice* discount / 100);

    console.log(discountPrice);

}
schoolSupplies(["2","3","4","25"])