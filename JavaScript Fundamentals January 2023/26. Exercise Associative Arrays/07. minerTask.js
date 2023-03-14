function minerTask(array) {
    let finalMap = new Map()
    let name = ""
    let quantity = 0;

    for (let i = 0; i < array.length; i += 2) {
        if (i % 2 === 0) {
            name = array[i]
            quantity = Number(array[i + 1])
        }
        if (!finalMap.has(name)) {
            finalMap.set(name, quantity)
        } else {
            let currentQuantity = finalMap.get(name)
            currentQuantity += quantity
            finalMap.set(name, currentQuantity)
        }
    }
    for (let finalResult of finalMap.entries()) {
        let resources = finalResult.shift()
        let quantity = Number(finalResult.shift())
        console.log(`${resources} -> ${quantity}`)
    }
}
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '150000000'
]
)