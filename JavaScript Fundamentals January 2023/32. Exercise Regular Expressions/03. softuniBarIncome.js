function softuniBarIncome(array) {
    let regex = /%(?<name>[A-Z][a-z]+)%[^\||,|$|%|.\d]*<(?<product>\w+)>[^\||,|$|%|.|\d]*\|(?<count>[\d]+)\|[^\||,|$|%|.|\d]*(?<price>[\d|.]+)\$/g

    let sum = 0
    for (let command of array) {
        let match = command.match(regex)
        if (match !== null) {
            let allMatches = command.matchAll(regex)
            for (let results of allMatches) {
                let income = Number(results.groups.count * results.groups.price)
                sum += income;
                let name = results.groups.name
                let product = results.groups.product
                console.log(`${name}: ${product} - ${income.toFixed(2)}`)
            }
        }
    }
    console.log(`Total income: ${sum.toFixed(2)}`)
}
softuniBarIncome(['%George%<Croissant>|2|10.3$',
    '%Peter%<Gum>|1|1.3$',
    '%Maria%<Cola>|1|2.4$',
    'end of shift'])