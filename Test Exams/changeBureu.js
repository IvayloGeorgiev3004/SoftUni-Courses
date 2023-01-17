function changeBureu(input){
    let bitcoinPrice = input[0] * 1168 // лева
    let yuanPrice = input[1] * 0.15 // долари
    let yuanPriceInLevs = yuanPrice * 1.76 // лева

    let totalPrice = bitcoinPrice + yuanPriceInLevs
    let finalPrice = totalPrice / 1.95

    let commision = input[2]
    let commisionPrice = finalPrice * commision / 100
    let result = finalPrice - commisionPrice

    console.log(result.toFixed(2))

}
changeBureu([20,5678,2.4])