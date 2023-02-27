function storeProvisions(array, orderedProducts) {
    for (let i = 0; i < array.length; i++) {
        if (i % 2 !== 0) {
            array[i] = Number(array[i])
        }
    }

    class Products {
        constructor(name, quantity) {
            this.name = name;
            this.quantity = quantity;
        }
        callProducts() {
            console.log(`${this.name} -> ${this.quantity}`)
        }
    }

    for (let i = 0; i < orderedProducts.length; i += 2) {
        let product = orderedProducts[i]
        if (array.indexOf(product) === -1) {
            let quantity = Number(orderedProducts[i + 1])
            array.push(product)
            array.push(quantity)
        } else {
            let product = orderedProducts[i]
            let quantity = Number(orderedProducts[i + 1])
            let neededIndex = array.indexOf(product) + 1
            let totalQuantity = array[neededIndex] + quantity
            array.splice(neededIndex, 1, totalQuantity)
        }

    }
    let index = 0
    while (index < array.length) {
        let product = array[index]
        index++
        let quantity = array[index]
        index++
        let objectProducts = new Products(product, quantity)
        objectProducts.callProducts()
    }

}
storeProvisions([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ])