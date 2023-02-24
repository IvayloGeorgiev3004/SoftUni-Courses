function convertToObject(string) {

    let objectFromString = JSON.parse(string);

    //  let stringFromObject = JSON.stringify(objectFromString)

    for (let keys of Object.keys(objectFromString)) {
        console.log(`${keys}: ${objectFromString[keys]}`)
    }

    debugger
}
convertToObject('{"name": "George", "age": 40, "town": "Sofia"}')