function storePreparations(stockArray, orderedStockArray) {
    let storeObj = {};

    for (let i = 0; i < stockArray.length; i += 2) {
        storeObj[stockArray[i]] = Number(stockArray[i + 1])
    }

    for (let i = 0; i < orderedStockArray.length; i += 2) {
        if (!storeObj.hasOwnProperty(orderedStockArray[i])) {
            storeObj[orderedStockArray[i]] = Number(orderedStockArray[i + 1])
        } else {
            storeObj[orderedStockArray[i]] = Number(orderedStockArray[i + 1]) + storeObj[orderedStockArray[i]]
        }

    }
    for (product in storeObj) {
        console.log(`${product} -> ${storeObj[product]}`)
    }

}
storePreparations([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])