function storage(array) {
    let map = new Map()

    for (let lines of array) {
        let [key, value] = lines.split(" ")
        value = Number(value)
        if (map.has(key)) {
            let currentQuantity = map.get(key)
            map.set(key, currentQuantity + value)
        } else {
            map.set(key, value)
        }
    }


    for (let elements of map) {
        let [product, quantity] = elements.join(" ").split(" ")
        debugger
        console.log(product + " ->" + " " + quantity)
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'])