function storage(array) {
    let listOfProducts = new Map()

    for (let commands of array) {
        let [product, quantity] = commands.split(" ")
        quantity = Number(quantity)
        if (!listOfProducts.has(product)) {
            debugger
            listOfProducts.set(product, quantity)
        } else {
            let currProductQuantity = listOfProducts.get(product)
            currProductQuantity += quantity
            listOfProducts.set(product, currProductQuantity)
        }
    }
    for (let [product, quantity] of listOfProducts) {
        console.log(`${product} -> ${quantity}`)
    }
    debugger
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])