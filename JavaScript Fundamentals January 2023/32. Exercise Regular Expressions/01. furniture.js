function furniture(array) {
    let regex = />>(?<furniture>[A-Z]+[a-z]*)<<(?<price>[.|\w]+)!(?<quantity>\w+)/g
    let filteredString = array.join(" ")
    let sum = 0;
    let result = regex.exec(filteredString)

    console.log(`Bought furniture: `)
    while (result !== null) {
        let price = Number(result.groups.price * result.groups.quantity)
        sum += price
        console.log(result.groups.furniture)
        result = regex.exec(filteredString)
    }
    console.log(`Total money spend: ${sum.toFixed(2)}`)
}
furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']
)