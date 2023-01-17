function schoolSupplies3(input){
    let pens = Number(input[0]);
    let markers = Number(input[1]);
    let preparat = Number(input[2]);
    let discount = Number(input[3]);

    let pensPrice = pens *5.80;
    let markersPrice = markers *7.20;
    let preparatPrice = preparat *1.20;

    let totalPrice = pensPrice + markersPrice + preparatPrice;
    let discountPrice = discount / 100;

    let finalPrice = totalPrice - (totalPrice * discountPrice);

    console.log(finalPrice);

}
schoolSupplies3(["2","3","4","25"])