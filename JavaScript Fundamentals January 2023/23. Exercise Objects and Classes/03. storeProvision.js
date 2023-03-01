function storeProvision(array, array2) {
    let productsObj = {};
    let finalArray = [];

    for (let i = 0; i < array.length; i += 2) {
        productsObj.name = array[i]
        productsObj.quantity = Number(array[i + 1])
        finalArray.push(productsObj)
        debugger
    }

    for (let i = 0; i < array2.length; i += 2) {
        debugger

    }
    debugger
}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ])