function storeProvisions(stock, ordered) {

    let finalObj = {}
    let index = 0;
    while (index < stock.length) {
        let product = stock[index];
        let quantity = Number(stock[index + 1]);
        index += 2;
        finalObj[product] = quantity
    }
    index = 0;
    while (index < ordered.length) {
        let product = ordered[index];
        let quantity = Number(ordered[index + 1]);

        if (!finalObj.hasOwnProperty(product)) {
            finalObj[product] = quantity
        } else {
            let currentQuantity = finalObj[product];
            currentQuantity += quantity
            finalObj[product] = currentQuantity
        }
        index += 2;

    }
    for (let result in finalObj) {
        console.log(`${result} -> ${finalObj[result]}`)
    }
}
storeProvisions([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])