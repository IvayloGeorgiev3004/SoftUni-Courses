function catalogue(array) {

    let catalogueObj = {}
    array.forEach(element => {
        let [key, value] = element.split(" : ")
        value = Number(value)
        catalogueObj[key] = value
    });
    let sortedCatalogue = Object.keys(catalogueObj).sort((a, b) => a.localeCompare(b))

    let char = ""
    sortedCatalogue.forEach(element => {
        if (char !== element[0]) {
            char = element[0]
            console.log(char)
        }
        console.log(` ${element}: ${catalogueObj[element]}`)

    })
}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
])