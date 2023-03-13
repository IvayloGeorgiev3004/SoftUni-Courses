function makeADictionary(array) {

    let finalObj = {}
    for (let strings of array) {
        let object = JSON.parse(strings)
        let name = Object.keys(object)
        let description = Object.values(object)
        finalObj[name] = description;
    }
    let sortedWords = Object.entries(finalObj).sort(([name, description], [name2, description2]) => name.localeCompare(name2))

    sortedWords.forEach(element => {
        let word = element.shift()
        let description = element.shift()
        debugger
        console.log(`Term: ${word} => Definition: ${description}`)
    })
}
makeADictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Coffee":"TEST COFFEE"}'
])

