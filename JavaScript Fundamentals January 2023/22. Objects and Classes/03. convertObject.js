function convertObject(string) {
    let newObjectFromString = JSON.parse(string)
    debugger
    for (let keys of Object.keys(newObjectFromString)) {
        console.log(`${keys}: ${newObjectFromString[keys]}`)
    }
}
convertObject('{"name": "George", "age": 40, "town": "Sofia"}')